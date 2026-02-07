<template>
  <input
    class="form-check-input"
    type="checkbox"
    :id="inputId"
    :required="props.required || props.browserValidation"
    :checked="modelValue?.data"
    @change="handleChange($event)"
    :class="[props.class, { 'is-invalid': modelValue?.errorMessage && !props.browserValidation }]"
    :disabled="props.disabled"
    v-bind:ref="props.indeterminate ? 'indeterminateCheckbox' : ''"
  />
  <label class="form-check-label" :for="inputId" :class="props.labelClass">
    <template v-if="props.customizeCheckbox">
      <slot />
    </template>
    <template v-else>
      {{ props.label }}
    </template>
  </label>

  <template v-if="modelValue?.errorMessage && required && !props.browserValidation">
    <div class="invalid-feedback">{{ modelValue?.errorMessage }}</div>
  </template>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

import type { CheckboxProps } from '@/types/common';

interface ValidationStatus {
  errorMessage: string;
  valid: boolean;
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  required: true,
  helperText: '',
  browserValidation: false,
  disabled: false,
  indeterminate: false,
  customizeCheckbox: false,
});

const emits = defineEmits(['update:modelValue']);

onMounted(() => {
  if (indeterminateCheckbox.value && props.indeterminate) {
    indeterminateCheckbox.value.indeterminate = true;
  }
});

watch(
  () => props.formSubmitted,
  () => {
    props.formSubmitted && updated(!!props.modelValue?.data);
  },
  { deep: true },
);

let validStatus = ref<ValidationStatus>({
  errorMessage: '',
  valid: false,
});

const indeterminateCheckbox = ref<HTMLInputElement | null>(null);

function handleChange(event: Event) {
  const is_checked = (<HTMLInputElement>event.target).checked;
  updated(is_checked);
}

function updated(checked: boolean) {
  const isValid = !props.required || checked;

  validStatus.value = {
    valid: isValid,
    errorMessage: isValid && !props.browserValidation ? '' : props.errorMessage || 'Accept the condition',
  };

  if (indeterminateCheckbox.value && props.indeterminate) {
    indeterminateCheckbox.value.indeterminate = false;
  }

  emits('update:modelValue', {
    data: checked,
    errorMessage: validStatus.value.errorMessage,
    type: 'checkbox',
  });
}
</script>

<style scoped></style>
