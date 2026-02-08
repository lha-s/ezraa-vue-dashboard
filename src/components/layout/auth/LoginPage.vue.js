import { defineAsyncComponent } from 'vue';
import { baseUtils } from '@/utils';
const LoginForm = defineAsyncComponent(() => import('@/module/auth/LoginForm.vue'));
const { getImage } = baseUtils();
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid p-0" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row m-0" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12 p-0" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "login-card login-dark" },
});
/** @type {__VLS_StyleScopedClasses['login-card']} */ ;
/** @type {__VLS_StyleScopedClasses['login-dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "logo" },
    to: "/dashboard",
}));
const __VLS_2 = __VLS_1({
    ...{ class: "logo" },
    to: "/dashboard",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid for-light" },
    src: (`${__VLS_ctx.getImage('logo/logo.png')}`),
    alt: "looginpage",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['for-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid for-dark" },
    src: (`${__VLS_ctx.getImage('logo/logo_dark.png')}`),
    alt: "looginpage",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['for-dark']} */ ;
// @ts-ignore
[getImage, getImage,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "login-main" },
});
/** @type {__VLS_StyleScopedClasses['login-main']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.LoginForm} */
LoginForm;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    path: ('/dashboard'),
    storeDetails: (true),
}));
const __VLS_8 = __VLS_7({
    path: ('/dashboard'),
    storeDetails: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
