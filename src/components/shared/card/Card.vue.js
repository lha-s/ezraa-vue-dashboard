import { defineAsyncComponent } from 'vue';
const CardDropdown = defineAsyncComponent(() => import('@/components/shared/card/CardDropdown.vue'));
const props = withDefaults(defineProps(), {
    cardType: 'simple',
    border: false,
    padding: true,
    rightSideDetails: false,
});
const __VLS_defaults = {
    cardType: 'simple',
    border: false,
    padding: true,
    rightSideDetails: false,
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
    ...{ class: (props.cardClass) },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
if (props.cardType === 'simple') {
    if (props.headerTitle) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-header" },
            ...{ class: ([{ 'card-no-border': !props.border, 'pb-2': props.padding }, props.header]) },
        });
        /** @type {__VLS_StyleScopedClasses['card-header']} */ ;
        /** @type {__VLS_StyleScopedClasses['card-no-border']} */ ;
        /** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
        if ((props.dropdownType && props.options) || props.rightSideDetails) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "header-top" },
            });
            /** @type {__VLS_StyleScopedClasses['header-top']} */ ;
            if (props.headerTitle) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
                    ...{ class: (__VLS_ctx.headerClass) },
                });
                (props.headerTitle);
                var __VLS_0 = {};
            }
            var __VLS_2 = {};
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "card-header-right-icon" },
            });
            /** @type {__VLS_StyleScopedClasses['card-header-right-icon']} */ ;
            var __VLS_4 = {};
            if (props.dropdownType && props.options) {
                let __VLS_6;
                /** @ts-ignore @type {typeof __VLS_components.CardDropdown} */
                CardDropdown;
                // @ts-ignore
                const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
                    dropdownType: (props.dropdownType),
                    options: (props.options),
                    dropdownClass: (props.dropdownClass),
                }));
                const __VLS_8 = __VLS_7({
                    dropdownType: (props.dropdownType),
                    options: (props.options),
                    dropdownClass: (props.dropdownClass),
                }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            }
            var __VLS_11 = {};
        }
        else {
            __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
                ...{ class: (props.headerClass) },
            });
            var __VLS_13 = {};
            (props.headerTitle);
            var __VLS_15 = {};
            var __VLS_17 = {};
        }
    }
    else {
        var __VLS_19 = {};
    }
}
else if (props.cardType == 'classic') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-header card-no-border" },
    });
    /** @type {__VLS_StyleScopedClasses['card-header']} */ ;
    /** @type {__VLS_StyleScopedClasses['card-no-border']} */ ;
    if (props.headerTitle) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "common-space" },
        });
        /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "left-header-content" },
        });
        /** @type {__VLS_StyleScopedClasses['left-header-content']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
        (props.headerTitle);
        if (props.sortDescription) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                ...{ class: "m-0 c-o-light" },
            });
            /** @type {__VLS_StyleScopedClasses['m-0']} */ ;
            /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
            (props.sortDescription);
        }
        if (props.buttonText) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "card-header-right-btn" },
            });
            /** @type {__VLS_StyleScopedClasses['card-header-right-btn']} */ ;
            let __VLS_21;
            /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
            routerLink;
            // @ts-ignore
            const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
                ...{ class: "c-o-light" },
                to: (props.path || ''),
            }));
            const __VLS_23 = __VLS_22({
                ...{ class: "c-o-light" },
                to: (props.path || ''),
            }, ...__VLS_functionalComponentArgsRest(__VLS_22));
            /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
            const { default: __VLS_26 } = __VLS_24.slots;
            (props.buttonText);
            // @ts-ignore
            [headerClass,];
            var __VLS_24;
        }
    }
}
else if (props.cardType == 'dataTable') {
    if (props.headerTitle) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-header" },
            ...{ class: ([{ 'card-no-border': !props.border, 'pb-2': props.padding }]) },
        });
        /** @type {__VLS_StyleScopedClasses['card-header']} */ ;
        /** @type {__VLS_StyleScopedClasses['card-no-border']} */ ;
        /** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "header-top" },
        });
        /** @type {__VLS_StyleScopedClasses['header-top']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
            ...{ class: (props.headerClass) },
        });
        (props.headerTitle);
        var __VLS_27 = {};
        var __VLS_29 = {};
    }
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body" },
    ...{ class: (props.cardBodyClass) },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
var __VLS_31 = {};
var __VLS_33 = {};
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_3 = __VLS_2, __VLS_5 = __VLS_4, __VLS_12 = __VLS_11, __VLS_14 = __VLS_13, __VLS_16 = __VLS_15, __VLS_18 = __VLS_17, __VLS_20 = __VLS_19, __VLS_28 = __VLS_27, __VLS_30 = __VLS_29, __VLS_32 = __VLS_31, __VLS_34 = __VLS_33;
// @ts-ignore
[];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
