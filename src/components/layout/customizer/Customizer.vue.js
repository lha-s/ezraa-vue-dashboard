import { ref, defineAsyncComponent } from 'vue';
const SettingCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/SettingCustomizer.vue'));
const LayoutCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/LayoutCustomizer.vue'));
let customizer = ref({
    layout: false,
    setting: false,
});
function open(value) {
    customizer.value[value] = true;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sidebar-panel-main" },
});
/** @type {__VLS_StyleScopedClasses['sidebar-panel-main']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.open('layout');
            // @ts-ignore
            [open,];
        } },
    id: "grip-click",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "javascript:void(0)",
    ...{ class: "grip-click icon-btn btn-primary" },
});
/** @type {__VLS_StyleScopedClasses['grip-click']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-grip" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-grip']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.open('setting');
            // @ts-ignore
            [open,];
        } },
    id: "cog-click",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "javascript:void(0)",
    ...{ class: "cog-click icon-btn btn-primary" },
});
/** @type {__VLS_StyleScopedClasses['cog-click']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-gear fa-spin" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-gear']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-spin']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "layout-sidebar" },
    ...{ class: ({ open: __VLS_ctx.customizer['layout'] }) },
});
/** @type {__VLS_StyleScopedClasses['layout-sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.LayoutCustomizer} */
LayoutCustomizer;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onCloseCustomizer': {} },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseCustomizer': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ closeCustomizer: {} },
    { onCloseCustomizer: (...[$event]) => {
            __VLS_ctx.customizer['layout'] = false;
            // @ts-ignore
            [customizer, customizer,];
        } });
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "setting-sidebar" },
    ...{ class: ({ open: __VLS_ctx.customizer['setting'] }) },
});
/** @type {__VLS_StyleScopedClasses['setting-sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.SettingCustomizer} */
SettingCustomizer;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ 'onCloseCustomizer': {} },
}));
const __VLS_9 = __VLS_8({
    ...{ 'onCloseCustomizer': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_12;
const __VLS_13 = ({ closeCustomizer: {} },
    { onCloseCustomizer: (...[$event]) => {
            __VLS_ctx.customizer['setting'] = false;
            // @ts-ignore
            [customizer, customizer,];
        } });
var __VLS_10;
var __VLS_11;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
