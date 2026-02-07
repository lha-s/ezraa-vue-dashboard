<template>
  <div class="customizer-header">
    <div class="theme-title">
      <div>
        <h4>Preview Settings</h4>
        <p class="mb-0">Try It Real Time<i class="fa-solid fa-thumbs-up fa-fw"></i></p>
      </div>
      <div class="flex-grow-1">
        <a class="icon-btn btn-outline-light button-effect pull-right cog-close" id="cog-close" @click="closeCustomizer()">
          <i class="fa-solid fa-xmark fa-fw"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="customizer-body custom-scrollbar">
    <LayoutTypeCustomizer @closeCustomizer="closeCustomizer()" />

    <SidebarTypeCustomizer @closeCustomizer="closeCustomizer()" />

    <ColorCustomizer @closeCustomizer="closeCustomizer()" />

    <IconCustomizer />

    <MixLayoutCustomizer @closeCustomizer="closeCustomizer()" />

    <CustomizerLinks />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const LayoutTypeCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/LayoutTypeCustomizer.vue'));
const SidebarTypeCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/SidebarTypeCustomizer.vue'));
const ColorCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/ColorCustomizer.vue'));
const IconCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/IconCustomizer.vue'));
const MixLayoutCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/MixLayoutCustomizer.vue'));
const CustomizerLinks = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/CustomizerLinks.vue'));

const emits = defineEmits(['closeCustomizer']);

function closeCustomizer() {
  emits('closeCustomizer');
}
</script>

<style scoped></style>
