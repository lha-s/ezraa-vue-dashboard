import { onMounted, onUnmounted } from 'vue';
import { bodyClass } from '@/stores/bodyClass';
export function useAddBodyClass(className) {
    const store = bodyClass();
    store.addClass(className);
}
export function useRemoveBodyClass(className) {
    const store = bodyClass();
    store.removeClass(className);
}
export function useBodyClass(className) {
    const store = bodyClass();
    onMounted(() => {
        store.addClass(className);
    });
    onUnmounted(() => {
        store.removeClass(className);
    });
}
export function useAddBodyClassOnMount(className) {
    const store = bodyClass();
    onMounted(() => {
        store.addClass(className);
    });
}
export function useRemoveBodyClassOnMount(className) {
    const store = bodyClass();
    onMounted(() => {
        store.removeClass(className);
    });
}
export function useAddBodyClassOnUnmount(className) {
    const store = bodyClass();
    onUnmounted(() => {
        store.addClass(className);
    });
}
export function useRemoveBodyClassOnUnmount(className) {
    const store = bodyClass();
    onUnmounted(() => {
        store.removeClass(className);
    });
}
