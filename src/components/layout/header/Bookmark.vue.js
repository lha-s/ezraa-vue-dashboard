import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useSearch } from '@/stores/search';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const searchStore = useSearch();
const { state } = storeToRefs(searchStore);
const { searchTerm, removeFix, flipBookmark, addToBookmark } = searchStore;
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    icon: ('star'),
}));
const __VLS_2 = __VLS_1({
    icon: ('star'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "onhover-show-div bookmark-flip" },
    ...{ class: ({ active: __VLS_ctx.state.flip }) },
});
/** @type {__VLS_StyleScopedClasses['onhover-show-div']} */ ;
/** @type {__VLS_StyleScopedClasses['bookmark-flip']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flip-card" },
});
/** @type {__VLS_StyleScopedClasses['flip-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flip-card-inner" },
    ...{ class: ({ flipped: __VLS_ctx.state.flip }) },
});
/** @type {__VLS_StyleScopedClasses['flip-card-inner']} */ ;
/** @type {__VLS_StyleScopedClasses['flipped']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "front" },
});
/** @type {__VLS_StyleScopedClasses['front']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "f-18 mb-0 dropdown-title" },
});
/** @type {__VLS_StyleScopedClasses['f-18']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "bookmark-dropdown" },
});
/** @type {__VLS_StyleScopedClasses['bookmark-dropdown']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row bookmark-scroll custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['bookmark-scroll']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.state.bookmarkItems))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-4 text-center" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    if (item.path) {
        let __VLS_5;
        /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
        routerLink;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
            ...{ class: "bookmark-content" },
            to: (item.path),
        }));
        const __VLS_7 = __VLS_6({
            ...{ class: "bookmark-content" },
            to: (item.path),
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        /** @type {__VLS_StyleScopedClasses['bookmark-content']} */ ;
        const { default: __VLS_10 } = __VLS_8.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "bookmark-icon" },
        });
        /** @type {__VLS_StyleScopedClasses['bookmark-icon']} */ ;
        let __VLS_11;
        /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
            icon: ('stroke-' + item.icon),
        }));
        const __VLS_13 = __VLS_12({
            icon: ('stroke-' + item.icon),
        }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (__VLS_ctx.$t(item.title || ''));
        // @ts-ignore
        [state, state, state, $t,];
        var __VLS_8;
    }
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "text-center flex-grow-1" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.flipBookmark('add');
            // @ts-ignore
            [flipBookmark,];
        } },
    ...{ class: "flip-btn f-w-700 btn btn-primary" },
    href: "javascript:void(0)",
});
/** @type {__VLS_StyleScopedClasses['flip-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-700']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "back" },
});
/** @type {__VLS_StyleScopedClasses['back']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bookmark-dropdown flip-back-content position-relative" },
});
/** @type {__VLS_StyleScopedClasses['bookmark-dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['flip-back-content']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onKeyup: (...[$event]) => {
            __VLS_ctx.searchTerm(__VLS_ctx.state.text);
            // @ts-ignore
            [state, searchTerm,];
        } },
    type: "text",
    placeholder: "search...",
    value: (__VLS_ctx.state.text),
});
if (__VLS_ctx.state.menu.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "Typeahead-menu custom-scrollbar bookmark-typeahead" },
        ...{ class: ({ 'is-open': __VLS_ctx.state.searchResult }) },
    });
    /** @type {__VLS_StyleScopedClasses['Typeahead-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
    /** @type {__VLS_StyleScopedClasses['bookmark-typeahead']} */ ;
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
        let __VLS_16;
        /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
            icon: ('stroke-' + item.icon),
        }));
        const __VLS_18 = __VLS_17({
            icon: ('stroke-' + item.icon),
        }, ...__VLS_functionalComponentArgsRest(__VLS_17));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-details" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-details']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-realName" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-realName']} */ ;
        if (item && item.title && item.path) {
            let __VLS_21;
            /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
            routerLink;
            // @ts-ignore
            const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
                ...{ 'onClick': {} },
                ...{ class: "realname" },
                to: (item.path),
            }));
            const __VLS_23 = __VLS_22({
                ...{ 'onClick': {} },
                ...{ class: "realname" },
                to: (item.path),
            }, ...__VLS_functionalComponentArgsRest(__VLS_22));
            let __VLS_26;
            const __VLS_27 = ({ click: {} },
                { onClick: (...[$event]) => {
                        if (!(__VLS_ctx.state.menu.length))
                            return;
                        if (!(item && item.title && item.path))
                            return;
                        __VLS_ctx.removeFix();
                        // @ts-ignore
                        [state, state, state, state, removeFix,];
                    } });
            /** @type {__VLS_StyleScopedClasses['realname']} */ ;
            const { default: __VLS_28 } = __VLS_24.slots;
            (__VLS_ctx.$t(item.title));
            // @ts-ignore
            [$t,];
            var __VLS_24;
            var __VLS_25;
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ onClick: (...[$event]) => {
                        if (!(__VLS_ctx.state.menu.length))
                            return;
                        if (!(item && item.title && item.path))
                            return;
                        __VLS_ctx.addToBookmark(item);
                        // @ts-ignore
                        [addToBookmark,];
                    } },
                ...{ class: "pull-right ms-auto" },
            });
            /** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
            /** @type {__VLS_StyleScopedClasses['ms-auto']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                ...{ class: "fa-regular fa-star" },
                ...{ class: ({ starred: item.bookmark }) },
            });
            /** @type {__VLS_StyleScopedClasses['fa-regular']} */ ;
            /** @type {__VLS_StyleScopedClasses['fa-star']} */ ;
            /** @type {__VLS_StyleScopedClasses['starred']} */ ;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.flipBookmark('back');
            // @ts-ignore
            [state, state, flipBookmark,];
        } },
    ...{ class: "f-w-700 d-block flip-back btn btn-primary" },
    href: "javascript:void(0)",
});
/** @type {__VLS_StyleScopedClasses['f-w-700']} */ ;
/** @type {__VLS_StyleScopedClasses['d-block']} */ ;
/** @type {__VLS_StyleScopedClasses['flip-back']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
