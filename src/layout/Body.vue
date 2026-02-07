<template>
  <Taptop />
  <div class="page-wrapper" :class="layoutState.config.settings.sidebar_type" id="pageWrapper">
    <div class="page-header" :class="{ close_icon: layoutState.closeSidebar }">
      <Header />
    </div>

    <div class="page-body-wrapper">
      <div class="sidebar-wrapper" :data-layout="layoutState.config.settings.icon" :class="{ close_icon: layoutState.closeSidebar }">
        <Sidebar />
      </div>

      <div class="page-body">
        <Breadcrumbs />
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
  <Customizer />
  <Loader />
</template>
<script lang="ts" setup>
import { ref, onMounted, watch, defineAsyncComponent } from 'vue';

import { useWindowSize } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

import { useLayout } from '@/stores/layout';

const Header = defineAsyncComponent(() => import('@/components/layout/header/Header.vue'));
const Sidebar = defineAsyncComponent(() => import('@/components/layout/sidebar/Sidebar.vue'));
const Footer = defineAsyncComponent(() => import('@/components/layout/footer/Footer.vue'));
const Breadcrumbs = defineAsyncComponent(() => import('@/components/layout/breadCrumb/Breadcrumbs.vue'));
const Taptop = defineAsyncComponent(() => import('@/components/layout/taptop/Taptop.vue'));
const Customizer = defineAsyncComponent(() => import('@/components/layout/customizer/Customizer.vue'));
const Loader = defineAsyncComponent(() => import('@/components/layout/Loader.vue'));

const layoutStore = useLayout();
const { width } = useWindowSize();
const route = useRoute();
const { layoutState } = storeToRefs(layoutStore);
const { applyLayout } = layoutStore;

const layout = ref<string>('');

onMounted(() => {
  if (route.query.layout) {
    layout.value = route.query.layout.toString();
    localStorage.setItem('layout', layout.value); // save layout
    layoutState.value.config.settings.layout = layout.value;
    applyLayout(layout.value);
  } else {
    const savedLayout = localStorage.getItem('layout');
    if (savedLayout) {
      layout.value = savedLayout;
      layoutState.value.config.settings.layout = layout.value;
      applyLayout(layout.value);
    }
  }

  handleLayout(width.value);
});

watch(
  width,
  newWidth => {
    handleLayout(newWidth);
  },
  { immediate: true },
);

function handleLayout(width: number) {
  layoutState.value.closeSidebar = width < 1200;

  if (width < 1200) {
    layoutState.value.config.settings.sidebar_type = 'compact-wrapper';
  } else {
    if (layout.value) {
      applyLayout(layout.value);
    } else {
      layoutState.value.config.settings.sidebar_type = layoutState.value.config.settings.sidebar_type;
    }
  }
}
</script>
