import { reactive, onBeforeUnmount, onMounted, watch } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { getMenuForPath, isCompanyView, menuItems } from '@/core/data/menu';
import { useLayout } from './layout';
export const useMenu = defineStore('menu', () => {
    const route = useRoute();
    const { t } = useI18n();
    const layoutStore = useLayout();
    const { layoutState } = storeToRefs(layoutStore);
    const state = reactive({
        menuItem: menuItems,
        leftArrow: false,
        rightArrow: true,
        pinedItem: [],
    });
    let scrollTimeoutId = null;
    let scrollId = null;
    function switchMenu(pathname) {
        const newMenu = getMenuForPath(pathname);
        if (state.menuItem !== newMenu) {
            state.menuItem = newMenu;
            state.pinedItem = [];
            // Restore pinned items for the new menu
            const saved = localStorage.getItem('pinedItems');
            if (saved) {
                const ids = JSON.parse(saved);
                restorePinnedItems(state.menuItem, ids);
            }
        }
    }
    function restorePinnedItems(items, ids) {
        items.forEach(item => {
            if (item.id && ids.includes(item.id)) {
                item.pined = true;
                if (!state.pinedItem.includes(item)) {
                    state.pinedItem.push(item);
                }
            }
            if (item.children)
                restorePinnedItems(item.children, ids);
        });
    }
    function showingCompanyView() {
        return isCompanyView(route.path);
    }
    onMounted(() => {
        // Set initial menu based on current route
        switchMenu(route.path);
        const saved = localStorage.getItem('pinedItems');
        if (saved) {
            const ids = JSON.parse(saved);
            restorePinnedItems(state.menuItem, ids);
        }
    });
    // Watch route changes to switch sidebar menu
    watch(() => route.path, (newPath) => {
        switchMenu(newPath);
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
    function toggleMenu(item) {
        const cleanPath = route.fullPath.split('?')[0];
        if (!item.active) {
            const toggle = (menuItems) => {
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
    function pined(item) {
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
        }
        else {
            item.pined = false;
            state.pinedItem.splice(state.pinedItem.indexOf(item), 1);
        }
        const saveIds = state.pinedItem.map(i => i.id).filter(Boolean);
        localStorage.setItem('pinedItems', JSON.stringify(saveIds));
        scroll(item);
    }
    function scroll(item) {
        if (item && item.id) {
            const scrollDiv = document.getElementById(item.id);
            if (scrollDiv) {
                scrollId = setTimeout(() => {
                    scrollDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }
    function setNavActive(target) {
        state.menuItem.filter(menu => {
            updateActiveState(menu, target);
        });
    }
    function updateActiveState(menu, target) {
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
    function searchMenu(menuItems, term, parentIcon) {
        const results = [];
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
        if (scrollTimeoutId)
            clearTimeout(scrollTimeoutId);
        if (scrollId)
            clearTimeout(scrollId);
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
        showingCompanyView,
    };
});
