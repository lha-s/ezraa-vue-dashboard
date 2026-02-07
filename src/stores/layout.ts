import { ref, reactive } from 'vue';

import { defineStore } from 'pinia';

import type { LayoutState } from '@/types/layout';

export const useLayout = defineStore('layout', () => {
  const layoutState = reactive<LayoutState>({
    isLanguage: false,
    fullScreen: false,
    isSearchOpen: false,
    closeSidebar: true,
    margin: 0,
    scrollMargin: -4500,

    config: {
      settings: {
        layout_type: 'ltr',
        direction: 'ltr',
        layout_version: 'light-only',
        sidebar_type: 'compact-wrapper',
        icon: 'stroke-svg',
        layout: '',
        darkMode: true,
      },
      color: {
        primary: '#7366ff',
        secondary: '#838383',
      },
    },
  });

  const config = ref({
    settings: {
      layout_type: 'ltr',
      layout_version: 'light-only',
      sidebar_type: 'compact-wrapper',
      icon: 'stroke-svg',
      layout: '',
    },
    color: {
      primary: '#7366ff',
      secondary: '#838383',
    },
  });

  function applyLayout(layout: string) {
    if (layout == 'dubai') {
      layoutState.config.settings.sidebar_type = 'compact-wrapper';
    } else if (layout == 'los-angeles') {
      layoutState.config.settings.sidebar_type = 'horizontal-wrapper material-type';
      layoutState.scrollMargin = -5000;
    } else if (layout == 'paris') {
      layoutState.config.settings.sidebar_type = 'compact-wrapper dark-sidebar';
    } else if (layout == 'tokyo') {
      layoutState.config.settings.sidebar_type = 'compact-sidebar';
    } else if (layout == 'moscow') {
      layoutState.config.settings.sidebar_type = 'compact-sidebar compact-small';
    } else if (layout == 'singapore') {
      layoutState.config.settings.sidebar_type = 'horizontal-wrapper enterprice-type';
    } else if (layout == 'newyork') {
      layoutState.config.settings.sidebar_type = 'compact-wrapper box-layout';
    } else if (layout == 'barcelona') {
      layoutState.config.settings.sidebar_type = 'horizontal-wrapper enterprice-type advance-layout';
    } else if (layout == 'madrid') {
      layoutState.config.settings.sidebar_type = 'compact-wrapper color-sidebar';
    } else if (layout == 'rome') {
      layoutState.config.settings.sidebar_type = 'compact-sidebar compact-small material-icon';
    } else if (layout == 'seoul') {
      layoutState.config.settings.sidebar_type = 'compact-wrapper modern-type';
    } else if (layout == 'london') {
      layoutState.config.settings.sidebar_type = 'only-body';
    }
  }

  return {
    layoutState,
    config,
    applyLayout,
  };
});
