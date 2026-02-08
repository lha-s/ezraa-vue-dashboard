import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { profile } from '@/core/data/header';
import { baseUtils } from '@/utils';
const router = useRouter();
const { getImage } = baseUtils();
let profileItem = ref(profile);
function logOut() {
    localStorage.clear();
    router.replace('/auth/login');
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex profile-media" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['profile-media']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "b-r-10" },
    src: (`${__VLS_ctx.getImage('dashboard/profile.png')}`),
    alt: "profile",
});
/** @type {__VLS_StyleScopedClasses['b-r-10']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-grow-1" },
});
/** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-0" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "middle fa-solid fa-angle-down" },
});
/** @type {__VLS_StyleScopedClasses['middle']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-angle-down']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "profile-dropdown onhover-show-div" },
});
/** @type {__VLS_StyleScopedClasses['profile-dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['onhover-show-div']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.profileItem))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        to: (item.path),
    }));
    const __VLS_2 = __VLS_1({
        to: (item.path),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        type: (item.icon),
    }));
    const __VLS_8 = __VLS_7({
        type: (item.icon),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (item.title);
    // @ts-ignore
    [getImage, profileItem,];
    var __VLS_3;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "javascript:void(0)",
});
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    type: ('log-in'),
}));
const __VLS_13 = __VLS_12({
    type: ('log-in'),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.logOut();
            // @ts-ignore
            [logOut,];
        } },
});
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
