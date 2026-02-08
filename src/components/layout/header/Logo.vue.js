import { storeToRefs } from 'pinia';
import { useLayout } from '@/stores/layout';
const props = defineProps();
const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);
function toggleSidebar() {
    layoutState.value.closeSidebar = !layoutState.value.closeSidebar;
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['logo-text']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['logo-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "javascript:void(0)",
    ...{ class: "logo-text" },
});
/** @type {__VLS_StyleScopedClasses['logo-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "for-light" },
});
/** @type {__VLS_StyleScopedClasses['for-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "for-dark" },
});
/** @type {__VLS_StyleScopedClasses['for-dark']} */ ;
if (props.type == 'sidebar') {
    var __VLS_0 = {};
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                if (!(props.type == 'sidebar'))
                    return;
                __VLS_ctx.toggleSidebar();
                // @ts-ignore
                [toggleSidebar,];
            } },
        ...{ class: "toggle-sidebar" },
    });
    /** @type {__VLS_StyleScopedClasses['toggle-sidebar']} */ ;
    let __VLS_2;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent1(__VLS_2, new __VLS_2({
        type: (props.icon),
        ...{ class: "'status_toggle middle sidebar-toggle'" },
    }));
    const __VLS_4 = __VLS_3({
        type: (props.icon),
        ...{ class: "'status_toggle middle sidebar-toggle'" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
    /** @type {__VLS_StyleScopedClasses['\'status_toggle']} */ ;
    /** @type {__VLS_StyleScopedClasses['middle']} */ ;
    /** @type {__VLS_StyleScopedClasses['sidebar-toggle\'']} */ ;
}
if (props.type == 'header') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                if (!(props.type == 'header'))
                    return;
                __VLS_ctx.toggleSidebar();
                // @ts-ignore
                [toggleSidebar,];
            } },
        ...{ class: "toggle-sidebar" },
    });
    /** @type {__VLS_StyleScopedClasses['toggle-sidebar']} */ ;
    let __VLS_7;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        type: (props.icon),
        ...{ class: "'status_toggle middle sidebar-toggle'" },
    }));
    const __VLS_9 = __VLS_8({
        type: (props.icon),
        ...{ class: "'status_toggle middle sidebar-toggle'" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    /** @type {__VLS_StyleScopedClasses['\'status_toggle']} */ ;
    /** @type {__VLS_StyleScopedClasses['middle']} */ ;
    /** @type {__VLS_StyleScopedClasses['sidebar-toggle\'']} */ ;
}
// @ts-ignore
var __VLS_1 = __VLS_0;
// @ts-ignore
[];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
