<template>
  <div>
    <Logo :icon="'grid'" :type="'sidebar'">
      <template #icon>
        <div class="back-btn" icon @click="sidebarClose()">
          <i class="fa-solid fa-angle-left"></i>
        </div>
      </template>
    </Logo>
    <div class="logo-icon-wrapper">
      <router-link :to="'/'">
        <img class="img-fluid" :src="`${getImage('logo/logo-icon.png')}`" alt="logo" />
      </router-link>
    </div>
    <nav class="sidebar-main">
      <div class="left-arrow" @click="scrollLeft()" v-if="state.leftArrow">
        <vue-feather :type="'arrow-left'" />
      </div>

      <div id="sidebar-menu" :style="{ 'margin-left': layoutState.margin + 'px' }">
        <ul class="sidebar-links sidebar-scroll custom-scrollbar" id="simple-bar">
          <li class="back-btn">
            <router-link :to="'/'">
              <img class="img-fluid" :src="`${getImage('logo/logo-icon.png')}`" alt="logo" />
            </router-link>
            <div class="mobile-back text-end">
              <span>Back</span>
              <i class="fa-solid fa-angle-right ps-2"></i>
            </div>
          </li>

          <li class="pin-title sidebar-main-title" :class="{ show: state.pinedItem.length >= 1 }">
            <div>
              <h6>Pinned</h6>
            </div>
          </li>

          <template v-for="(menu, index) in state.menuItem">
            <li class="sidebar-main-title" v-if="menu.main_title">
              <div>
                <h6 class="lan-1">{{ $t(menu.main_title) }}</h6>
              </div>
            </li>
            <template v-else>
              <MenuItem :menu="menu" :depth="1" />
            </template>
          </template>
        </ul>
      </div>

      <div class="right-arrow" @click="scrollRight()" v-if="state.rightArrow">
        <vue-feather :type="'arrow-right'" />
      </div>
    </nav>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

import { storeToRefs } from 'pinia';

import { useLayout } from '@/stores/layout';
import { useMenu } from '@/stores/menu';
import { baseUtils } from '@/utils';

const Logo = defineAsyncComponent(() => import('@/components/layout/header/Logo.vue'));
const MenuItem = defineAsyncComponent(() => import('@/components/layout/sidebar/MenuItem.vue'));

const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);

const menuStore = useMenu();
const { state } = storeToRefs(menuStore);
const { sidebarClose, scrollLeft, scrollRight } = menuStore;

const { getImage } = baseUtils();
</script>
