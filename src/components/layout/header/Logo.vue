<template>
  <div class="logo-wrapper">
    <a href="javascript:void(0)">
      <img class="img-fluid for-light" :src="`${getImage('logo/logo.png')}`" alt="logo" />
      <img class="img-fluid for-dark" :src="`${getImage('logo/logo_dark.png')}`" alt="logo" />
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
import { baseUtils } from '@/utils';

const props = defineProps<{
  icon: string;
  type: string;
}>();

const { getImage } = baseUtils();

const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);

function toggleSidebar() {
  layoutState.value.closeSidebar = !layoutState.value.closeSidebar;
}
</script>

<style scoped></style>
