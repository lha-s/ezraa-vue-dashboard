<template>
  <div class="sidebar-panel-main">
    <ul>
      <li id="grip-click" @click="open('layout')">
        <a href="javascript:void(0)" class="grip-click icon-btn btn-primary">
          <i class="fa-solid fa-grip"></i>
        </a>
        <span>Layouts</span>
      </li>
      <li id="cog-click" @click="open('setting')">
        <a href="javascript:void(0)" class="cog-click icon-btn btn-primary">
          <i class="fa-solid fa-gear fa-spin"></i>
        </a>
        <span>Settings</span>
      </li>
    </ul>
  </div>

  <section class="layout-sidebar" :class="{ open: customizer['layout'] }">
    <LayoutCustomizer @closeCustomizer="customizer['layout'] = false" />
  </section>

  <section class="setting-sidebar" :class="{ open: customizer['setting'] }">
    <SettingCustomizer @closeCustomizer="customizer['setting'] = false" />
  </section>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';

const SettingCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/SettingCustomizer.vue'));
const LayoutCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/LayoutCustomizer.vue'));

let customizer = ref<{ layout: boolean; setting: boolean }>({
  layout: false,
  setting: false,
});

function open(value: keyof typeof customizer.value) {
  customizer.value[value] = true;
}
</script>

<style scoped></style>
