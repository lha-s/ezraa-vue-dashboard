<template>
  <input
    :value="modelValue?.data ? modelValue?.data : ''"
    :type="inputType"
    :id="inputId"
    v-bind:placeholder="isPlaceholder ? placeholder || 'Enter Value' : undefined"
    class="form-control"
    :class="[props.class, { 'is-invalid ': modelValue?.errorMessage && !props.browserValidation }, { 'animated input-shake': animationClass }]"
    @input="onInput"
    @focusout="onInput"
    @focus="showBadge()"
    @blur="hideBadge()"
    v-if="inputType !== 'textarea' && inputType !== 'file'"
    :required="props?.required && props.browserValidation"
    :disabled="props.disabled"
    :list="props.datalist?.length ? `datalistOptions-${inputId}` : undefined"
    :maxlength="props.maxlength"
  />
  <datalist v-if="props.datalist?.length" :id="`datalistOptions-${inputId}`">
    <option v-for="item in props.datalist" :key="item.label" :value="item.label" />
  </datalist>

  <textarea
    :value="modelValue?.data ? modelValue?.data : ''"
    :id="inputId"
    v-bind:placeholder="isPlaceholder ? placeholder || 'Enter Value' : undefined"
    :rows="rows"
    class="form-control"
    :class="[props.class, { 'is-invalid': modelValue?.errorMessage && !props.browserValidation }, { 'error animated input-shake': animationClass }]"
    @input="onInput"
    @focusout="onInput"
    @focus="showBadge()"
    @blur="hideBadge()"
    v-else-if="inputType == 'textarea'"
    :required="props.required && props.browserValidation"
    :disabled="props.disabled"
    :maxlength="props.maxlength"
  />

  <input
    type="file"
    :id="inputId"
    v-bind:placeholder="isPlaceholder ? placeholder || 'Enter Value' : undefined"
    :multiple="multiple"
    class="form-control"
    :class="[props.class, { 'is-invalid': modelValue?.errorMessage && !props.browserValidation }, { 'error animated input-shake': animationClass }]"
    @change="onFileChange"
    :required="props.required && props.browserValidation"
    :disabled="props.disabled"
    v-else-if="inputType === 'file'"
  />

  <template v-if="modelValue?.errorMessage && required && !props.browserValidation">
    <div class="invalid-tooltip" v-if="props.tooltipValidation">{{ modelValue?.errorMessage }}</div>
    <div class="invalid-feedback" v-else>{{ modelValue?.errorMessage }}</div>
  </template>

  <div class="helper-text" v-if="props.helperText">
    <p class="fst-italic c-o-light" v-html="`*${props.helperText}`"></p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';

import type { InputProps } from '@/types/common';
import { validateNonEmptyFields, validateEmail } from '@/utils/validators/InputFieldValidators';

interface ValidationStatus {
  errorMessage: string;
  valid: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
  inputType: 'text',
  required: true,
  rows: 3,
  multiple: false,
  helperText: '',
  disabled: false,
  tooltipValidation: false,
  browserValidation: false,
  animation: false,
  datalist: () => [],
  isPlaceholder: true,
  showLengthBadge: false,
  formatValue: false,
  formatFunction: null,
});

const emit = defineEmits(['update:modelValue', 'badgeVisible']);
let timeoutId: ReturnType<typeof setTimeout> | null = null;

let validStatus = ref<ValidationStatus>({
  errorMessage: '',
  valid: false,
});
let changed = ref<boolean>(false);
const animationClass = ref<string>('');

watch(
  () => props.formSubmitted,
  () => {
    props.formSubmitted && updated(props.modelValue?.data || '');
  },
  { deep: true },
);

onMounted(() => {
  if (props.formSubmitted) {
    updated(props.modelValue?.data || '');
  }
});

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0] || null;

  updated(file); // Call your updated() method
}

function onInput(event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (!target) return;

  updated(target.value);
}

function updated(inputValue?: string | number | File | null) {
  changed.value = true;

  // Handle validation
  if (props.required) {
    if (props.inputType === 'email') {
      validStatus.value = validateEmail(String(inputValue));
    } else if (props.inputType === 'file') {
      const isValid = !!inputValue;
      validStatus.value = {
        valid: isValid,
        errorMessage: isValid ? '' : props.errorMessage || 'File is required.',
      };
    } else {
      validStatus.value = validateNonEmptyFields({
        value: String(inputValue),
        minLength: props.minLength,
        errorMessage: props.errorMessage,
      });
    }
  } else {
    validStatus.value = { valid: true, errorMessage: '' };
  }

  // Prepare emitted value
  let data = inputValue;

  if (props.inputType === 'number') {
    data = inputValue === '' || inputValue == null ? '' : Number(inputValue);
  } else if (props.inputType === 'file') {
    data = inputValue instanceof File ? inputValue : null;
  }

  // Emit value
  emit('update:modelValue', {
    data,
    errorMessage: validStatus.value.errorMessage,
  });

  // Animation on empty field
  if (props.animation && !inputValue) {
    getAnimationClass();
  }
}

function getAnimationClass() {
  if (props.modelValue?.errorMessage && !props.browserValidation && props.animation) {
    animationClass.value = 'animated input-shack';
    timeoutId = setTimeout(() => {
      animationClass.value = '';
      timeoutId = null;
    }, 1000);
  }
}

function showBadge() {
  if (props.showLengthBadge) {
    emit('badgeVisible', true);
  }
}

function hideBadge() {
  if (props.showLengthBadge) {
    emit('badgeVisible', false);
  }
}

onBeforeUnmount(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
});
</script>

<style scoped></style>
