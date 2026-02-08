import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { layouts } from '@/core/data/layout';
import { useLayout } from '@/stores/layout';
import { baseUtils } from '@/utils';
const emits = defineEmits(['closeCustomizer']);
const router = useRouter();
const route = useRoute();
const { getImage } = baseUtils();
const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);
const { applyLayout } = layoutStore;
const layout = ref(localStorage.getItem('layout') || layoutState.value.config.settings.layout);
onMounted(() => {
    if (layout.value) {
        applyLayout(layout.value);
        handleLayout(layout.value, false);
    }
});
function handleLayout(value, reload) {
    localStorage.setItem('layout', value);
    layout.value = value;
    applyLayout(value);
    router
        .replace({
        path: route.path,
        query: {
            ...route.query,
            layout: value,
        },
    })
        .then(() => {
        if (reload) {
            location.reload();
        }
    });
}
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
    ...{ class: "icon-btn btn-outline-light button-effect pull-right grip-close" },
    id: "grip-close",
});
/** @type {__VLS_StyleScopedClasses['icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-light']} */ ;
/** @type {__VLS_StyleScopedClasses['button-effect']} */ ;
/** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
/** @type {__VLS_StyleScopedClasses['grip-close']} */ ;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "layout-grid sidebar-type layout-types" },
});
/** @type {__VLS_StyleScopedClasses['layout-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-type']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-types']} */ ;
for (const [layout] of __VLS_vFor((__VLS_ctx.layouts))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (layout.id),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "layout-img" },
    });
    /** @type {__VLS_StyleScopedClasses['layout-img']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleLayout(layout.slug, true);
                // @ts-ignore
                [layouts, handleLayout,];
            } },
        href: "javascript:void(0)",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        alt: (layout.title),
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImage(layout.image)),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (layout.title);
    // @ts-ignore
    [getImage,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
