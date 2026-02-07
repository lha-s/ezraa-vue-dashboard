<template>
  <SvgIcon :icon="'star'" />
  <div class="onhover-show-div bookmark-flip" :class="{ active: state.flip }">
    <div class="flip-card">
      <div class="flip-card-inner" :class="{ flipped: state.flip }">
        <div class="front">
          <h3 class="f-18 mb-0 dropdown-title">Bookmark</h3>
          <ul class="bookmark-dropdown">
            <li>
              <div class="row bookmark-scroll custom-scrollbar">
                <div class="col-4 text-center" v-for="(item, index) in state.bookmarkItems" :key="index">
                  <template v-if="item.path">
                    <router-link class="bookmark-content" :to="item.path">
                      <div class="bookmark-icon">
                        <SvgIcon :icon="'stroke-' + item.icon" />
                      </div>
                      <span>{{ $t(item.title || '') }}</span>
                    </router-link>
                  </template>
                </div>
              </div>
            </li>
            <li class="text-center flex-grow-1">
              <a class="flip-btn f-w-700 btn btn-primary" href="javascript:void(0)" @click="flipBookmark('add')">Add New Bookmark</a>
            </li>
          </ul>
        </div>
        <div class="back">
          <ul>
            <li>
              <div class="bookmark-dropdown flip-back-content position-relative">
                <input type="text" placeholder="search..." v-model="state.text" @keyup="searchTerm(state.text)" />

                <div class="Typeahead-menu custom-scrollbar bookmark-typeahead" :class="{ 'is-open': state.searchResult }" v-if="state.menu.length">
                  <div class="ProfileCard u-cf" v-for="(item, index) in state.menu" :key="index">
                    <div class="ProfileCard-avatar">
                      <SvgIcon :icon="'stroke-' + item.icon" />
                    </div>
                    <div class="ProfileCard-details">
                      <div class="ProfileCard-realName">
                        <template v-if="item && item.title && item.path">
                          <router-link class="realname" :to="item.path" @click="removeFix()">{{ $t(item.title) }}</router-link>
                          <span class="pull-right ms-auto" @click="addToBookmark(item)">
                            <a>
                              <i class="fa-regular fa-star" :class="{ starred: item.bookmark }"></i>
                            </a>
                          </span>
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
            </li>
            <li>
              <a class="f-w-700 d-block flip-back btn btn-primary" href="javascript:void(0)" @click="flipBookmark('back')">Back</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue';

import { storeToRefs } from 'pinia';

import { useSearch } from '@/stores/search';

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));

const searchStore = useSearch();
const { state } = storeToRefs(searchStore);
const { searchTerm, removeFix, flipBookmark, addToBookmark } = searchStore;
</script>
