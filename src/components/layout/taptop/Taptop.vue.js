import { ref, watch } from 'vue';
import { useWindowScroll } from '@vueuse/core';
const show = ref(false);
const { y } = useWindowScroll();
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
watch(y, pos => {
    show.value = pos > 300;
}, { immediate: true });
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tap-top" },
    ...{ style: ({ display: __VLS_ctx.show ? 'block' : 'none' }) },
});
/** @type {__VLS_StyleScopedClasses['tap-top']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    type: "chevrons-up",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    type: "chevrons-up",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ click: {} },
    { onClick: (__VLS_ctx.scrollToTop) });
var __VLS_3;
var __VLS_4;
// @ts-ignore
[show, scrollToTop,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
