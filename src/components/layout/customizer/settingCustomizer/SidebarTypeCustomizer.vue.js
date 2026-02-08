import { ref, onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useLayout } from '@/stores/layout';
const { width } = useWindowSize();
const route = useRoute();
const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);
const emits = defineEmits(['closeCustomizer']);
const sidebarType = ref(localStorage.getItem('sidebar_type') || layoutState.value.config.settings.sidebar_type);
onMounted(() => {
    if (sidebarType.value) {
        handleSidebarType(sidebarType.value, false);
    }
});
function handleSidebarType(value, reload) {
    if (value === 'horizontal-wrapper') {
        if (width.value <= 992) {
            layoutState.value.config.settings.sidebar_type = 'compact-wrapper';
            sidebarType.value = 'compact-wrapper';
            localStorage.setItem('sidebar_type', 'compact-wrapper');
        }
        else {
            layoutState.value.config.settings.sidebar_type = 'horizontal-wrapper';
            sidebarType.value = 'horizontal-wrapper';
            localStorage.setItem('sidebar_type', 'horizontal-wrapper');
        }
    }
    else if (value === 'compact-wrapper') {
        layoutState.value.margin = 0;
        layoutState.value.config.settings.layout = 'dubai';
        sidebarType.value = 'compact-wrapper';
        localStorage.setItem('sidebar_type', 'compact-wrapper');
        if (reload) {
            localStorage.setItem('layout', 'dubai');
            layoutState.value.config.settings.sidebar_type = 'compact-wrapper';
        }
    }
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
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "layout-grid sidebar-type" },
});
/** @type {__VLS_StyleScopedClasses['layout-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-type']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleSidebarType('horizontal-wrapper', true);
            // @ts-ignore
            [handleSidebarType,];
        } },
    'data-attr': "normal-sidebar",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-light header" },
});
/** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
/** @type {__VLS_StyleScopedClasses['header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "body" },
});
/** @type {__VLS_StyleScopedClasses['body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "sidebar bg-dark" },
});
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "bg-light body" },
});
/** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
/** @type {__VLS_StyleScopedClasses['body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleSidebarType('compact-wrapper', true);
            // @ts-ignore
            [handleSidebarType,];
        } },
    'data-attr': "compact-sidebar",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-light header" },
});
/** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
/** @type {__VLS_StyleScopedClasses['header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "body" },
});
/** @type {__VLS_StyleScopedClasses['body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "sidebar bg-dark compact" },
});
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['compact']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "bg-light body" },
});
/** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
/** @type {__VLS_StyleScopedClasses['body']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
