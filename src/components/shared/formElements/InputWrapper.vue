<template>
  <label class="form-label" :class="props.class" v-if="!props.labelPositionBottom"
    >{{ props.title }}
    <span class="txt-danger" v-if="props.required">*</span>
  </label>
  <slot />
  <label class="form-label" :class="props.class" v-if="props.labelPositionBottom"
    >{{ props.title }}
    <span class="txt-danger" v-if="props.required">*</span>
  </label>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    class?: string;
    labelPositionBottom?: boolean;
    required?: boolean;
  }>(),
  {
    class: '',
    labelPositionBottom: false,
    required: false,
  },
);
</script>

<style scoped></style>
