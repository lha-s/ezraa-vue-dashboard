import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useLayout } from '@/stores/layout';
const SearchBar = defineAsyncComponent(() => import('@/components/layout/header/Search.vue'));
const LogoWrapper = defineAsyncComponent(() => import('@/components/layout/header/Logo.vue'));
const LanguageNav = defineAsyncComponent(() => import('@/components/layout/header/Language.vue'));
const ToggleScreen = defineAsyncComponent(() => import('@/components/layout/header/ToggleScreen.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const BookmarkView = defineAsyncComponent(() => import('@/components/layout/header/Bookmark.vue'));
const ModeLayout = defineAsyncComponent(() => import('@/components/layout/header/Mode.vue'));
const Cart = defineAsyncComponent(() => import('@/components/layout/header/Cart.vue'));
const Notification = defineAsyncComponent(() => import('@/components/layout/header/Notification.vue'));
const Profile = defineAsyncComponent(() => import('@/components/layout/header/Profile.vue'));
const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);
function toggleLanguage() {
    layoutState.value.isLanguage = !layoutState.value.isLanguage;
}
function openSearch() {
    layoutState.value.isSearchOpen = true;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header-wrapper row m-0" },
});
/** @type {__VLS_StyleScopedClasses['header-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.SearchBar} */
SearchBar;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header-logo-wrapper col-auto p-0" },
});
/** @type {__VLS_StyleScopedClasses['header-logo-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.LogoWrapper} */
LogoWrapper;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    icon: ('align-center'),
    type: ('header'),
}));
const __VLS_7 = __VLS_6({
    icon: ('align-center'),
    type: ('header'),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0" },
});
/** @type {__VLS_StyleScopedClasses['left-header']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xxl-5']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-5']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto" },
});
/** @type {__VLS_StyleScopedClasses['nav-right']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xxl-7']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-7']} */ ;
/** @type {__VLS_StyleScopedClasses['col-8']} */ ;
/** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
/** @type {__VLS_StyleScopedClasses['right-header']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav-menus" },
});
/** @type {__VLS_StyleScopedClasses['nav-menus']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.toggleLanguage();
            // @ts-ignore
            [toggleLanguage,];
        } },
    ...{ class: "language-nav" },
});
__VLS_asFunctionalDirective(__VLS_directives.vOnClickOutside, {})(null, { ...__VLS_directiveBindingRestFields, value: (() => (__VLS_ctx.layoutState.isLanguage = false)) }, null, null);
/** @type {__VLS_StyleScopedClasses['language-nav']} */ ;
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.LanguageNav} */
LanguageNav;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "fullscreen-body" },
});
/** @type {__VLS_StyleScopedClasses['fullscreen-body']} */ ;
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.ToggleScreen} */
ToggleScreen;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
let __VLS_20;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
    ...{ 'onClick': {} },
    icon: ('search'),
}));
const __VLS_22 = __VLS_21({
    ...{ 'onClick': {} },
    icon: ('search'),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
let __VLS_25;
const __VLS_26 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.openSearch();
            // @ts-ignore
            [vOnClickOutside, layoutState, openSearch,];
        } });
var __VLS_23;
var __VLS_24;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "onhover-dropdown" },
});
/** @type {__VLS_StyleScopedClasses['onhover-dropdown']} */ ;
let __VLS_27;
/** @ts-ignore @type {typeof __VLS_components.BookmarkView} */
BookmarkView;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({}));
const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
let __VLS_32;
/** @ts-ignore @type {typeof __VLS_components.ModeLayout} */
ModeLayout;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({}));
const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "cart-nav onhover-dropdown" },
});
/** @type {__VLS_StyleScopedClasses['cart-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['onhover-dropdown']} */ ;
let __VLS_37;
/** @ts-ignore @type {typeof __VLS_components.Cart} */
Cart;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({}));
const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "onhover-dropdown" },
});
/** @type {__VLS_StyleScopedClasses['onhover-dropdown']} */ ;
let __VLS_42;
/** @ts-ignore @type {typeof __VLS_components.Notification} */
Notification;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({}));
const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "profile-nav onhover-dropdown pe-0 py-0" },
});
/** @type {__VLS_StyleScopedClasses['profile-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['onhover-dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['pe-0']} */ ;
/** @type {__VLS_StyleScopedClasses['py-0']} */ ;
let __VLS_47;
/** @ts-ignore @type {typeof __VLS_components.Profile} */
Profile;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({}));
const __VLS_49 = __VLS_48({}, ...__VLS_functionalComponentArgsRest(__VLS_48));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
