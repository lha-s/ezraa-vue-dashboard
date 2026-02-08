const props = withDefaults(defineProps(), {
    class: '',
    labelPositionBottom: false,
    required: false,
});
const __VLS_defaults = {
    class: '',
    labelPositionBottom: false,
    required: false,
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (!props.labelPositionBottom) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "form-label" },
        ...{ class: (props.class) },
    });
    /** @type {__VLS_StyleScopedClasses['form-label']} */ ;
    (props.title);
    if (props.required) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "txt-danger" },
        });
        /** @type {__VLS_StyleScopedClasses['txt-danger']} */ ;
    }
}
var __VLS_0 = {};
if (props.labelPositionBottom) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "form-label" },
        ...{ class: (props.class) },
    });
    /** @type {__VLS_StyleScopedClasses['form-label']} */ ;
    (props.title);
    if (props.required) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "txt-danger" },
        });
        /** @type {__VLS_StyleScopedClasses['txt-danger']} */ ;
    }
}
// @ts-ignore
var __VLS_1 = __VLS_0;
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
