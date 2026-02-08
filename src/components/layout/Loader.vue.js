import { ref, onMounted, onBeforeUnmount } from 'vue';
let loaderHide = ref(false);
let timeoutId = null;
onMounted(() => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        loaderHide.value = true;
        timeoutId = null; // reset
    }, 3000);
});
onBeforeUnmount(() => {
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "loader-wrapper" },
    ...{ class: ({ 'd-none': __VLS_ctx.loaderHide }) },
});
/** @type {__VLS_StyleScopedClasses['loader-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "loader-index" },
});
/** @type {__VLS_StyleScopedClasses['loader-index']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.defs, __VLS_intrinsics.defs)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.filter, __VLS_intrinsics.filter)({
    id: "goo",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.feGaussianBlur, __VLS_intrinsics.feGaussianBlur)({
    in: "SourceGraphic",
    stdDeviation: "11",
    result: "blur",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.feColorMatrix, __VLS_intrinsics.feColorMatrix)({
    in: "blur",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
    result: "goo",
});
// @ts-ignore
[loaderHide,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
