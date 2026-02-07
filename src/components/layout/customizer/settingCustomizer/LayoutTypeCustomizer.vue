<template>
  <h6>Layout Type</h6>
  <ul class="layout-grid main-layout">
    <li :class="{ active: layoutState.config.settings.layout_type === 'ltr' }" data-attr="ltr" @click="handleLayoutType('ltr', 'ltr')">
      <div class="bg-light header">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li class="bg-light sidebar"></li>
          <li class="bg-light body">
            <span class="badge badge-primary">LTR</span>
          </li>
        </ul>
      </div>
    </li>

    <li :class="{ active: layoutState.config.settings.layout_type === 'rtl' }" data-attr="rtl" @click="handleLayoutType('rtl', 'rtl')">
      <div class="bg-light header">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li class="bg-light body">
            <span class="badge badge-primary">RTL</span>
          </li>
          <li class="bg-light sidebar"></li>
        </ul>
      </div>
    </li>

    <li class="box-layout px-3" :class="{ active: layoutState.config.settings.layout_type === 'box-layout' }" @click="handleLayoutType('ltr', 'box-layout')">
      <div class="bg-light header">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li class="bg-light sidebar"></li>
          <li class="bg-light body">
            <span class="badge badge-primary">Box</span>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { useLocalStorage } from '@vueuse/core';
import { useHead } from '@vueuse/head';
import { storeToRefs } from 'pinia';

import { useLayout } from '@/stores/layout';

const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);

const emits = defineEmits(['closeCustomizer']);

// persist direction & layout_type
const direction = useLocalStorage<string>('direction', layoutState.value.config.settings.direction);
const layoutType = useLocalStorage<string>('layout_type', layoutState.value.config.settings.layout_type);

onMounted(() => {
  if ((direction.value && direction.value !== null) || (layoutType.value && layoutType.value !== null)) {
    handleLayoutType(direction.value, layoutType.value);
  }
});

useHead({
  htmlAttrs: {
    dir: () => layoutState.value.config.settings.direction as 'ltr' | 'rtl' | 'auto' | undefined,
  },
  bodyAttrs: {
    class: () => layoutState.value.config.settings.layout_type + ' ' + layoutState.value.config.settings.layout_version,
  },
});

function handleLayoutType(newDirection: string, newLayoutType: string) {
  layoutState.value.config.settings.direction = newDirection;
  layoutState.value.config.settings.layout_type = newLayoutType;

  direction.value = newDirection;
  layoutType.value = newLayoutType;

  emits('closeCustomizer');
}
</script>
