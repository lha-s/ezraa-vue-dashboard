import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
export const bodyClass = defineStore('bodyClass', () => {
    const activeClasses = ref(new Set());
    const bodyClasses = computed(() => Array.from(activeClasses.value).join(' '));
    function addClass(className) {
        activeClasses.value.add(className);
    }
    function removeClass(className) {
        activeClasses.value.delete(className);
    }
    function toggleClass(className, force) {
        if (force === true) {
            addClass(className);
        }
        else if (force === false) {
            removeClass(className);
        }
        else {
            if (activeClasses.value.has(className)) {
                removeClass(className);
            }
            else {
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
