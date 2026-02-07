<template>
  <OnClickOutside @trigger="showDropdown = false">
    <div class="smart-select">
      <div class="select-box" @click="toggleDropdown" ref="wrapperRef">
        <div
          class="form-select d-flex flex-wrap align-items-center gap-1 px-2 py-1"
          :class="[props.class, { 'is-invalid': props.modelValue.errorMessage && required && props.formSubmitted }]"
          :disabled="props.disabled"
          style="min-height: 38px; cursor: pointer"
        >
          <template v-if="multiSelect && Array.isArray(displaySelected) && displaySelected.length">
            <span v-for="(item, index) in displaySelected" :key="index" class="badge badge-primary">
              {{ item[props.displayKey] }}
            </span>
          </template>
          <template v-else>
            <span class="text-muted">
              <template v-if="displaySelected && !Array.isArray(displaySelected)">
                {{ displaySelected }}
              </template>
              <template v-else>
                {{ isPlaceholder ? placeholder || 'Select' : '' }}
              </template>
            </span>
          </template>
        </div>

        <span class="clear-btn" v-if="!disableClearButton && multiSelect ? Array.isArray(displaySelected) && displaySelected.length : displaySelected" @click.stop="clear">
          <vue-feather :type="'x'" />
        </span>
      </div>

      <div class="dropdown" v-if="showDropdown">
        <input type="text" v-model="search" class="form-control" placeholder="Search..." ref="searchInput" @keydown.stop="handleKeydown($event)" />
        <ul class="custom-scrollbar">
          <template v-for="(option, index) in filteredOptions">
            <template v-if="option && option.data && Array.isArray(option.data) && props.showOptions">
              <div class="disabled">
                {{ option[displayKey] }}
              </div>
              <template v-for="(child, childIndex) in option.data" :key="childIndex">
                <li :class="{ selected: isSelected(child) }" @click="handleSelect(child)" :ref="el => setOptionRef(el, index)">
                  {{ child[displayKey] }}
                </li>
              </template>
            </template>
            <template v-else>
              <li :class="{ highlighted: index === highlightedIndex, selected: isSelected(option) }" @click="handleSelect(option)" :ref="el => setOptionRef(el, index)">
                {{ option[displayKey] }}
              </li>
            </template>
          </template>
          <li v-if="!filteredOptions.length" class="no-option">No Records Found</li>
        </ul>
      </div>
    </div>
  </OnClickOutside>
  <template v-if="modelValue?.errorMessage && required && props.formSubmitted">
    <div class="invalid-tooltip" v-if="props.tooltipValidation">{{ modelValue?.errorMessage }}</div>
    <div class="invalid-feedback" v-else>{{ modelValue?.errorMessage }}</div>
  </template>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue';
import type { ComponentPublicInstance } from 'vue';

import { OnClickOutside } from '@vueuse/components';

import type { Select, SelectProps } from '@/types/common';

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: 'Select',
  displayKey: 'label',
  getValueKey: 'label',
  multiSelect: false,
  required: true,
  formSubmitted: false,
  disableClearButton: false,
  tooltipValidation: false,
  isPlaceholder: true,
  disabled: false,
  showOptions: false,
});

const emits = defineEmits(['update:modelValue']);

const showDropdown = ref(false);
const search = ref('');
const highlightedIndex = ref(0);
const wrapperRef = ref(null);
const searchInput = ref<HTMLInputElement | null>(null);
const optionRefs = ref<HTMLElement[]>([]);

const filteredOptions = computed(() => {
  return (props.options as Select[]).filter(option => {
    const key = props.displayKey as keyof Select;
    const val = option[key];

    if (typeof val === 'string' || typeof val === 'number') {
      return val.toString().toLowerCase().includes(search.value.toLowerCase());
    }

    return false;
  });
});

const displaySelected = computed(() => {
  if (props.multiSelect && Array.isArray(props.modelValue.selectedItems)) {
    return props.modelValue.selectedItems;
  } else if (!props.multiSelect && props.modelValue?.selected) {
    return props.modelValue.selected[props.displayKey] || '';
  }
  return '';
});

onMounted(() => {
  if (props.modelValue && filteredOptions.value.length) {
    props.modelValue.selected && handleSelect(props.modelValue.selected);
    setInitialHighlightedIndex();
  }
});

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;

  if (showDropdown.value) {
    nextTick(() => {
      searchInput.value?.focus();
      setInitialHighlightedIndex();
      scrollToHighlighted();
    });
  }
};

