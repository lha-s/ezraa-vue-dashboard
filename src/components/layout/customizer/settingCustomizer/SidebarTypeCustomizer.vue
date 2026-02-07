<template>
  <h6>Sidebar Type</h6>

  <ul class="layout-grid sidebar-type">
    <li data-attr="normal-sidebar" @click="handleSidebarType('horizontal-wrapper', true)">
      <div class="bg-light header">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li class="sidebar bg-dark"></li>
          <li class="bg-light body"></li>
        </ul>
      </div>
    </li>
    <li data-attr="compact-sidebar" @click="handleSidebarType('compact-wrapper', true)">
      <div class="bg-light header">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li class="sidebar bg-dark compact"></li>
          <li class="bg-light body"></li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { useWindowSize } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

import { useLayout } from '@/stores/layout';

const { width } = useWindowSize();
const route = useRoute();

const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);

const emits = defineEmits(['closeCustomizer']);

const sidebarType = ref<string>(localStorage.getItem('sidebar_type') || layoutState.value.config.settings.sidebar_type);

onMounted(() => {
  if (sidebarType.value) {
    handleSidebarType(sidebarType.value, false);
  }
});

function handleSidebarType(value: string, reload: boolean) {
  if (value === 'horizontal-wrapper') {
    if (width.value <= 992) {
      layoutState.value.config.settings.sidebar_type = 'compact-wrapper';
      sidebarType.value = 'compact-wrapper';
      localStorage.setItem('sidebar_type', 'compact-wrapper');
    } else {
      layoutState.value.config.settings.sidebar_type = 'horizontal-wrapper';
      sidebarType.value = 'horizontal-wrapper';
      localStorage.setItem('sidebar_type', 'horizontal-wrapper');
    }
  } else if (value === 'compact-wrapper') {
    layoutState.value.margin = 0;
    layoutState.value.config.settings.layout = 'dubai';
    sidebarType.value = 'compact-wrapper';
    localStorage.setItem('sidebar_type', 'compact-wrapper');

    if (reload) {
      localStorage.setItem('layout', 'dubai');
      layoutState.value.config.settings.sidebar_type = 'compact-wrapper';
    }
  }

  emits('closeCustomizer');
}
</script>

<style scoped></style>
