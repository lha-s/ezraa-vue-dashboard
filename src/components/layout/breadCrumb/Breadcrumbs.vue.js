import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const route = useRoute();
const breadcrumbs = computed(() => route.meta.breadcrumb || []);
const pageTitle = computed(() => route.meta.mainTitle);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-title" },
});
/** @type {__VLS_StyleScopedClasses['page-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
(__VLS_ctx.pageTitle);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ol, __VLS_intrinsics.ol)({
    ...{ class: "breadcrumb" },
});
/** @type {__VLS_StyleScopedClasses['breadcrumb']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "breadcrumb-item" },
});
/** @type {__VLS_StyleScopedClasses['breadcrumb-item']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    to: ('/'),
}));
const __VLS_2 = __VLS_1({
    to: ('/'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    icon: ('stroke-home'),
}));
const __VLS_8 = __VLS_7({
    icon: ('stroke-home'),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[pageTitle,];
var __VLS_3;
for (const [breadcrumb, index] of __VLS_vFor((__VLS_ctx.breadcrumbs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "breadcrumb-item" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['breadcrumb-item']} */ ;
    (breadcrumb.text);
    // @ts-ignore
    [breadcrumbs,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "breadcrumb-item active" },
});
/** @type {__VLS_StyleScopedClasses['breadcrumb-item']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
(__VLS_ctx.pageTitle);
// @ts-ignore
[pageTitle,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
