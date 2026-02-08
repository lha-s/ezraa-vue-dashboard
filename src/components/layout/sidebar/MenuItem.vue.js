import { onBeforeUnmount, watch, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useMenu } from '@/stores/menu';
const MenuItem = defineAsyncComponent(() => import('@/components/layout/sidebar/MenuItem.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
let props = defineProps();
const menuStore = useMenu();
const { state } = storeToRefs(menuStore);
const { toggleMenu, pined } = menuStore;
const route = useRoute();
const depth = props.depth || 1;
const isRoot = depth === 1;
let timeoutId = null;
function getListClasses(menu) {
    return {
        'sidebar-list': depth === 1,
        pined: menu.pined,
    };
}
function getLinkClasses(menu) {
    return {
        'sidebar-link': depth === 1,
        'sidebar-title': depth === 1,
        'submenu-title': menu.type === 'sub' && depth === 2,
        'link-nav': menu.type === 'link' && depth === 1,
        active: menu.active,
    };
}
function setActiveFromRoute(path) {
    const cleanPath = path.split('?')[0];
    const traverseAndActivate = (items) => {
        for (const item of items) {
            if (item.path === cleanPath && !item.active) {
                menuStore.setNavActive(item);
            }
            if (item.children?.length) {
                traverseAndActivate(item.children);
            }
        }
    };
    traverseAndActivate(state.value.menuItem);
}
watch(() => route.fullPath, newPath => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        setActiveFromRoute(newPath);
        timeoutId = null;
    }, 500);
}, { immediate: true });
onBeforeUnmount(() => {
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (props.menu) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: (__VLS_ctx.getListClasses(props.menu)) },
        id: (props.menu.id),
    });
    if (__VLS_ctx.isRoot) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.i)({
            ...{ onClick: (...[$event]) => {
                    if (!(props.menu))
                        return;
                    if (!(__VLS_ctx.isRoot))
                        return;
                    __VLS_ctx.pined(props.menu);
                    // @ts-ignore
                    [getListClasses, isRoot, pined,];
                } },
            ...{ class: "fa-solid fa-thumbtack" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-thumbtack']} */ ;
    }
    if (props.menu.badge) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: (`badge badge-light-${props.menu.badge_color}`) },
        });
        (props.menu.badge_value);
    }
    if (props.menu.type === 'extTabLink') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            href: (props.menu.path),
            target: "_blank",
        });
        (__VLS_ctx.$t(props.menu.title ? props.menu.title : ''));
    }
    else {
        let __VLS_0;
        /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
        routerLink;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            ...{ 'onClick': {} },
            ...{ class: (__VLS_ctx.getLinkClasses(props.menu)) },
            to: (props.menu.path ? props.menu.path : ''),
        }));
        const __VLS_2 = __VLS_1({
            ...{ 'onClick': {} },
            ...{ class: (__VLS_ctx.getLinkClasses(props.menu)) },
            to: (props.menu.path ? props.menu.path : ''),
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        let __VLS_5;
        const __VLS_6 = ({ click: {} },
            { onClick: (...[$event]) => {
                    if (!(props.menu))
                        return;
                    if (!!(props.menu.type === 'extTabLink'))
                        return;
                    __VLS_ctx.toggleMenu(props.menu);
                    // @ts-ignore
                    [$t, getLinkClasses, toggleMenu,];
                } });
        const { default: __VLS_7 } = __VLS_3.slots;
        if (props.menu.icon) {
            let __VLS_8;
            /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
            SvgIcon;
            // @ts-ignore
            const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
                icon: (props.menu.icon),
                change: (true),
            }));
            const __VLS_10 = __VLS_9({
                icon: (props.menu.icon),
                change: (true),
            }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        }
        if (__VLS_ctx.isRoot) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
            (__VLS_ctx.$t(props.menu.title ? props.menu.title : ''));
        }
        else {
            (__VLS_ctx.$t(props.menu.title ? props.menu.title : ''));
        }
        if (props.menu.children?.length) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "according-menu" },
            });
            /** @type {__VLS_StyleScopedClasses['according-menu']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                ...{ class: "fa-solid" },
                ...{ class: (props.menu.active ? 'fa-angle-down' : 'fa-angle-right') },
            });
            /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
        }
        // @ts-ignore
        [isRoot, $t, $t,];
        var __VLS_3;
        var __VLS_4;
    }
    if (props.menu.children?.length) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
            ...{ class: "sidebar-submenu" },
            ...{ style: ({ display: props.menu.active ? 'block' : 'none' }) },
        });
        /** @type {__VLS_StyleScopedClasses['sidebar-submenu']} */ ;
        for (const [child, index] of __VLS_vFor((props.menu.children))) {
            let __VLS_13;
            /** @ts-ignore @type {typeof __VLS_components.MenuItem} */
            MenuItem;
            // @ts-ignore
            const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
                key: (index),
                menu: (child),
                depth: (__VLS_ctx.depth + 1),
            }));
            const __VLS_15 = __VLS_14({
                key: (index),
                menu: (child),
                depth: (__VLS_ctx.depth + 1),
            }, ...__VLS_functionalComponentArgsRest(__VLS_14));
            // @ts-ignore
            [depth,];
        }
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
