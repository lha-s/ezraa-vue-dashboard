import { defineAsyncComponent } from 'vue';
import { useHead } from '@vueuse/head';
import { storeToRefs } from 'pinia';
import { useLayout } from '@/stores/layout';
import { useSearch } from '@/stores/search';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const layoutStore = useLayout();
const searchStore = useSearch();
const { layoutState } = storeToRefs(layoutStore);
const { state } = storeToRefs(searchStore);
const { searchTerm, removeFix, clickOutside, closeSearch } = searchStore;
useHead({
    bodyAttrs: {
        class: () => (state.value.searchResult ? 'offcanvas' : ''),
    },
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "form-inline search-full col" },
    ...{ class: ({ open: __VLS_ctx.layoutState.isSearchOpen }) },
});
/** @type {__VLS_StyleScopedClasses['form-inline']} */ ;
/** @type {__VLS_StyleScopedClasses['search-full']} */ ;
/** @type {__VLS_StyleScopedClasses['col']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group w-100" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "Typeahead Typeahead--twitterUsers" },
});
/** @type {__VLS_StyleScopedClasses['Typeahead']} */ ;
/** @type {__VLS_StyleScopedClasses['Typeahead--twitterUsers']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "u-posRelative" },
});
/** @type {__VLS_StyleScopedClasses['u-posRelative']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onKeyup: (...[$event]) => {
            __VLS_ctx.searchTerm(__VLS_ctx.state.text);
            // @ts-ignore
            [layoutState, searchTerm, state,];
        } },
    ...{ class: "demo-input Typeahead-input form-control-plaintext w-100" },
    type: "text",
    placeholder: "Search Anything Here...",
    autofocus: true,
    value: (__VLS_ctx.state.text),
});
/** @type {__VLS_StyleScopedClasses['demo-input']} */ ;
/** @type {__VLS_StyleScopedClasses['Typeahead-input']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control-plaintext']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "spinner-border Typeahead-spinner" },
    role: "status",
});
/** @type {__VLS_StyleScopedClasses['spinner-border']} */ ;
/** @type {__VLS_StyleScopedClasses['Typeahead-spinner']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "sr-only" },
});
/** @type {__VLS_StyleScopedClasses['sr-only']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    type: ('x'),
    ...{ class: "close-search" },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    type: ('x'),
    ...{ class: "close-search" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.closeSearch();
            // @ts-ignore
            [state, closeSearch,];
        } });
/** @type {__VLS_StyleScopedClasses['close-search']} */ ;
var __VLS_3;
var __VLS_4;
if (__VLS_ctx.state.menu.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "Typeahead-menu custom-scrollbar" },
        ...{ class: ({ 'is-open': __VLS_ctx.state.searchResult }) },
    });
    /** @type {__VLS_StyleScopedClasses['Typeahead-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
    /** @type {__VLS_StyleScopedClasses['is-open']} */ ;
    for (const [item, index] of __VLS_vFor((__VLS_ctx.state.menu))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard u-cf" },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard']} */ ;
        /** @type {__VLS_StyleScopedClasses['u-cf']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-avatar" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-avatar']} */ ;
        let __VLS_7;
        /** @ts-ignore @type {typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
            icon: ('stroke-' + item.icon),
            ...{ style: ({ height: '24px', width: '24px' }) },
        }));
        const __VLS_9 = __VLS_8({
            icon: ('stroke-' + item.icon),
            ...{ style: ({ height: '24px', width: '24px' }) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-details" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-details']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-realName" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-realName']} */ ;
        if (item && item.title && item.path) {
            let __VLS_12;
            /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
            routerLink;
            // @ts-ignore
            const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
                ...{ 'onClick': {} },
                ...{ class: "realname" },
                to: (item.path),
            }));
            const __VLS_14 = __VLS_13({
                ...{ 'onClick': {} },
                ...{ class: "realname" },
                to: (item.path),
            }, ...__VLS_functionalComponentArgsRest(__VLS_13));
            let __VLS_17;
            const __VLS_18 = ({ click: {} },
                { onClick: (...[$event]) => {
                        if (!(__VLS_ctx.state.menu.length))
                            return;
                        if (!(item && item.title && item.path))
                            return;
                        __VLS_ctx.removeFix();
                        // @ts-ignore
                        [state, state, state, removeFix,];
                    } });
            /** @type {__VLS_StyleScopedClasses['realname']} */ ;
            const { default: __VLS_19 } = __VLS_15.slots;
            (__VLS_ctx.$t(item.title));
            // @ts-ignore
            [$t,];
            var __VLS_15;
            var __VLS_16;
        }
        // @ts-ignore
        [];
    }
}
if (!__VLS_ctx.state.menu.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "Typeahead-menu custom-scrollbar" },
        ...{ class: ({ 'is-open': __VLS_ctx.state.searchResultEmpty }) },
    });
    /** @type {__VLS_StyleScopedClasses['Typeahead-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
    /** @type {__VLS_StyleScopedClasses['is-open']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "ProfileCard u-cf" },
    });
    /** @type {__VLS_StyleScopedClasses['ProfileCard']} */ ;
    /** @type {__VLS_StyleScopedClasses['u-cf']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "EmptyMessage" },
    });
    /** @type {__VLS_StyleScopedClasses['EmptyMessage']} */ ;
}
// @ts-ignore
[state, state,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
