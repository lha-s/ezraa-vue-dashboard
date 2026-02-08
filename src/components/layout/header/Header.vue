<template>
  <div class="header-wrapper row m-0">
    <SearchBar />
    <div class="header-logo-wrapper col-auto p-0">
      <LogoWrapper :icon="'align-center'" :type="'header'" />
    </div>
    <div class="left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0">
    </div>
    <div class="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto">
      <ul class="nav-menus">
        <li class="language-nav" @click.prevent="toggleLanguage()" v-on-click-outside="() => (layoutState.isLanguage = false)">
          <LanguageNav />
        </li>

        <li class="fullscreen-body">
          <ToggleScreen />
        </li>
        <li>
          <SvgIcon :icon="'search'" @click.prevent="openSearch()" />
        </li>
        <li class="onhover-dropdown">
          <BookmarkView />
        </li>
        <li>
          <ModeLayout />
        </li>
        <li class="cart-nav onhover-dropdown">
          <Cart />
        </li>
        <li class="onhover-dropdown">
          <Notification />
        </li>
        <li class="profile-nav onhover-dropdown pe-0 py-0">
          <Profile />
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

import { OnClickOutside } from '@vueuse/components';
import { storeToRefs } from 'pinia';

import { useLayout } from '@/stores/layout';

const SearchBar = defineAsyncComponent(() => import('@/components/layout/header/Search.vue'));
const LogoWrapper = defineAsyncComponent(() => import('@/components/layout/header/Logo.vue'));
const LanguageNav = defineAsyncComponent(() => import('@/components/layout/header/Language.vue'));
const ToggleScreen = defineAsyncComponent(() => import('@/components/layout/header/ToggleScreen.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const BookmarkView = defineAsyncComponent(() => import('@/components/layout/header/Bookmark.vue'));
const ModeLayout = defineAsyncComponent(() => import('@/components/layout/header/Mode.vue'));
const Cart = defineAsyncComponent(() => import('@/components/layout/header/Cart.vue'));
const Notification = defineAsyncComponent(() => import('@/components/layout/header/Notification.vue'));
const Profile = defineAsyncComponent(() => import('@/components/layout/header/Profile.vue'));
const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);

function toggleLanguage() {
  layoutState.value.isLanguage = !layoutState.value.isLanguage;
}
function openSearch() {
  layoutState.value.isSearchOpen = true;
}
</script>
