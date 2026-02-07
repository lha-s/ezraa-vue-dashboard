<template>
  <template v-if="props.change">
    <template v-if="layoutState.config.settings.icon === 'stroke-svg'">
      <svg :class="iconClass">
        <use :xlink:href="`/svg/icon-sprite.svg#stroke-${props.icon}`" />
      </svg>
    </template>
    <template v-else>
      <svg class="fill-icon">
        <use :xlink:href="`/svg/icon-sprite.svg#fill-${props.icon}`" />
      </svg>
    </template>
  </template>
  <template v-else>
    <svg :class="iconClass">
      <use :xlink:href="`/svg/icon-sprite.svg#${props.icon}`" />
    </svg>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { storeToRefs } from 'pinia';

import { useLayout } from '@/stores/layout';

const props = defineProps<{
  icon?: string;
  class?: string;
  change?: boolean;
}>();

const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);

const iconClass = computed(() => props.class || 'stroke-icon');
</script>
