import { onMounted, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useLayout } from '@/stores/layout';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);
let elem;
let doc = document;
onMounted(() => {
    elem = document.documentElement;
});
function toggleScreen() {
    layoutState.value.fullScreen = !layoutState.value.fullScreen;
    if (layoutState.value.fullScreen) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if ('mozRequestFullScreen' in elem) {
            elem.mozRequestFullScreen(); // Firefox
        }
        else if ('webkitRequestFullscreen' in elem) {
            elem.webkitRequestFullscreen();
        }
        else if ('msRequestFullscreen' in elem) {
            elem.msRequestFullscreen();
        }
    }
    else {
        if (doc.exitFullscreen) {
            doc.exitFullscreen();
        }
        else if ('mozCancelFullScreen' in doc) {
            doc.mozCancelFullScreen();
        }
        else if ('webkitExitFullscreen' in doc) {
            doc.webkitExitFullscreen();
        }
        else if ('msExitFullscreen' in doc) {
            doc.msExitFullscreen();
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
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    icon: ('full-screen'),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    icon: ('full-screen'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.toggleScreen();
            // @ts-ignore
            [toggleScreen,];
        } });
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
