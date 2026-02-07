import { onMounted, onUnmounted } from 'vue';

import { bodyClass } from '@/stores/bodyClass';

export function useAddBodyClass(className: string) {
  const store = bodyClass();
  store.addClass(className);
}

export function useRemoveBodyClass(className: string) {
  const store = bodyClass();
  store.removeClass(className);
}

export function useBodyClass(className: string) {
  const store = bodyClass();
  onMounted(() => {
    store.addClass(className);
  });

  onUnmounted(() => {
    store.removeClass(className);
  });
}

export function useAddBodyClassOnMount(className: string) {
  const store = bodyClass();
  onMounted(() => {
    store.addClass(className);
  });
}

export function useRemoveBodyClassOnMount(className: string) {
  const store = bodyClass();
  onMounted(() => {
    store.removeClass(className);
  });
}

export function useAddBodyClassOnUnmount(className: string) {
  const store = bodyClass();
  onUnmounted(() => {
    store.addClass(className);
  });
}

export function useRemoveBodyClassOnUnmount(className: string) {
  const store = bodyClass();
  onUnmounted(() => {
    store.removeClass(className);
  });
}
