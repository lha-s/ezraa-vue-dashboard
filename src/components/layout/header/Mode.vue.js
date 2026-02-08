import { ref, onMounted, defineAsyncComponent } from 'vue';
import { useHead } from '@vueuse/head';
import { storeToRefs } from 'pinia';
import { useLayout } from '@/stores/layout';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);
useHead({
    bodyAttrs: {
        class: () => (layoutState.value.config.settings.darkMode ? 'dark-only' : ''),
    },
});
const storedLayoutVersion = localStorage.getItem('layout_version');
const layoutVersion = ref(storedLayoutVersion || layoutState.value.config.settings.layout_version);
onMounted(() => {
    layoutState.value.config.settings.darkMode = layoutVersion.value === 'dark-only';
});
function toggleMode() {
    layoutState.value.config.settings.darkMode = !layoutState.value.config.settings.darkMode;
    layoutState.value.config.settings.layout_version = layoutState.value.config.settings.darkMode ? 'dark-only' : 'light-only';
    localStorage.setItem('layout_version', layoutState.value.config.settings.layout_version);
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.toggleMode();
            // @ts-ignore
            [toggleMode,];
        } },
    ...{ class: "mode" },
});
/** @type {__VLS_StyleScopedClasses['mode']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    icon: ('moon'),
}));
const __VLS_2 = __VLS_1({
    icon: ('moon'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
