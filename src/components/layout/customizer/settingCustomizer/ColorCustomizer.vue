<template>
  <h6>Unlimited Color</h6>
  <ul class="layout-grid unlimited-color-layout">
    <input id="ColorPicker1" name="Background" type="color" value="#7366ff" v-model="primaryColor" />
    <input id="ColorPicker2" name="Background" type="color" value="#838383" v-model="secondaryColor" />
    <button class="color-apply-btn color-apply-btn btn btn-primary" type="button" @click="applyColor(true)">Apply</button>
  </ul>

  <h6>Light layout</h6>
  <ul class="layout-grid customizer-color">
    <li class="color-layout" data-attr="color-1" @click="handleColorLayout('light-only', '#7366ff', '#838383')">
      <div></div>
    </li>
    <li class="color-layout" data-attr="color-2" @click="handleColorLayout('light-only', '#4831D4', '#ea2087')">
      <div></div>
    </li>
    <li class="color-layout" data-attr="color-3" @click="handleColorLayout('light-only', '#d64dcf', '#8e24aa')">
      <div></div>
    </li>
    <li class="color-layout" data-attr="color-4" @click="handleColorLayout('light-only', '#4c2fbf', '#2e9de4')">
      <div></div>
    </li>
    <li class="color-layout" data-attr="color-5" @click="handleColorLayout('light-only', '#7c4dff', '#7b1fa2')">
      <div></div>
    </li>
    <li class="color-layout" data-attr="color-6" @click="handleColorLayout('light-only', '#3949ab', '#4fc3f7')">
      <div></div>
    </li>
  </ul>
  <h6>Dark Layout</h6>
  <ul class="layout-grid customizer-color dark">
    <li class="color-layout" data-attr="color-1" @click="handleColorLayout('dark-only', '#4466f2', '#1ea6ec')">
      <div></div>
    </li>
    <li class="color-layout" data-attr="color-2" @click="handleColorLayout('dark-only', '#4831D4', '#ea2087')">
      <div></div>
    </li>
    <li class="color-layout" data-attr="color-3" @click="handleColorLayout('dark-only', '#d64dcf', '#8e24aa')">
      <div></div>
    </li>
    <li class="color-layout" data-attr="color-4" @click="handleColorLayout('dark-only', '#4c2fbf', '#2e9de4')">
      <div></div>
    </li>
    <li class="color-layout" data-attr="color-5" @click="handleColorLayout('dark-only', '#7c4dff', '#7b1fa2')">
      <div></div>
    </li>
    <li class="color-layout" data-attr="color-6" @click="handleColorLayout('dark-only', '#3949ab', '#4fc3f7')">
      <div></div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { useCssVar, useLocalStorage } from '@vueuse/core';
import { useHead } from '@vueuse/head';
import { storeToRefs } from 'pinia';

import { useLayout } from '@/stores/layout';

const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);

const emits = defineEmits(['closeCustomizer']);

const primaryColor = useLocalStorage<string>('--theme-default', '#7366ff');
const secondaryColor = useLocalStorage<string>('--theme-secondary', '#838383');

const themePrimaryColor = useCssVar('--theme-default');
const themeSecondaryColor = useCssVar('--theme-secondary');

onMounted(() => {
  applyColor(false);
});

function applyColor(reload: boolean) {
  themePrimaryColor.value = primaryColor.value;
  themeSecondaryColor.value = secondaryColor.value;

  layoutState.value.config.color.primary = primaryColor.value;
  layoutState.value.config.color.secondary = secondaryColor.value;

  if (reload) {
    location.reload();
  }
}

function handleColorLayout(layoutType: string, primary: string, secondary: string) {
  primaryColor.value = primary;
  secondaryColor.value = secondary;
  applyColor(true);
  handleLayout(layoutType);
  emits('closeCustomizer');
}

function handleLayout(value: string) {
  layoutState.value.config.settings.layout_version = value;

  localStorage.setItem('layout_version', value);

  useHead({
    bodyAttrs: {
      class: () => value,
    },
  });
}
</script>

<style scoped></style>
