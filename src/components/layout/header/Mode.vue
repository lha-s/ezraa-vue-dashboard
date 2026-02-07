<template>
  <div class="mode" @click="toggleMode()">
    <SvgIcon :icon="'moon'" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue';

import { useHead } from '@vueuse/head';
import { storeToRefs } from 'pinia';

import { useLayout } from '@/stores/layout';

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);

useHead({
  bodyAttrs: {
    class: () => (layoutState.value.config.settings.darkMode ? 'dark-only' : ''),
  },
});

const storedLayoutVersion = localStorage.getItem('layout_version');
const layoutVersion = ref<string>(storedLayoutVersion || layoutState.value.config.settings.layout_version);

onMounted(() => {
  layoutState.value.config.settings.darkMode = layoutVersion.value === 'dark-only';
});

function toggleMode() {
  layoutState.value.config.settings.darkMode = !layoutState.value.config.settings.darkMode;
  layoutState.value.config.settings.layout_version = layoutState.value.config.settings.darkMode ? 'dark-only' : 'light-only';

  localStorage.setItem('layout_version', layoutState.value.config.settings.layout_version);
}
</script>

<style scoped></style>
