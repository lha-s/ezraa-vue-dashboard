<template>
  <div class="container-fluid">
    <div class="page-title">
      <div class="row">
        <div class="col-sm-6">
          <h3>{{ pageTitle }}</h3>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="'/'">
                <SvgIcon :icon="'stroke-home'" />
              </router-link>
            </li>
            <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
              <li class="breadcrumb-item">{{ breadcrumb.text }}</li>
            </template>
            <li class="breadcrumb-item active">{{ pageTitle }}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';

import { useRoute } from 'vue-router';

import type { Breadcrumb } from '@/types/common';

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));

const route = useRoute();

const breadcrumbs = computed(() => (route.meta.breadcrumb as Breadcrumb[]) || []);
const pageTitle = computed(() => route.meta.mainTitle);
</script>

<style scoped></style>
