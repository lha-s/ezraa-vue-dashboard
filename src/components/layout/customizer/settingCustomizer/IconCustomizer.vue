<template>
  <h6>Sidebar Icon</h6>
  <ul class="layout-grid sidebar-setting">
    <li :class="{ active: layoutState.config.settings.icon == 'stroke-svg' }" @click="changeIcon('stroke-svg')">
      <div class="bg-light header">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="bg-light body"><span class="badge badge-primary">Stroke</span></div>
    </li>
    <li :class="{ active: layoutState.config.settings.icon == 'fill-svg' }" @click="changeIcon('fill-svg')">
      <div class="bg-light header">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="bg-light body"><span class="badge badge-primary">Fill</span></div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useLayout } from '@/stores/layout';

const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);

function changeIcon(type: string) {
  layoutState.value.config.settings.icon = type;
}
</script>

<style scoped></style>
