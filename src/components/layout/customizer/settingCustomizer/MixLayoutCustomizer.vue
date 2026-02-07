<template>
  <h6>Mix Layout</h6>
  <ul class="layout-grid customizer-mix">
    <li class="color-layout" :class="{ active: layoutVersion === 'light-only' }" @click="handleLayout('light-only')">
      <div class="bg-light header">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="body common-layout">
        <span class="badge badge-secondary">Light</span>
        <ul>
          <li class="bg-light sidebar"></li>
          <li class="bg-light body"></li>
        </ul>
      </div>
    </li>

    <li class="color-layout" :class="{ active: layoutVersion === 'dark-sidebar' }" @click="handleLayout('dark-sidebar')">
      <div class="bg-light header">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="body common-layout">
        <span class="badge badge-secondary">Sidebar</span>
        <ul>
          <li class="sidebar bg-dark"></li>
          <li class="bg-light body"></li>
        </ul>
      </div>
    </li>

    <li class="color-layout" :class="{ active: layoutVersion === 'dark-only' }" @click="handleLayout('dark-only')">
      <div class="header bg-dark">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="body common-layout">
        <span class="badge badge-secondary">Dark</span>
        <ul>
          <li class="sidebar bg-dark"></li>
          <li class="body bg-dark"></li>
        </ul>
      </div>
    </li>

    <li class="color-layout" :class="{ active: layoutVersion === 'dark-only auto-only' }" @click="handleLayout('dark-only auto-only')">
      <div class="bg-light header">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="body common-layout">
        <span class="badge badge-secondary">Auto</span>
        <ul>
          <li class="sidebar bg-dark"></li>
          <li class="bg-light body"></li>
        </ul>
      </div>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { onMounted, computed } from 'vue';

import { useLocalStorage } from '@vueuse/core';
import { useHead } from '@vueuse/head';
import { storeToRefs } from 'pinia';

import { useLayout } from '@/stores/layout';

const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);

const emits = defineEmits(['closeCustomizer']);

const layoutVersion = useLocalStorage<string>('layout_version', layoutState.value.config.settings.layout_version);

onMounted(() => {
  layoutState.value.config.settings.layout_version = layoutVersion.value;
});

useHead({
  bodyAttrs: {
    class: () => layoutState.value.config.settings.layout_version,
  },
});

function handleLayout(value: string) {
  if (value == 'dark-only') {
    layoutState.value.config.settings.darkMode = true;
  } else {
    layoutState.value.config.settings.darkMode = false;
  }
  emits('closeCustomizer');
}
</script>
