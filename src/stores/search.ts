import { ref, reactive, onMounted } from 'vue';

import { defineStore, storeToRefs } from 'pinia';

import { menuItems } from '@/core/data/menu';
import { useLayout } from '@/stores/layout';
import { useMenu } from '@/stores/menu';
import type { Menu, SearchState } from '@/types/menu';

export const useSearch = defineStore('search', () => {
  const layoutStore = useLayout();
  const { searchMenu } = useMenu();
  const { layoutState } = storeToRefs(layoutStore);

  const state = reactive<SearchState>({
    flip: false,
    text: '',
    menu: [] as Menu[],
    items: [] as Menu[],
    bookmarkItems: [] as Menu[],
    searchResult: false,
    searchResultEmpty: false,
  });

  onMounted(() => {
    state.items = menuItems;

    state.items.filter(items => {
      if (items.bookmark) {
        state.bookmarkItems.push(items);
      }
      if (!items.children) return false;
      items.children.filter(subItems => {
        if (subItems.bookmark) {
          state.bookmarkItems.push(subItems);
        }
      });
      return;
    });
  });

  function flipBookmark(value: string) {
    if (value == 'add') {
      state.flip = true;
    } else if (value == 'back') {
      state.flip = false;
    }
  }

  function addToBookmark(items: Menu) {
    const index = state.bookmarkItems.indexOf(items);
    if (index === -1 && !items.bookmark) {
      items.bookmark = true;
      state.bookmarkItems.push(items);
      state.text = '';
    } else {
      state.bookmarkItems.splice(index, 1);
      items.bookmark = false;
    }
  }

  function searchTerm(term: string) {
    term ? addFix() : removeFix();
    if (!term) return (state.menu = []);
    let searchedItem = ref<Menu[]>([]);
    term = term.toLowerCase();

    searchedItem.value = searchMenu(state.items, term);
    state.menu = searchedItem.value;
    checkSearchResultEmpty(searchedItem.value);
    return;
  }

  function checkSearchResultEmpty(items: Menu[]) {
    if (!items.length) state.searchResultEmpty = true;
    else state.searchResultEmpty = false;
  }

  function addFix() {
    state.searchResult = true;
  }

  function removeFix() {
    state.searchResult = false;
    state.text = '';
  }

  function clickOutside(): void {
    state.searchResult = false;
    state.searchResultEmpty = false;
  }

  function closeSearch() {
    layoutState.value.isSearchOpen = false;
    removeFix();
  }
  return {
    state,
    flipBookmark,
    addToBookmark,
    searchTerm,
    checkSearchResultEmpty,
    addFix,
    removeFix,
    clickOutside,
    closeSearch,
  };
});
