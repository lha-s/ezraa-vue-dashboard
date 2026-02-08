import { defineAsyncComponent } from 'vue';
const LayoutTypeCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/LayoutTypeCustomizer.vue'));
const SidebarTypeCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/SidebarTypeCustomizer.vue'));
const ColorCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/ColorCustomizer.vue'));
const IconCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/IconCustomizer.vue'));
const MixLayoutCustomizer = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/MixLayoutCustomizer.vue'));
const CustomizerLinks = defineAsyncComponent(() => import('@/components/layout/customizer/settingCustomizer/CustomizerLinks.vue'));
const emits = defineEmits(['closeCustomizer']);
function closeCustomizer() {
    emits('closeCustomizer');
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "customizer-header" },
});
/** @type {__VLS_StyleScopedClasses['customizer-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "theme-title" },
});
/** @type {__VLS_StyleScopedClasses['theme-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-0" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-thumbs-up fa-fw" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-thumbs-up']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-fw']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-grow-1" },
});
/** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.closeCustomizer();
            // @ts-ignore
            [closeCustomizer,];
        } },
    ...{ class: "icon-btn btn-outline-light button-effect pull-right cog-close" },
    id: "cog-close",
});
/** @type {__VLS_StyleScopedClasses['icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-light']} */ ;
/** @type {__VLS_StyleScopedClasses['button-effect']} */ ;
/** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
/** @type {__VLS_StyleScopedClasses['cog-close']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-xmark fa-fw" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-xmark']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-fw']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "customizer-body custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['customizer-body']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.LayoutTypeCustomizer} */
LayoutTypeCustomizer;
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
            __VLS_ctx.closeCustomizer();
            // @ts-ignore
            [closeCustomizer,];
        } });
var __VLS_3;
var __VLS_4;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.SidebarTypeCustomizer} */
SidebarTypeCustomizer;
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
            __VLS_ctx.closeCustomizer();
            // @ts-ignore
            [closeCustomizer,];
        } });
var __VLS_10;
var __VLS_11;
let __VLS_14;
/** @ts-ignore @type {typeof __VLS_components.ColorCustomizer} */
ColorCustomizer;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    ...{ 'onCloseCustomizer': {} },
}));
const __VLS_16 = __VLS_15({
    ...{ 'onCloseCustomizer': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
let __VLS_19;
const __VLS_20 = ({ closeCustomizer: {} },
    { onCloseCustomizer: (...[$event]) => {
            __VLS_ctx.closeCustomizer();
            // @ts-ignore
            [closeCustomizer,];
        } });
var __VLS_17;
var __VLS_18;
let __VLS_21;
/** @ts-ignore @type {typeof __VLS_components.IconCustomizer} */
IconCustomizer;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({}));
const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
let __VLS_26;
/** @ts-ignore @type {typeof __VLS_components.MixLayoutCustomizer} */
MixLayoutCustomizer;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    ...{ 'onCloseCustomizer': {} },
}));
const __VLS_28 = __VLS_27({
    ...{ 'onCloseCustomizer': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
let __VLS_31;
const __VLS_32 = ({ closeCustomizer: {} },
    { onCloseCustomizer: (...[$event]) => {
            __VLS_ctx.closeCustomizer();
            // @ts-ignore
            [closeCustomizer,];
        } });
var __VLS_29;
var __VLS_30;
let __VLS_33;
/** @ts-ignore @type {typeof __VLS_components.CustomizerLinks} */
CustomizerLinks;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({}));
const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
