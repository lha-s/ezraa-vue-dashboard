import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useLayout } from '@/stores/layout';
import { useMenu } from '@/stores/menu';
const Logo = defineAsyncComponent(() => import('@/components/layout/header/Logo.vue'));
const MenuItem = defineAsyncComponent(() => import('@/components/layout/sidebar/MenuItem.vue'));
const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);
const menuStore = useMenu();
const { state } = storeToRefs(menuStore);
const { sidebarClose, scrollLeft, scrollRight, showingCompanyView } = menuStore;
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Logo | typeof __VLS_components.Logo} */
Logo;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    icon: ('grid'),
    type: ('sidebar'),
}));
const __VLS_2 = __VLS_1({
    icon: ('grid'),
    type: ('sidebar'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
{
    const { icon: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.sidebarClose();
                // @ts-ignore
                [sidebarClose,];
            } },
        ...{ class: "back-btn" },
        icon: true,
    });
    /** @type {__VLS_StyleScopedClasses['back-btn']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-angle-left" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-angle-left']} */ ;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-icon-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['logo-icon-wrapper']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    to: ('/'),
}));
const __VLS_9 = __VLS_8({
    to: ('/'),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "logo-icon-text" },
});
/** @type {__VLS_StyleScopedClasses['logo-icon-text']} */ ;
// @ts-ignore
[];
var __VLS_10;
__VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
    ...{ class: "sidebar-main" },
});
/** @type {__VLS_StyleScopedClasses['sidebar-main']} */ ;
if (__VLS_ctx.state.leftArrow) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.state.leftArrow))
                    return;
                __VLS_ctx.scrollLeft();
                // @ts-ignore
                [state, scrollLeft,];
            } },
        ...{ class: "left-arrow" },
    });
    /** @type {__VLS_StyleScopedClasses['left-arrow']} */ ;
    let __VLS_13;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
        type: ('arrow-left'),
    }));
    const __VLS_15 = __VLS_14({
        type: ('arrow-left'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "sidebar-menu",
    ...{ style: ({ 'margin-left': __VLS_ctx.layoutState.margin + 'px' }) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "sidebar-links sidebar-scroll custom-scrollbar" },
    id: "simple-bar",
});
/** @type {__VLS_StyleScopedClasses['sidebar-links']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-scroll']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "back-btn" },
});
/** @type {__VLS_StyleScopedClasses['back-btn']} */ ;
let __VLS_18;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    to: ('/'),
}));
const __VLS_20 = __VLS_19({
    to: ('/'),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
const { default: __VLS_23 } = __VLS_21.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "logo-icon-text" },
});
/** @type {__VLS_StyleScopedClasses['logo-icon-text']} */ ;
// @ts-ignore
[layoutState,];
var __VLS_21;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mobile-back text-end" },
});
/** @type {__VLS_StyleScopedClasses['mobile-back']} */ ;
/** @type {__VLS_StyleScopedClasses['text-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-angle-right ps-2" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-angle-right']} */ ;
/** @type {__VLS_StyleScopedClasses['ps-2']} */ ;
if (__VLS_ctx.showingCompanyView()) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "sidebar-list" },
    });
    /** @type {__VLS_StyleScopedClasses['sidebar-list']} */ ;
    let __VLS_24;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
        to: "/dashboard",
        ...{ class: "sidebar-link sidebar-title back-to-home-link" },
    }));
    const __VLS_26 = __VLS_25({
        to: "/dashboard",
        ...{ class: "sidebar-link sidebar-title back-to-home-link" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    /** @type {__VLS_StyleScopedClasses['sidebar-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['sidebar-title']} */ ;
    /** @type {__VLS_StyleScopedClasses['back-to-home-link']} */ ;
    const { default: __VLS_29 } = __VLS_27.slots;
    let __VLS_30;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
        type: "arrow-left",
        ...{ class: "back-to-home-icon" },
    }));
    const __VLS_32 = __VLS_31({
        type: "arrow-left",
        ...{ class: "back-to-home-icon" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    /** @type {__VLS_StyleScopedClasses['back-to-home-icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.$t('back_to_home'));
    // @ts-ignore
    [showingCompanyView, $t,];
    var __VLS_27;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "pin-title sidebar-main-title" },
    ...{ class: ({ show: __VLS_ctx.state.pinedItem.length >= 1 }) },
});
/** @type {__VLS_StyleScopedClasses['pin-title']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-main-title']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
for (const [menu, index] of __VLS_vFor((__VLS_ctx.state.menuItem))) {
    if (menu.main_title) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "sidebar-main-title" },
        });
        /** @type {__VLS_StyleScopedClasses['sidebar-main-title']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
            ...{ class: "lan-1" },
        });
        /** @type {__VLS_StyleScopedClasses['lan-1']} */ ;
        (__VLS_ctx.$t(menu.main_title));
    }
    else {
        let __VLS_35;
        /** @ts-ignore @type {typeof __VLS_components.MenuItem} */
        MenuItem;
        // @ts-ignore
        const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
            menu: (menu),
            depth: (1),
        }));
        const __VLS_37 = __VLS_36({
            menu: (menu),
            depth: (1),
        }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    }
    // @ts-ignore
    [state, state, $t,];
}
if (__VLS_ctx.state.rightArrow) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.state.rightArrow))
                    return;
                __VLS_ctx.scrollRight();
                // @ts-ignore
                [state, scrollRight,];
            } },
        ...{ class: "right-arrow" },
    });
    /** @type {__VLS_StyleScopedClasses['right-arrow']} */ ;
    let __VLS_40;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({
        type: ('arrow-right'),
    }));
    const __VLS_42 = __VLS_41({
        type: ('arrow-right'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_41));
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
