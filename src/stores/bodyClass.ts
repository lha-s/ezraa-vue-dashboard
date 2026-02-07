import { ref, computed } from 'vue';

import { defineStore } from 'pinia';

export const bodyClass = defineStore('bodyClass', () => {
  const activeClasses = ref<Set<string>>(new Set());

  const bodyClasses = computed(() => Array.from(activeClasses.value).join(' '));

  function addClass(className: string) {
    activeClasses.value.add(className);
  }

  function removeClass(className: string) {
    activeClasses.value.delete(className);
  }

  function toggleClass(className: string, force?: boolean) {
    if (force === true) {
      addClass(className);
    } else if (force === false) {
      removeClass(className);
    } else {
      if (activeClasses.value.has(className)) {
        removeClass(className);
      } else {
        addClass(className);
      }
    }
  }

  return {
    bodyClasses,

    addClass,
    removeClass,
    toggleClass,
  };
});
