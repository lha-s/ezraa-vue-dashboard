<template>
  <span>
    <SvgIcon :icon="'full-screen'" @click.prevent="toggleScreen()" />
  </span>
</template>

<script setup lang="ts">
import { onMounted, defineAsyncComponent } from 'vue';

import { storeToRefs } from 'pinia';

import { useLayout } from '@/stores/layout';

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);

let elem: HTMLElement;
let doc: Document = document;

onMounted(() => {
  elem = document.documentElement;
});

function toggleScreen() {
  layoutState.value.fullScreen = !layoutState.value.fullScreen;

  if (layoutState.value.fullScreen) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ('mozRequestFullScreen' in elem) {
      (elem as HTMLElement & { mozRequestFullScreen: () => Promise<void> }).mozRequestFullScreen(); // Firefox
    } else if ('webkitRequestFullscreen' in elem) {
      (elem as HTMLElement & { webkitRequestFullscreen: () => Promise<void> }).webkitRequestFullscreen();
    } else if ('msRequestFullscreen' in elem) {
      (elem as HTMLElement & { msRequestFullscreen: () => Promise<void> }).msRequestFullscreen();
    }
  } else {
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if ('mozCancelFullScreen' in doc) {
      (doc as Document & { mozCancelFullScreen: () => Promise<void> }).mozCancelFullScreen();
    } else if ('webkitExitFullscreen' in doc) {
      (doc as Document & { webkitExitFullscreen: () => Promise<void> }).webkitExitFullscreen();
    } else if ('msExitFullscreen' in doc) {
      (doc as Document & { msExitFullscreen: () => Promise<void> }).msExitFullscreen();
    }
  }
}
</script>

<style scoped></style>
