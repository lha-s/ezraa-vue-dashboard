import { watch, defineAsyncComponent } from 'vue';
import Swal from 'sweetalert2';
import { baseUtils } from '@/utils';
import { tableUtils } from '@/utils/tableUtils';
const Pagination = defineAsyncComponent(() => import('@/components/shared/Pagination.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const { columnValue, getImage } = baseUtils();
const { tableState, pageSizeOptions, handlePaginationSize, setPage, searchTerm, handleSelect, checkUncheckAll, onItemChecked, onSort, handleDateFilter, handleDate, openRowDetails, getColSpan, handleDropdown, applyFilters, } = tableUtils();
const props = withDefaults(defineProps(), {
    pageSize: 4,
    paginateDetails: false,
    showPaginate: false,
    search: true,
    pagination: true,
    selectedRows: false,
    rowDetails: false,
    dateFilter: false,
    downloadReports: false,
    searchPlaceholder: '',
});
let emits = defineEmits(['action']);
watch(() => props.pageSize, newPageSize => {
    if (newPageSize) {
        tableState.filter['pageSize'] = newPageSize;
        handlePaginationSize();
    }
}, { immediate: true, deep: true });
watch(() => props.tableConfig, newConfig => {
    if (newConfig && newConfig.data) {
        applyFilters(props);
    }
}, { immediate: true, deep: true });
watch(() => tableState.pageNo, newValue => {
    if (newValue) {
        applyFilters(props);
    }
}, { immediate: true, deep: true });
function handleAction(value, details) {
    if (value.action_to_perform == 'delete') {
        if (!value.modal) {
            emits('action', { action_to_perform: value.action_to_perform, data: details });
        }
        else {
            Swal.fire({
                title: 'Are you sure?',
                text: value.model_text ? value.model_text : 'Do you really want to delete the product?',
                imageUrl: getImage('gif/trash.gif'),
                confirmButtonText: 'Yes, delete it!',
                showCancelButton: true,
                cancelButtonText: 'Cancel',
                cancelButtonColor: '#FC4438',
            }).then(result => {
                if (result.isConfirmed) {
                    emits('action', { action_to_perform: value.action_to_perform, data: details });
                }
            });
        }
        if (tableState.selected.includes(Number(details.id))) {
            tableState.selected = tableState.selected.filter(id => id !== Number(details.id));
        }
    }
    if (value.action_to_perform == 'view') {
        emits('action', { action_to_perform: value.action_to_perform, data: details });
    }
}
watch(() => [tableState.filter['search'], tableState.filter['sort'], tableState.filter['date'], tableState.filter['page'], tableState.filter['pageSize']], () => {
    applyFilters(props);
}, { deep: true });
const __VLS_defaults = {
    pageSize: 4,
    paginateDetails: false,
    showPaginate: false,
    search: true,
    pagination: true,
    selectedRows: false,
    rowDetails: false,
    dateFilter: false,
    downloadReports: false,
    searchPlaceholder: '',
};
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
if (props.tableConfig) {
    if (props.search || props.dateFilter || props.showPaginate) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "top-body" },
        });
        /** @type {__VLS_StyleScopedClasses['top-body']} */ ;
        if (props.showPaginate) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
                ...{ onChange: (...[$event]) => {
                        if (!(props.tableConfig))
                            return;
                        if (!(props.search || props.dateFilter || props.showPaginate))
                            return;
                        if (!(props.showPaginate))
                            return;
                        __VLS_ctx.handleSelect($event);
                        // @ts-ignore
                        [handleSelect,];
                    } },
            });
            for (const [pages] of __VLS_vFor((__VLS_ctx.pageSizeOptions))) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
                    value: (pages.value),
                    selected: (pages.selected),
                    key: (pages.value),
                });
                (pages.title);
                // @ts-ignore
                [pageSizeOptions,];
            }
        }
        if (props.dateFilter) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "row align-items-center g-1" },
            });
            /** @type {__VLS_StyleScopedClasses['row']} */ ;
            /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
            /** @type {__VLS_StyleScopedClasses['g-1']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "col-auto" },
            });
            /** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
                ...{ class: "form-label" },
            });
            /** @type {__VLS_StyleScopedClasses['form-label']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "col-auto" },
            });
            /** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "range-dropdown flatpickr-input" },
                id: "reportrange",
                readonly: "readonly",
            });
            /** @type {__VLS_StyleScopedClasses['range-dropdown']} */ ;
            /** @type {__VLS_StyleScopedClasses['flatpickr-input']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ onClick: (...[$event]) => {
                        if (!(props.tableConfig))
                            return;
                        if (!(props.search || props.dateFilter || props.showPaginate))
                            return;
                        if (!(props.dateFilter))
                            return;
                        __VLS_ctx.handleDropdown();
                        // @ts-ignore
                        [handleDropdown,];
                    } },
            });
            (__VLS_ctx.tableState.selectedDate ? __VLS_ctx.tableState.selectedDate : 'Select');
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                id: "rangeButtons",
                ...{ class: ({ 'range-option': __VLS_ctx.tableState.dateDropdownOpen }) },
            });
            /** @type {__VLS_StyleScopedClasses['range-option']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                ...{ onClick: (...[$event]) => {
                        if (!(props.tableConfig))
                            return;
                        if (!(props.search || props.dateFilter || props.showPaginate))
                            return;
                        if (!(props.dateFilter))
                            return;
                        __VLS_ctx.handleDateFilter('today');
                        // @ts-ignore
                        [tableState, tableState, tableState, handleDateFilter,];
                    } },
                ...{ class: ({ active: __VLS_ctx.tableState.selectedValue == 'today' }) },
            });
            /** @type {__VLS_StyleScopedClasses['active']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                ...{ onClick: (...[$event]) => {
                        if (!(props.tableConfig))
                            return;
                        if (!(props.search || props.dateFilter || props.showPaginate))
                            return;
                        if (!(props.dateFilter))
                            return;
                        __VLS_ctx.handleDateFilter('yesterday');
                        // @ts-ignore
                        [tableState, handleDateFilter,];
                    } },
                ...{ class: ({ active: __VLS_ctx.tableState.selectedValue == 'yesterday' }) },
            });
            /** @type {__VLS_StyleScopedClasses['active']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                ...{ onClick: (...[$event]) => {
                        if (!(props.tableConfig))
                            return;
                        if (!(props.search || props.dateFilter || props.showPaginate))
                            return;
                        if (!(props.dateFilter))
                            return;
                        __VLS_ctx.handleDateFilter('7_days');
                        // @ts-ignore
                        [tableState, handleDateFilter,];
                    } },
                ...{ class: ({ active: __VLS_ctx.tableState.selectedValue == '7_days' }) },
            });
            /** @type {__VLS_StyleScopedClasses['active']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                ...{ onClick: (...[$event]) => {
                        if (!(props.tableConfig))
                            return;
                        if (!(props.search || props.dateFilter || props.showPaginate))
                            return;
                        if (!(props.dateFilter))
                            return;
                        __VLS_ctx.handleDateFilter('30_days');
                        // @ts-ignore
                        [tableState, handleDateFilter,];
                    } },
                ...{ class: ({ active: __VLS_ctx.tableState.selectedValue == '30_days' }) },
            });
            /** @type {__VLS_StyleScopedClasses['active']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                ...{ onClick: (...[$event]) => {
                        if (!(props.tableConfig))
                            return;
                        if (!(props.search || props.dateFilter || props.showPaginate))
                            return;
                        if (!(props.dateFilter))
                            return;
                        __VLS_ctx.handleDateFilter('this_month');
                        // @ts-ignore
                        [tableState, handleDateFilter,];
                    } },
                ...{ class: ({ active: __VLS_ctx.tableState.selectedValue == 'this_month' }) },
            });
            /** @type {__VLS_StyleScopedClasses['active']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                ...{ onClick: (...[$event]) => {
                        if (!(props.tableConfig))
                            return;
                        if (!(props.search || props.dateFilter || props.showPaginate))
                            return;
                        if (!(props.dateFilter))
                            return;
                        __VLS_ctx.handleDateFilter('last_month');
                        // @ts-ignore
                        [tableState, handleDateFilter,];
                    } },
                ...{ class: ({ active: __VLS_ctx.tableState.selectedValue == 'last_month' }) },
            });
            /** @type {__VLS_StyleScopedClasses['active']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                ...{ onClick: (...[$event]) => {
                        if (!(props.tableConfig))
                            return;
                        if (!(props.search || props.dateFilter || props.showPaginate))
                            return;
                        if (!(props.dateFilter))
                            return;
                        __VLS_ctx.handleDateFilter('custom');
                        // @ts-ignore
                        [tableState, handleDateFilter,];
                    } },
                ...{ class: ({ active: __VLS_ctx.tableState.selectedValue == 'custom' }) },
            });
            /** @type {__VLS_StyleScopedClasses['active']} */ ;
            if (__VLS_ctx.tableState.selectedValue && __VLS_ctx.tableState.selectedValue === 'custom') {
                let __VLS_0;
                /** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
                Flatpickr;
                // @ts-ignore
                const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
                    ...{ 'onOnChange': {} },
                    modelValue: (__VLS_ctx.tableState.date),
                    config: (__VLS_ctx.tableState.config),
                }));
                const __VLS_2 = __VLS_1({
                    ...{ 'onOnChange': {} },
                    modelValue: (__VLS_ctx.tableState.date),
                    config: (__VLS_ctx.tableState.config),
                }, ...__VLS_functionalComponentArgsRest(__VLS_1));
                let __VLS_5;
                const __VLS_6 = ({ onChange: {} },
                    { onOnChange: (__VLS_ctx.handleDate) });
                var __VLS_3;
                var __VLS_4;
            }
        }
        if (props.search) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                id: "basic-1_filter",
                ...{ class: "dataTables_filter" },
            });
            /** @type {__VLS_StyleScopedClasses['dataTables_filter']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
                ...{ onKeyup: (...[$event]) => {
                        if (!(props.tableConfig))
                            return;
                        if (!(props.search || props.dateFilter || props.showPaginate))
                            return;
                        if (!(props.search))
                            return;
                        __VLS_ctx.searchTerm(__VLS_ctx.tableState.searchText);
                        // @ts-ignore
                        [tableState, tableState, tableState, tableState, tableState, tableState, handleDate, searchTerm,];
                    } },
                type: "text",
                name: "searchTerm",
                value: (__VLS_ctx.tableState.searchText),
                placeholder: (props.searchPlaceholder),
            });
            if (props.downloadReports) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "dt-buttons btn-group flex-wrap" },
                });
                /** @type {__VLS_StyleScopedClasses['dt-buttons']} */ ;
                /** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
                /** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                    ...{ class: "btn buttons-copy buttons-html5 btn-outline-primary" },
                    type: "button",
                });
                /** @type {__VLS_StyleScopedClasses['btn']} */ ;
                /** @type {__VLS_StyleScopedClasses['buttons-copy']} */ ;
                /** @type {__VLS_StyleScopedClasses['buttons-html5']} */ ;
                /** @type {__VLS_StyleScopedClasses['btn-outline-primary']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
                __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                    ...{ class: "btn buttons-csv buttons-html5 btn-outline-primary" },
                    type: "button",
                });
                /** @type {__VLS_StyleScopedClasses['btn']} */ ;
                /** @type {__VLS_StyleScopedClasses['buttons-csv']} */ ;
                /** @type {__VLS_StyleScopedClasses['buttons-html5']} */ ;
                /** @type {__VLS_StyleScopedClasses['btn-outline-primary']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
                __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                    ...{ class: "btn buttons-excel buttons-html5 btn-outline-primary" },
                    type: "button",
                });
                /** @type {__VLS_StyleScopedClasses['btn']} */ ;
                /** @type {__VLS_StyleScopedClasses['buttons-excel']} */ ;
                /** @type {__VLS_StyleScopedClasses['buttons-html5']} */ ;
                /** @type {__VLS_StyleScopedClasses['btn-outline-primary']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
                __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                    ...{ class: "btn buttons-pdf buttons-html5 btn-outline-primary" },
                    type: "button",
                });
                /** @type {__VLS_StyleScopedClasses['btn']} */ ;
                /** @type {__VLS_StyleScopedClasses['buttons-pdf']} */ ;
                /** @type {__VLS_StyleScopedClasses['buttons-html5']} */ ;
                /** @type {__VLS_StyleScopedClasses['btn-outline-primary']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
                __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                    ...{ class: "btn buttons-print btn-outline-primary" },
                    type: "button",
                });
                /** @type {__VLS_StyleScopedClasses['btn']} */ ;
                /** @type {__VLS_StyleScopedClasses['buttons-print']} */ ;
                /** @type {__VLS_StyleScopedClasses['btn-outline-primary']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
            }
        }
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
        ...{ class: "table" },
        ...{ class: (props.tableClass) },
    });
    /** @type {__VLS_StyleScopedClasses['table']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
    if (props.hasCheckbox) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
            ...{ class: "datatable-checkbox" },
            ...{ class: ({ 'selected-checkbox': __VLS_ctx.tableState.selected.length && __VLS_ctx.tableState.selected.length != props.tableConfig.data.length }) },
        });
        /** @type {__VLS_StyleScopedClasses['datatable-checkbox']} */ ;
        /** @type {__VLS_StyleScopedClasses['selected-checkbox']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ onChange: (...[$event]) => {
                    if (!(props.tableConfig))
                        return;
                    if (!(props.hasCheckbox))
                        return;
                    __VLS_ctx.checkUncheckAll($event, props);
                    // @ts-ignore
                    [tableState, tableState, tableState, checkUncheckAll,];
                } },
            type: "checkbox",
            ...{ class: "cb-select-checkbox" },
            checked: ((props.tableConfig && props.tableConfig.data.length && __VLS_ctx.tableState.selected && __VLS_ctx.tableState.selected.length == props.tableConfig.data.length) || false),
        });
        /** @type {__VLS_StyleScopedClasses['cb-select-checkbox']} */ ;
    }
    if (props.rowDetails) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
    }
    for (const [column] of __VLS_vFor((props.tableConfig.columns))) {
        (column.field_value);
        if (!column.hide_column) {
            if (column.sort) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
                    ...{ onClick: (...[$event]) => {
                            if (!(props.tableConfig))
                                return;
                            if (!(!column.hide_column))
                                return;
                            if (!(column.sort))
                                return;
                            __VLS_ctx.onSort(String(column.sortable_key ? column.sortable_key : column.field_value), props);
                            // @ts-ignore
                            [tableState, tableState, onSort,];
                        } },
                    ...{ class: (__VLS_ctx.tableState.sortableKey == (column.sortable_key ? column.sortable_key : column.field_value) && __VLS_ctx.tableState.filter['sort'] == 'asc'
                            ? 'asc'
                            : __VLS_ctx.tableState.sortableKey == (column.sortable_key ? column.sortable_key : column.field_value) && __VLS_ctx.tableState.filter['sort'] == 'desc'
                                ? 'desc'
                                : '') },
                });
                (column.title);
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                    ...{ class: "cb-accending-decending" },
                });
                /** @type {__VLS_StyleScopedClasses['cb-accending-decending']} */ ;
            }
            else {
                __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
                (column.title);
            }
        }
        // @ts-ignore
        [tableState, tableState, tableState, tableState,];
    }
    if (props.tableConfig.row_action) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
        ('Actions');
    }
    if (__VLS_ctx.tableState.tableRecords && __VLS_ctx.tableState.tableRecords.length) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
        for (const [details, index] of __VLS_vFor((__VLS_ctx.tableState.tableRecords))) {
            (index);
            __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
                ...{ class: ({ selected: __VLS_ctx.tableState.selected && __VLS_ctx.tableState.selected.length && __VLS_ctx.tableState.selected.includes(Number(details.id)) }) },
            });
            /** @type {__VLS_StyleScopedClasses['selected']} */ ;
            if (props.hasCheckbox) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
                    ...{ class: "datatable-checkbox" },
                });
                /** @type {__VLS_StyleScopedClasses['datatable-checkbox']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
                    ...{ onChange: (...[$event]) => {
                            if (!(props.tableConfig))
                                return;
                            if (!(__VLS_ctx.tableState.tableRecords && __VLS_ctx.tableState.tableRecords.length))
                                return;
                            if (!(props.hasCheckbox))
                                return;
                            __VLS_ctx.onItemChecked($event);
                            // @ts-ignore
                            [tableState, tableState, tableState, tableState, tableState, tableState, onItemChecked,];
                        } },
                    type: "checkbox",
                    'data-id': (details.id),
                    value: (details?.id),
                    checked: (__VLS_ctx.tableState.selected.includes(Number(details.id))),
                });
            }
            if (props.rowDetails) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
                    ...{ onClick: (...[$event]) => {
                            if (!(props.tableConfig))
                                return;
                            if (!(__VLS_ctx.tableState.tableRecords && __VLS_ctx.tableState.tableRecords.length))
                                return;
                            if (!(props.rowDetails))
                                return;
                            __VLS_ctx.openRowDetails(Number(details.id));
                            // @ts-ignore
                            [tableState, openRowDetails,];
                        } },
                    ...{ style: ({
                            background: `url(${__VLS_ctx.getImage(__VLS_ctx.tableState.selectedOpenRows.includes(Number(details.id)) ? 'details_close' : 'details_open') + '.png'}) no-repeat center center`,
                            cursor: 'pointer',
                        }) },
                });
            }
            for (const [column] of __VLS_vFor((props.tableConfig.columns))) {
                (column.field_value);
                if (!column.hide_column) {
                    if (column.text) {
                        __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
                        (__VLS_ctx.columnValue(details, column.field_value));
                        (column.text);
                    }
                    else if (column.type == 'price') {
                        __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
                            ...{ class: (column.class ? column.class : '') },
                        });
                        if (column.decimal_number) {
                            (__VLS_ctx.columnValue(details, column.field_value, true));
                        }
                        else {
                            (__VLS_ctx.columnValue(details, column.field_value));
                        }
                    }
                    else {
                        __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
                        __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.columnValue(details, column.field_value)) }, null, null);
                    }
                }
                // @ts-ignore
                [tableState, getImage, columnValue, columnValue, columnValue, columnValue,];
            }
            if (props.tableConfig.row_action) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "product-action common-align gap-2 justify-content-start" },
                });
                /** @type {__VLS_StyleScopedClasses['product-action']} */ ;
                /** @type {__VLS_StyleScopedClasses['common-align']} */ ;
                /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
                /** @type {__VLS_StyleScopedClasses['justify-content-start']} */ ;
                for (const [row, i] of __VLS_vFor((props.tableConfig.row_action))) {
                    (i);
                    if (row.type == 'button') {
                        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                            ...{ class: (row.class) },
                        });
                        (row.label);
                    }
                    else if (row.label == 'Create') {
                        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                            ...{ class: "plus-btn" },
                        });
                        /** @type {__VLS_StyleScopedClasses['plus-btn']} */ ;
                    }
                    else if (row.label == 'Edit' || row.label == 'Delete') {
                        let __VLS_7;
                        /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
                        routerLink;
                        // @ts-ignore
                        const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
                            ...{ 'onClick': {} },
                            ...{ class: "square-white" },
                            to: (row.path || ''),
                        }));
                        const __VLS_9 = __VLS_8({
                            ...{ 'onClick': {} },
                            ...{ class: "square-white" },
                            to: (row.path || ''),
                        }, ...__VLS_functionalComponentArgsRest(__VLS_8));
                        let __VLS_12;
                        const __VLS_13 = ({ click: {} },
                            { onClick: (...[$event]) => {
                                    if (!(props.tableConfig))
                                        return;
                                    if (!(__VLS_ctx.tableState.tableRecords && __VLS_ctx.tableState.tableRecords.length))
                                        return;
                                    if (!(props.tableConfig.row_action))
                                        return;
                                    if (!!(row.type == 'button'))
                                        return;
                                    if (!!(row.label == 'Create'))
                                        return;
                                    if (!(row.label == 'Edit' || row.label == 'Delete'))
                                        return;
                                    __VLS_ctx.handleAction(row, details);
                                    // @ts-ignore
                                    [handleAction,];
                                } });
                        /** @type {__VLS_StyleScopedClasses['square-white']} */ ;
                        const { default: __VLS_14 } = __VLS_10.slots;
                        let __VLS_15;
                        /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
                        SvgIcon;
                        // @ts-ignore
                        const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
                            icon: (row.icon || ''),
                        }));
                        const __VLS_17 = __VLS_16({
                            icon: (row.icon || ''),
                        }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                        // @ts-ignore
                        [];
                        var __VLS_10;
                        var __VLS_11;
                    }
                    else if (row.label == 'View') {
                        let __VLS_20;
                        /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
                        routerLink;
                        // @ts-ignore
                        const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
                            ...{ 'onClick': {} },
                            ...{ class: "square-white" },
                            to: (row.path || ''),
                        }));
                        const __VLS_22 = __VLS_21({
                            ...{ 'onClick': {} },
                            ...{ class: "square-white" },
                            to: (row.path || ''),
                        }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        let __VLS_25;
                        const __VLS_26 = ({ click: {} },
                            { onClick: (...[$event]) => {
                                    if (!(props.tableConfig))
                                        return;
                                    if (!(__VLS_ctx.tableState.tableRecords && __VLS_ctx.tableState.tableRecords.length))
                                        return;
                                    if (!(props.tableConfig.row_action))
                                        return;
                                    if (!!(row.type == 'button'))
                                        return;
                                    if (!!(row.label == 'Create'))
                                        return;
                                    if (!!(row.label == 'Edit' || row.label == 'Delete'))
                                        return;
                                    if (!(row.label == 'View'))
                                        return;
                                    __VLS_ctx.handleAction(row, details);
                                    // @ts-ignore
                                    [handleAction,];
                                } });
                        /** @type {__VLS_StyleScopedClasses['square-white']} */ ;
                        const { default: __VLS_27 } = __VLS_23.slots;
                        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                            ...{ class: "fa-solid fa-eye" },
                        });
                        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
                        /** @type {__VLS_StyleScopedClasses['fa-eye']} */ ;
                        // @ts-ignore
                        [];
                        var __VLS_23;
                        var __VLS_24;
                    }
                    else if (row.label == 'Refresh') {
                        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                            ...{ class: "square-white" },
                            href: "javascript:void(0)",
                            title: "Change Status",
                        });
                        __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
                        /** @type {__VLS_StyleScopedClasses['square-white']} */ ;
                        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                            ...{ class: (`fa-solid fa-${row.icon}`) },
                        });
                    }
                    else if (row.label == 'Message') {
                        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                            ...{ class: "square-white btn btn-primary" },
                            href: "javascript:void(0)",
                            title: "Message",
                        });
                        __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
                        /** @type {__VLS_StyleScopedClasses['square-white']} */ ;
                        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
                        /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
                        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                            ...{ class: "fa-solid fa-envelope" },
                        });
                        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
                        /** @type {__VLS_StyleScopedClasses['fa-envelope']} */ ;
                    }
                    else if (row.label == 'Approve') {
                        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                            ...{ class: "square-white btn btn-success" },
                            href: "javascript:void(0)",
                            title: "Approve",
                        });
                        __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
                        /** @type {__VLS_StyleScopedClasses['square-white']} */ ;
                        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
                        /** @type {__VLS_StyleScopedClasses['btn-success']} */ ;
                        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                            ...{ class: "fa-solid fa-thumbs-up" },
                        });
                        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
                        /** @type {__VLS_StyleScopedClasses['fa-thumbs-up']} */ ;
                    }
                    else if (row.label == 'Reject') {
                        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                            ...{ class: "square-white btn btn-danger" },
                            href: "javascript:void(0)",
                            title: "Reject",
                        });
                        __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
                        /** @type {__VLS_StyleScopedClasses['square-white']} */ ;
                        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
                        /** @type {__VLS_StyleScopedClasses['btn-danger']} */ ;
                        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                            ...{ class: "fa-solid fa-circle-xmark" },
                        });
                        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
                        /** @type {__VLS_StyleScopedClasses['fa-circle-xmark']} */ ;
                    }
                    // @ts-ignore
                    [vTooltip, vTooltip, vTooltip, vTooltip,];
                }
            }
            if (props.rowDetails && __VLS_ctx.tableState.selectedOpenRows.includes(Number(details.id))) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
                    'data-dt-row': "8",
                });
                __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
                    colspan: "8",
                });
                __VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
                    ...{ style: ({ 'padding-left': '50px' }) },
                });
                __VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
                for (const [column] of __VLS_vFor((props.tableConfig.columns))) {
                    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
                    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
                    (column.title);
                    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
                    __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.columnValue(details, column.field_value)) }, null, null);
                    // @ts-ignore
                    [tableState, columnValue,];
                }
            }
            // @ts-ignore
            [];
        }
    }
    else if (!__VLS_ctx.tableState.tableRecords.length) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
            'data-dt-row': (__VLS_ctx.getColSpan(props)),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
            colspan: (__VLS_ctx.getColSpan(props)),
            ...{ class: "empty-data" },
        });
        /** @type {__VLS_StyleScopedClasses['empty-data']} */ ;
    }
    var __VLS_28 = {};
    if (props.tableConfig.data.length && props.pagination) {
        let __VLS_30;
        /** @ts-ignore @type {typeof __VLS_components.Pagination} */
        Pagination;
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
            ...{ 'onSetPage': {} },
            total: (props.tableConfig.data.length),
            paginate: (__VLS_ctx.tableState.paginate),
            paginateDetails: (props.paginateDetails),
            selectedRows: (props.selectedRows),
            selectedItems: (__VLS_ctx.tableState.selected.length),
        }));
        const __VLS_32 = __VLS_31({
            ...{ 'onSetPage': {} },
            total: (props.tableConfig.data.length),
            paginate: (__VLS_ctx.tableState.paginate),
            paginateDetails: (props.paginateDetails),
            selectedRows: (props.selectedRows),
            selectedItems: (__VLS_ctx.tableState.selected.length),
        }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        let __VLS_35;
        const __VLS_36 = ({ setPage: {} },
            { onSetPage: (...[$event]) => {
                    if (!(props.tableConfig))
                        return;
                    if (!(props.tableConfig.data.length && props.pagination))
                        return;
                    __VLS_ctx.setPage($event);
                    // @ts-ignore
                    [tableState, tableState, tableState, getColSpan, getColSpan, setPage,];
                } });
        var __VLS_33;
        var __VLS_34;
    }
}
// @ts-ignore
var __VLS_29 = __VLS_28;
// @ts-ignore
[];
const __VLS_base = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
