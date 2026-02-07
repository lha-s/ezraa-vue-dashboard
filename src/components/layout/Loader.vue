<template>
  <div class="loader-wrapper" :class="{ 'd-none': loaderHide }">
    <div class="loader-index"><span></span></div>
    <svg>
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="11" result="blur"></feGaussianBlur>
          <feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix>
        </filter>
      </defs>
    </svg>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

let loaderHide = ref<boolean>(false);
let timeoutId: ReturnType<typeof setTimeout> | null = null;

onMounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    loaderHide.value = true;
    timeoutId = null; // reset
  }, 3000);
});

onBeforeUnmount(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
});
</script>
