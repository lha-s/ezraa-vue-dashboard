import { ref, onMounted, watch } from 'vue';
const props = withDefaults(defineProps(), {
    required: true,
    helperText: '',
    browserValidation: false,
    disabled: false,
    indeterminate: false,
    customizeCheckbox: false,
});
const emits = defineEmits(['update:modelValue']);
onMounted(() => {
    if (indeterminateCheckbox.value && props.indeterminate) {
        indeterminateCheckbox.value.indeterminate = true;
    }
});
watch(() => props.formSubmitted, () => {
    props.formSubmitted && updated(!!props.modelValue?.data);
}, { deep: true });
let validStatus = ref({
    errorMessage: '',
    valid: false,
});
const indeterminateCheckbox = ref(null);
function handleChange(event) {
    const is_checked = event.target.checked;
    updated(is_checked);
}
function updated(checked) {
    const isValid = !props.required || checked;
    validStatus.value = {
        valid: isValid,
        errorMessage: isValid && !props.browserValidation ? '' : props.errorMessage || 'Accept the condition',
    };
    if (indeterminateCheckbox.value && props.indeterminate) {
        indeterminateCheckbox.value.indeterminate = false;
    }
    emits('update:modelValue', {
        data: checked,
        errorMessage: validStatus.value.errorMessage,
        type: 'checkbox',
    });
}
const __VLS_defaults = {
    required: true,
    helperText: '',
    browserValidation: false,
    disabled: false,
    indeterminate: false,
    customizeCheckbox: false,
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
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onChange: (...[$event]) => {
            __VLS_ctx.handleChange($event);
            // @ts-ignore
            [handleChange,];
        } },
    ...{ class: "form-check-input" },
    type: "checkbox",
    id: (__VLS_ctx.inputId),
    required: (props.required || props.browserValidation),
    checked: (__VLS_ctx.modelValue?.data),
    ...{ class: ([props.class, { 'is-invalid': __VLS_ctx.modelValue?.errorMessage && !props.browserValidation }]) },
    disabled: (props.disabled),
    ref: (props.indeterminate ? 'indeterminateCheckbox' : ''),
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
/** @type {__VLS_StyleScopedClasses['is-invalid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label" },
    for: (__VLS_ctx.inputId),
    ...{ class: (props.labelClass) },
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
if (props.customizeCheckbox) {
    var __VLS_0 = {};
}
else {
    (props.label);
}
if (__VLS_ctx.modelValue?.errorMessage && __VLS_ctx.required && !props.browserValidation) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "invalid-feedback" },
    });
    /** @type {__VLS_StyleScopedClasses['invalid-feedback']} */ ;
    (__VLS_ctx.modelValue?.errorMessage);
}
// @ts-ignore
var __VLS_1 = __VLS_0;
// @ts-ignore
[inputId, inputId, modelValue, modelValue, modelValue, modelValue, required,];
const __VLS_base = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
