<template>
  <div class="customizer-header">
    <div class="theme-title">
      <div>
        <h4>Preview Settings</h4>
        <p class="mb-0">
          Try It Real Time
          <i class="fa-solid fa-thumbs-up fa-fw"></i>
        </p>
      </div>
      <div class="flex-grow-1">
        <a class="icon-btn btn-outline-light button-effect pull-right grip-close" id="grip-close" @click="closeCustomizer()">
          <i class="fa-solid fa-xmark fa-fw"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="customizer-body custom-scrollbar">
    <h6>Layouts</h6>
    <ul class="layout-grid sidebar-type layout-types">
      <li v-for="layout of layouts" :key="layout.id">
        <div class="layout-img">
          <a href="javascript:void(0)" @click="handleLayout(layout.slug, true)">
            <img :alt="layout.title" class="img-fluid" :src="getImage(layout.image)" />
          </a>
          <h6>{{ layout.title }}</h6>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';

import { layouts } from '@/core/data/layout';
import { useLayout } from '@/stores/layout';
import { baseUtils } from '@/utils';

const emits = defineEmits(['closeCustomizer']);

const router = useRouter();
const route = useRoute();
const { getImage } = baseUtils();

const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);
const { applyLayout } = layoutStore;

const layout = ref<string>(localStorage.getItem('layout') || layoutState.value.config.settings.layout);

onMounted(() => {
  if (layout.value) {
    applyLayout(layout.value);
    handleLayout(layout.value, false);
  }
});

function handleLayout(value: string, reload: boolean) {
  localStorage.setItem('layout', value);
  layout.value = value;

  applyLayout(value);

  router
    .replace({
      path: route.path,
      query: {
        ...route.query,
        layout: value,
      },
    })
    .then(() => {
      if (reload) {
        location.reload();
      }
    });
}

function closeCustomizer() {
  emits('closeCustomizer');
}
</script>

<style scoped></style>
