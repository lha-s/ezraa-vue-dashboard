<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <Card :headerTitle="'Welcome to Ezraa'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1">Your dashboard is ready to be customized.</p>
          </template>

          <p>
            This is the <strong>Ezraa Dashboard</strong> skeleton project. It includes the full layout system with header, sidebar, footer, breadcrumbs, and the customizer with all 11 layout themes.
          </p>
          <p>
            <strong>Getting Started:</strong> Use the sidebar to navigate between pages. Open the customizer (gear icon on the right) to switch between layout themes like Dubai, Paris, Tokyo, and more.
          </p>
          <p>
            <strong>Features:</strong> Arabic + English i18n with RTL support, dark mode toggle, responsive sidebar, bookmark system, and search functionality are all ready to use.
          </p>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
</script>

<style scoped></style>