function isSelected(option: Select) {
  const key = props.getValueKey as keyof Select;

  if (props.multiSelect) {
    return Array.isArray(props.modelValue.selectedItems) && props.modelValue.selectedItems.some(item => item[key] === option[key]);
  }
  return props.modelValue.selected?.[key] === option[key];
}

const handleSelect = (option: Select) => {
  const key = props.getValueKey as keyof Select;
  if (props.multiSelect) {
    let selected = Array.isArray(props.modelValue.selectedItems) ? [...props.modelValue.selectedItems] : [];
    const index = selected.findIndex(item => item[props.getValueKey] === option[key]);

    if (index >= 0) selected.splice(index, 1);
    else selected.push(option);

    emits('update:modelValue', { selectedItems: selected, data: selected.map(item => item[props.getValueKey]), errorMessage: '', type: 'dropdown' });
  } else {
    emits('update:modelValue', { selected: option, data: option[key], errorMessage: '', type: 'dropdown' });
    showDropdown.value = false;
    search.value = '';
  }
  validate();
};

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown') {
    highlightedIndex.value = (highlightedIndex.value + 1) % filteredOptions.value.length;
    event.preventDefault();
    scrollToHighlighted();
  } else if (event.key === 'ArrowUp') {
    highlightedIndex.value = (highlightedIndex.value - 1 + filteredOptions.value.length) % filteredOptions.value.length;
    event.preventDefault();
    scrollToHighlighted();
  } else if (event.key === 'Enter') {
    if (filteredOptions.value[highlightedIndex.value]) {
      handleSelect(filteredOptions.value[highlightedIndex.value]);
      event.preventDefault();
    }
  }
}

const setInitialHighlightedIndex = () => {
  if (props.modelValue && props.modelValue.selected && filteredOptions.value.length) {
    const selectedIndex = filteredOptions.value.findIndex(item => {
      if (props.displayKey) {
        return item[props.displayKey] === (props.modelValue && props.modelValue.selected && props.modelValue.selected.label);
      } else if (props.getValueKey) {
        return item[props.getValueKey] === (props.modelValue && props.modelValue.selected && props.modelValue.selected.value);
      }
    });
    highlightedIndex.value = selectedIndex !== -1 ? selectedIndex : 0;
  }
};

function setOptionRef(el: Element | ComponentPublicInstance | null, index: number) {
  if (el instanceof HTMLElement) {
    optionRefs.value[index] = el;
  }
}

const scrollToHighlighted = () => {
  const el = optionRefs.value[highlightedIndex.value];
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
};

const validate = () => {
  const isEmpty = (props.multiSelect && (!props.modelValue?.data || props.modelValue?.data?.length === 0)) || (!props.multiSelect && !props.modelValue?.data);

  props.modelValue.errorMessage = isEmpty && props.required ? (props.errorMessage ? props.errorMessage : 'Please select a value') : '';
};

const clear = () => {
  emits(
    'update:modelValue',
    props.multiSelect
      ? { selectedItems: [], data: [], errorMessage: props.required ? (props.errorMessage ? props.errorMessage : 'Please select a value') : '' }
      : { selected: null, data: '', errorMessage: props.required ? (props.errorMessage ? props.errorMessage : 'Please select a value') : '' },
  );
  search.value = '';
};

watch(
  () => props.modelValue,
  () => {
    highlightedIndex.value = 0;
  },
);

watch(
  () => [props.formSubmitted, props.modelValue],
  () => {
    validate();
  },
  { deep: true },
);
</script>

<style scoped>
.smart-select {
  position: relative;
  width: 100%;
}

.select-box {
  position: relative;
  width: 100%;
}

.clear-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.dropdown {
  position: absolute;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  z-index: 1000;
  width: 100%;
  margin-top: 4px;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 220px;
  overflow-y: auto;
}

.dropdown li {
  padding: 8px 12px;
  cursor: pointer;
}

.dropdown li.highlighted {
  background: #f1f1f1;
}

.dropdown li.selected {
  font-weight: bold;
}

.no-option {
  padding: 10px;
  color: #888;
  text-align: center;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 0.875em;
  margin-top: 0.25rem;
}
</style>
