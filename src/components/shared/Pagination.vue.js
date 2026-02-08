const props = defineProps();
const emit = defineEmits(['setPage']);
// Set Page
function pageSet(page) {
    emit('setPage', page);
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
if (props.paginate) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "bottom-info" },
    });
    /** @type {__VLS_StyleScopedClasses['bottom-info']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex cb-info" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['cb-info']} */ ;
    if (props.paginateDetails) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (props.paginate.total_items > 0 ? props.paginate.start_index + 1 : 0);
        (props.paginate.total_items > 0 ? props.paginate.end_index + 1 : 0);
        (props.paginate.total_items > 0 ? props.paginate.total_items : 0);
    }
    if (props.selectedItems && props.selectedRows) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "select-info" },
        });
        /** @type {__VLS_StyleScopedClasses['select-info']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "select-item" },
        });
        /** @type {__VLS_StyleScopedClasses['select-item']} */ ;
        (props.selectedItems);
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "pagination justify-content-center" },
    });
    /** @type {__VLS_StyleScopedClasses['pagination']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "page-item" },
        ...{ class: ({ disabled: props.paginate.current_page === 1 }) },
    });
    /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['disabled']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(props.paginate))
                    return;
                __VLS_ctx.pageSet(1);
                // @ts-ignore
                [pageSet,];
            } },
        ...{ class: "page-link" },
        href: "javascript:void(0)",
    });
    /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "page-item" },
        ...{ class: ({ disabled: props.paginate.current_page === 1 }) },
    });
    /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['disabled']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(props.paginate))
                    return;
                __VLS_ctx.pageSet(props.paginate.current_page - 1);
                // @ts-ignore
                [pageSet,];
            } },
        ...{ class: "page-link" },
        href: "javascript:void(0)",
    });
    /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
    for (const [page, index] of __VLS_vFor((props.paginate.pages))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "page-item" },
            ...{ class: ({ active: props.paginate.current_page == page }) },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
        /** @type {__VLS_StyleScopedClasses['active']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: (...[$event]) => {
                    if (!(props.paginate))
                        return;
                    __VLS_ctx.pageSet(page);
                    // @ts-ignore
                    [pageSet,];
                } },
            ...{ class: "page-link" },
            href: "javascript:void(0)",
        });
        /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
        (page);
        // @ts-ignore
        [];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "page-item" },
        ...{ class: ({
                disabled: props.paginate.current_page == props.paginate.total_pages,
            }) },
    });
    /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['disabled']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(props.paginate))
                    return;
                __VLS_ctx.pageSet(props.paginate.current_page + 1);
                // @ts-ignore
                [pageSet,];
            } },
        ...{ class: "page-link" },
        href: "javascript:void(0)",
    });
    /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "page-item" },
        ...{ class: ({
                disabled: props.paginate.current_page == props.paginate.total_pages,
            }) },
    });
    /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['disabled']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(props.paginate))
                    return;
                __VLS_ctx.pageSet(props.paginate.end_page);
                // @ts-ignore
                [pageSet,];
            } },
        ...{ class: "page-link" },
        href: "javascript:void(0)",
    });
    /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
