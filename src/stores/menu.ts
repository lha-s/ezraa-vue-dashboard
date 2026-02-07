import { reactive, onBeforeUnmount, onMounted } from 'vue';

import { defineStore, storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import { menuItems } from '@/core/data/menu';
import type { Menu, MenuState } from '@/types/menu';

import { useLayout } from './layout';

export const useMenu = defineStore('menu', () => {
  const route = useRoute();
  const { t } = useI18n();

  const layoutStore = useLayout();
  const { layoutState } = storeToRefs(layoutStore);

  const state = reactive<MenuState>({
    menuItem: menuItems as Menu[],
    leftArrow: false,
    rightArrow: true,
    pinedItem: [] as Menu[],
  });

  let scrollTimeoutId: ReturnType<typeof setTimeout> | null = null;
  let scrollId: ReturnType<typeof setTimeout> | null = null;

  onMounted(() => {
    const saved = localStorage.getItem('pinedItems');
    if (saved) {
      const ids = JSON.parse(saved) as string[];

      const restorePinned = (items: Menu[]) => {
        items.forEach(item => {
          if (item.id && ids.includes(item.id)) {
            item.pined = true;
            if (!state.pinedItem.includes(item)) {
              state.pinedItem.push(item);
            }
          }
          if (item.children) restorePinned(item.children);
        });
      };

      restorePinned(state.menuItem);
    }
  });

  function sidebarClose() {
    layoutState.value.closeSidebar = true;
  }

  function scrollLeft() {
    state.rightArrow = true;
    if (layoutState.value.margin != 0) {
      layoutState.value.margin = layoutState.value.margin + 500;
    }

    if (layoutState.value.margin == 0) {
      state.leftArrow = false;
    }
  }

  function scrollRight() {
    state.leftArrow = true;
    if (layoutState.value.margin != layoutState.value.scrollMargin) {
      layoutState.value.margin = layoutState.value.margin - 500;
    }
    if (layoutState.value.margin == layoutState.value.scrollMargin) {
      state.rightArrow = false;
    }
  }

  function toggleMenu(item: Menu) {
    const cleanPath = route.fullPath.split('?')[0];

    if (!item.active) {
      const toggle = (menuItems: Menu[]) => {
        menuItems.forEach(menuItem => {
          if (menuItems.includes(item)) {
            menuItem.active = false;
          }

          if (menuItem.children) {
            toggle(menuItem.children);
          }
        });
      };
      toggle(state.menuItem);
    }

    if (item.path !== cleanPath) {
      item.active = !item.active;
    }
  }

  function pined(item: Menu) {
    if (!item.pined) {
      state.menuItem.filter(details => {
        if (details.title) {
          if (state.menuItem.includes(item)) {
            item.pined = true;
            if (!state.pinedItem.includes(item)) {
              state.pinedItem.push(item);
            }
          }
        }
      });
    } else {
      item.pined = false;
      state.pinedItem.splice(state.pinedItem.indexOf(item), 1);
    }
    const saveIds = state.pinedItem.map(i => i.id).filter(Boolean);

    localStorage.setItem('pinedItems', JSON.stringify(saveIds));
    scroll(item);
  }

  function scroll(item: Menu) {
    if (item && item.id) {
      const scrollDiv = document.getElementById(item.id);
      if (scrollDiv) {
        scrollId = setTimeout(() => {
          scrollDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }

  function setNavActive(target: Menu) {
    state.menuItem.filter(menu => {
      updateActiveState(menu, target);
    });
  }

  function updateActiveState(menu: Menu, target: Menu): boolean {
    let isActive = false;

    if (menu === target) {
      menu.active = true;
      scrollTimeoutId = setTimeout(() => scroll(menu), 500);
      return true;
    }

    if (menu.children?.length) {
      for (const child of menu.children) {
        const childActive = updateActiveState(child, target);
        if (childActive) {
          menu.active = true;
          isActive = true;
          scrollTimeoutId = setTimeout(() => scroll(menu), 2000);
        }
      }
    }

    if (!isActive) {
      menu.active = false;
    }

    return isActive || menu === target;
  }

  function searchMenu(menuItems: Menu[], term: string, parentIcon?: string) {
    const results: Menu[] = [];

    for (const item of menuItems) {
      const icon = parentIcon || item.icon;
      const translatedTitle = item.title ? t(item.title).toLowerCase() : '';

      if (translatedTitle.includes(term) && item.type === 'link') {
        results.push({ ...item, icon });
      }

      if (item.children && Array.isArray(item.children)) {
        const childResults = searchMenu(item.children, term, icon);
        results.push(...childResults);
      }
    }

    return results;
  }

  onBeforeUnmount(() => {
    if (scrollTimeoutId) clearTimeout(scrollTimeoutId);
    if (scrollId) clearTimeout(scrollId);
  });

  return {
    state,
    sidebarClose,
    scrollLeft,
    scrollRight,
    toggleMenu,
    pined,
    setNavActive,
    searchMenu,
  };
});
