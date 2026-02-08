import { ref, onMounted, watch, defineAsyncComponent } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useLayout } from '@/stores/layout';
const Header = defineAsyncComponent(() => import('@/components/layout/header/Header.vue'));
const Sidebar = defineAsyncComponent(() => import('@/components/layout/sidebar/Sidebar.vue'));
const Footer = defineAsyncComponent(() => import('@/components/layout/footer/Footer.vue'));
const Breadcrumbs = defineAsyncComponent(() => import('@/components/layout/breadCrumb/Breadcrumbs.vue'));
const Taptop = defineAsyncComponent(() => import('@/components/layout/taptop/Taptop.vue'));
const Customizer = defineAsyncComponent(() => import('@/components/layout/customizer/Customizer.vue'));
const Loader = defineAsyncComponent(() => import('@/components/layout/Loader.vue'));
const layoutStore = useLayout();
const { width } = useWindowSize();
const route = useRoute();
const { layoutState } = storeToRefs(layoutStore);
const { applyLayout } = layoutStore;
const layout = ref('');
onMounted(() => {
    if (route.query.layout) {
        layout.value = route.query.layout.toString();
        localStorage.setItem('layout', layout.value); // save layout
        layoutState.value.config.settings.layout = layout.value;
        applyLayout(layout.value);
    }
    else {
        const savedLayout = localStorage.getItem('layout');
        if (savedLayout) {
            layout.value = savedLayout;
            layoutState.value.config.settings.layout = layout.value;
            applyLayout(layout.value);
        }
    }
    handleLayout(width.value);
});
watch(width, newWidth => {
    handleLayout(newWidth);
}, { immediate: true });
function handleLayout(width) {
    layoutState.value.closeSidebar = width < 1200;
    if (width < 1200) {
        layoutState.value.config.settings.sidebar_type = 'compact-wrapper';
    }
    else {
        if (layout.value) {
            applyLayout(layout.value);
        }
        else {
            layoutState.value.config.settings.sidebar_type = layoutState.value.config.settings.sidebar_type;
        }
    }
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Taptop} */
Taptop;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-wrapper" },
    ...{ class: (__VLS_ctx.layoutState.config.settings.sidebar_type) },
    id: "pageWrapper",
});
/** @type {__VLS_StyleScopedClasses['page-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-header" },
    ...{ class: ({ close_icon: __VLS_ctx.layoutState.closeSidebar }) },
});
/** @type {__VLS_StyleScopedClasses['page-header']} */ ;
/** @type {__VLS_StyleScopedClasses['close_icon']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.Header} */
Header;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-body-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['page-body-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sidebar-wrapper" },
    'data-layout': (__VLS_ctx.layoutState.config.settings.icon),
    ...{ class: ({ close_icon: __VLS_ctx.layoutState.closeSidebar }) },
});
/** @type {__VLS_StyleScopedClasses['sidebar-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['close_icon']} */ ;
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.Sidebar} */
Sidebar;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-body" },
});
/** @type {__VLS_StyleScopedClasses['page-body']} */ ;
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.Breadcrumbs} */
Breadcrumbs;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
let __VLS_20;
/** @ts-ignore @type {typeof __VLS_components.routerView | typeof __VLS_components.RouterView | typeof __VLS_components.routerView | typeof __VLS_components.RouterView} */
routerView;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.Footer} */
Footer;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({}));
const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.Customizer} */
Customizer;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({}));
const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
let __VLS_35;
/** @ts-ignore @type {typeof __VLS_components.Loader} */
Loader;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({}));
const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
// @ts-ignore
[layoutState, layoutState, layoutState, layoutState,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
