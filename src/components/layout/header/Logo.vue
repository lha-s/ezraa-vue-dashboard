<template>
  <div class="logo-wrapper">
    <a href="javascript:void(0)" class="logo-text">
      <span class="for-light">LOGO</span>
      <span class="for-dark">LOGO</span>
    </a>

    <template v-if="props.type == 'sidebar'">
      <slot name="icon"></slot>

      <div class="toggle-sidebar" @click="toggleSidebar()">
        <vue-feather :type="props.icon" class="'status_toggle middle sidebar-toggle'"></vue-feather>
      </div>
    </template>
  </div>

  <div class="toggle-sidebar" v-if="props.type == 'header'" @click="toggleSidebar()">
    <vue-feather :type="props.icon" class="'status_toggle middle sidebar-toggle'"></vue-feather>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useLayout } from '@/stores/layout';

const props = defineProps<{
  icon: string;
  type: string;
}>();

const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);

function toggleSidebar() {
  layoutState.value.closeSidebar = !layoutState.value.closeSidebar;
}
</script>

<style scoped>
.logo-text {
  text-decoration: none;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 1;
}

.logo-text .for-light {
  color: #333;
}

.logo-text .for-dark {
  color: #fff;
}
</style>
