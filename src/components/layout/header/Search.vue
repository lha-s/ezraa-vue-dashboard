<template>
  <form class="form-inline search-full col" :class="{ open: layoutState.isSearchOpen }">
    <div class="form-group w-100">
      <div class="Typeahead Typeahead--twitterUsers">
        <div class="u-posRelative">
          <input class="demo-input Typeahead-input form-control-plaintext w-100" type="text" placeholder="Search Anything Here..." autofocus v-model="state.text" @keyup="searchTerm(state.text)" />
          <div class="spinner-border Typeahead-spinner" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <vue-feather :type="'x'" class="close-search" @click.prevent="closeSearch()" />
        </div>
        <div class="Typeahead-menu custom-scrollbar" :class="{ 'is-open': state.searchResult }" v-if="state.menu.length">
          <div class="ProfileCard u-cf" v-for="(item, index) in state.menu" :key="index">
            <div class="ProfileCard-avatar">
              <SvgIcon :icon="'stroke-' + item.icon" :style="{ height: '24px', width: '24px' }"></SvgIcon>
            </div>
            <div class="ProfileCard-details">
              <div class="ProfileCard-realName">
                <template v-if="item && item.title && item.path">
                  <router-link class="realname" :to="item.path" @click="removeFix()">{{ $t(item.title) }}</router-link>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="Typeahead-menu custom-scrollbar" :class="{ 'is-open': state.searchResultEmpty }" v-if="!state.menu.length">
          <div class="ProfileCard u-cf">
            <div class="EmptyMessage">Opps!! There are no result found.</div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

import { useHead } from '@vueuse/head';
import { storeToRefs } from 'pinia';

import { useLayout } from '@/stores/layout';
import { useSearch } from '@/stores/search';

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));

const layoutStore = useLayout();
const searchStore = useSearch();
const { layoutState } = storeToRefs(layoutStore);
const { state } = storeToRefs(searchStore);
const { searchTerm, removeFix, clickOutside, closeSearch } = searchStore;

useHead({
  bodyAttrs: {
    class: () => (state.value.searchResult ? 'offcanvas' : ''),
  },
});
</script>

<style scoped></style>
