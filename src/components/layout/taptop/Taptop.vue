<template>
  <div class="tap-top" :style="{ display: show ? 'block' : 'none' }">
    <vue-feather type="chevrons-up" @click="scrollToTop"></vue-feather>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

import { useWindowScroll } from '@vueuse/core';

const show = ref(false);
const { y } = useWindowScroll();

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

watch(
  y,
  pos => {
    show.value = pos > 300;
  },
  { immediate: true },
);
</script>
