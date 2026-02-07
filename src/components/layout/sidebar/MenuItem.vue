<template>
  <template v-if="props.menu">
    <li :class="getListClasses(props.menu)" :id="props.menu.id">
      <i v-if="isRoot" class="fa-solid fa-thumbtack" @click="pined(props.menu)" />
      <label v-if="props.menu.badge" :class="`badge badge-light-${props.menu.badge_color}`">
        {{ props.menu.badge_value }}
      </label>
      <a v-if="props.menu.type === 'extTabLink'" :href="props.menu.path" target="_blank">
        {{ $t(props.menu.title ? props.menu.title : '') }}
      </a>
      <router-link v-else :class="getLinkClasses(props.menu)" :to="props.menu.path ? props.menu.path : ''" @click.prevent="toggleMenu(props.menu)">
        <SvgIcon v-if="props.menu.icon" :icon="props.menu.icon" :change="true" />
        <span v-if="isRoot">{{ $t(props.menu.title ? props.menu.title : '') }}</span>
        <template v-else>{{ $t(props.menu.title ? props.menu.title : '') }}</template>

        <div v-if="props.menu.children?.length" class="according-menu">
          <i class="fa-solid" :class="props.menu.active ? 'fa-angle-down' : 'fa-angle-right'"></i>
        </div>
      </router-link>

      <ul v-if="props.menu.children?.length" class="sidebar-submenu" :style="{ display: props.menu.active ? 'block' : 'none' }">
        <MenuItem v-for="(child, index) in props.menu.children" :key="index" :menu="child" :depth="depth + 1" />
      </ul>
    </li>
  </template>
</template>

<script setup lang="ts">
import { onBeforeUnmount, watch, defineAsyncComponent } from 'vue';

import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

import { useMenu } from '@/stores/menu';
import type { Menu } from '@/types/menu';

const MenuItem = defineAsyncComponent(() => import('@/components/layout/sidebar/MenuItem.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));

let props = defineProps<{
  menu: Menu;
  depth: number;
}>();

const menuStore = useMenu();
const { state } = storeToRefs(menuStore);
const { toggleMenu, pined } = menuStore;

const route = useRoute();

const depth = props.depth || 1;
const isRoot = depth === 1;
let timeoutId: ReturnType<typeof setTimeout> | null = null;

function getListClasses(menu: Menu) {
  return {
    'sidebar-list': depth === 1,
    pined: menu.pined,
  };
}

function getLinkClasses(menu: Menu) {
  return {
    'sidebar-link': depth === 1,
    'sidebar-title': depth === 1,
    'submenu-title': menu.type === 'sub' && depth === 2,
    'link-nav': menu.type === 'link' && depth === 1,
    active: menu.active,
  };
}

function setActiveFromRoute(path: string) {
  const cleanPath = path.split('?')[0];

  const traverseAndActivate = (items: Menu[]) => {
    for (const item of items) {
      if (item.path === cleanPath && !item.active) {
        menuStore.setNavActive(item);
      }
      if (item.children?.length) {
        traverseAndActivate(item.children);
      }
    }
  };

  traverseAndActivate(state.value.menuItem);
}

watch(
  () => route.fullPath,
  newPath => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      setActiveFromRoute(newPath);
      timeoutId = null;
    }, 500);
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
});
</script>

<style scoped></style>
