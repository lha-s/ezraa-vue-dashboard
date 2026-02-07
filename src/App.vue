<template>
  <RouterView />
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';

import { bodyClass } from '@/stores/bodyClass';

const bodyClassStore = bodyClass();

watchEffect(() => {
  document.body.className = bodyClassStore.bodyClasses;
});
</script>

<style scoped></style>
