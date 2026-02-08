import { onMounted } from 'vue';
import { useCssVar, useLocalStorage } from '@vueuse/core';
import { useHead } from '@vueuse/head';
import { storeToRefs } from 'pinia';
import { useLayout } from '@/stores/layout';
const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);
const emits = defineEmits(['closeCustomizer']);
const primaryColor = useLocalStorage('--theme-default', '#7366ff');
const secondaryColor = useLocalStorage('--theme-secondary', '#838383');
const themePrimaryColor = useCssVar('--theme-default');
const themeSecondaryColor = useCssVar('--theme-secondary');
onMounted(() => {
    applyColor(false);
});
function applyColor(reload) {
    themePrimaryColor.value = primaryColor.value;
    themeSecondaryColor.value = secondaryColor.value;
    layoutState.value.config.color.primary = primaryColor.value;
    layoutState.value.config.color.secondary = secondaryColor.value;
    if (reload) {
        location.reload();
    }
}
function handleColorLayout(layoutType, primary, secondary) {
    primaryColor.value = primary;
    secondaryColor.value = secondary;
    applyColor(true);
    handleLayout(layoutType);
    emits('closeCustomizer');
}
function handleLayout(value) {
    layoutState.value.config.settings.layout_version = value;
    localStorage.setItem('layout_version', value);
    useHead({
        bodyAttrs: {
            class: () => value,
        },
    });
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
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "layout-grid unlimited-color-layout" },
});
/** @type {__VLS_StyleScopedClasses['layout-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['unlimited-color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    id: "ColorPicker1",
    name: "Background",
    type: "color",
    value: "#7366ff",
});
(__VLS_ctx.primaryColor);
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    id: "ColorPicker2",
    name: "Background",
    type: "color",
    value: "#838383",
});
(__VLS_ctx.secondaryColor);
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.applyColor(true);
            // @ts-ignore
            [primaryColor, secondaryColor, applyColor,];
        } },
    ...{ class: "color-apply-btn color-apply-btn btn btn-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['color-apply-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['color-apply-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "layout-grid customizer-color" },
});
/** @type {__VLS_StyleScopedClasses['layout-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['customizer-color']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleColorLayout('light-only', '#7366ff', '#838383');
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-1",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleColorLayout('light-only', '#4831D4', '#ea2087');
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-2",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleColorLayout('light-only', '#d64dcf', '#8e24aa');
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-3",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleColorLayout('light-only', '#4c2fbf', '#2e9de4');
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-4",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleColorLayout('light-only', '#7c4dff', '#7b1fa2');
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-5",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleColorLayout('light-only', '#3949ab', '#4fc3f7');
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-6",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "layout-grid customizer-color dark" },
});
/** @type {__VLS_StyleScopedClasses['layout-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['customizer-color']} */ ;
/** @type {__VLS_StyleScopedClasses['dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleColorLayout('dark-only', '#4466f2', '#1ea6ec');
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-1",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleColorLayout('dark-only', '#4831D4', '#ea2087');
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-2",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleColorLayout('dark-only', '#d64dcf', '#8e24aa');
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-3",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleColorLayout('dark-only', '#4c2fbf', '#2e9de4');
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-4",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleColorLayout('dark-only', '#7c4dff', '#7b1fa2');
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-5",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleColorLayout('dark-only', '#3949ab', '#4fc3f7');
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-6",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
