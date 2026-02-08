import { ref, computed, watch, nextTick, onMounted } from 'vue';
import { OnClickOutside } from '@vueuse/components';
const props = withDefaults(defineProps(), {
    placeholder: 'Select',
    displayKey: 'label',
    getValueKey: 'label',
    multiSelect: false,
    required: true,
    formSubmitted: false,
    disableClearButton: false,
    tooltipValidation: false,
    isPlaceholder: true,
    disabled: false,
    showOptions: false,
});
const emits = defineEmits(['update:modelValue']);
const showDropdown = ref(false);
const search = ref('');
const highlightedIndex = ref(0);
const wrapperRef = ref(null);
const searchInput = ref(null);
const optionRefs = ref([]);
const filteredOptions = computed(() => {
    return props.options.filter(option => {
        const key = props.displayKey;
        const val = option[key];
        if (typeof val === 'string' || typeof val === 'number') {
            return val.toString().toLowerCase().includes(search.value.toLowerCase());
        }
        return false;
    });
});
const displaySelected = computed(() => {
    if (props.multiSelect && Array.isArray(props.modelValue.selectedItems)) {
        return props.modelValue.selectedItems;
    }
    else if (!props.multiSelect && props.modelValue?.selected) {
        return props.modelValue.selected[props.displayKey] || '';
    }
    return '';
});
onMounted(() => {
    if (props.modelValue && filteredOptions.value.length) {
        props.modelValue.selected && handleSelect(props.modelValue.selected);
        setInitialHighlightedIndex();
    }
});
const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
    if (showDropdown.value) {
        nextTick(() => {
            searchInput.value?.focus();
            setInitialHighlightedIndex();
            scrollToHighlighted();
        });
    }
};
function isSelected(option) {
    const key = props.getValueKey;
    if (props.multiSelect) {
        return Array.isArray(props.modelValue.selectedItems) && props.modelValue.selectedItems.some(item => item[key] === option[key]);
    }
    return props.modelValue.selected?.[key] === option[key];
}
const handleSelect = (option) => {
    const key = props.getValueKey;
    if (props.multiSelect) {
        let selected = Array.isArray(props.modelValue.selectedItems) ? [...props.modelValue.selectedItems] : [];
        const index = selected.findIndex(item => item[props.getValueKey] === option[key]);
        if (index >= 0)
            selected.splice(index, 1);
        else
            selected.push(option);
        emits('update:modelValue', { selectedItems: selected, data: selected.map(item => item[props.getValueKey]), errorMessage: '', type: 'dropdown' });
    }
    else {
        emits('update:modelValue', { selected: option, data: option[key], errorMessage: '', type: 'dropdown' });
        showDropdown.value = false;
        search.value = '';
    }
    validate();
};
function handleKeydown(event) {
    if (event.key === 'ArrowDown') {
        highlightedIndex.value = (highlightedIndex.value + 1) % filteredOptions.value.length;
        event.preventDefault();
        scrollToHighlighted();
    }
    else if (event.key === 'ArrowUp') {
        highlightedIndex.value = (highlightedIndex.value - 1 + filteredOptions.value.length) % filteredOptions.value.length;
        event.preventDefault();
        scrollToHighlighted();
    }
    else if (event.key === 'Enter') {
        if (filteredOptions.value[highlightedIndex.value]) {
            handleSelect(filteredOptions.value[highlightedIndex.value]);
            event.preventDefault();
        }
    }
}
const setInitialHighlightedIndex = () => {
    if (props.modelValue && props.modelValue.selected && filteredOptions.value.length) {
        const selectedIndex = filteredOptions.value.findIndex(item => {
            if (props.displayKey) {
                return item[props.displayKey] === (props.modelValue && props.modelValue.selected && props.modelValue.selected.label);
            }
            else if (props.getValueKey) {
                return item[props.getValueKey] === (props.modelValue && props.modelValue.selected && props.modelValue.selected.value);
            }
        });
        highlightedIndex.value = selectedIndex !== -1 ? selectedIndex : 0;
    }
};
function setOptionRef(el, index) {
    if (el instanceof HTMLElement) {
        optionRefs.value[index] = el;
    }
}
const scrollToHighlighted = () => {
    const el = optionRefs.value[highlightedIndex.value];
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
};
const validate = () => {
    const isEmpty = (props.multiSelect && (!props.modelValue?.data || props.modelValue?.data?.length === 0)) || (!props.multiSelect && !props.modelValue?.data);
    props.modelValue.errorMessage = isEmpty && props.required ? (props.errorMessage ? props.errorMessage : 'Please select a value') : '';
};
const clear = () => {
    emits('update:modelValue', props.multiSelect
        ? { selectedItems: [], data: [], errorMessage: props.required ? (props.errorMessage ? props.errorMessage : 'Please select a value') : '' }
        : { selected: null, data: '', errorMessage: props.required ? (props.errorMessage ? props.errorMessage : 'Please select a value') : '' });
    search.value = '';
};
watch(() => props.modelValue, () => {
    highlightedIndex.value = 0;
});
watch(() => [props.formSubmitted, props.modelValue], () => {
    validate();
}, { deep: true });
const __VLS_defaults = {
    placeholder: 'Select',
    displayKey: 'label',
    getValueKey: 'label',
    multiSelect: false,
    required: true,
    formSubmitted: false,
    disableClearButton: false,
    tooltipValidation: false,
    isPlaceholder: true,
    disabled: false,
    showOptions: false,
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
/** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.OnClickOutside | typeof __VLS_components.OnClickOutside} */
OnClickOutside;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onTrigger': {} },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onTrigger': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ trigger: {} },
    { onTrigger: (...[$event]) => {
            __VLS_ctx.showDropdown = false;
            // @ts-ignore
            [showDropdown,];
        } });
const { default: __VLS_7 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "smart-select" },
});
/** @type {__VLS_StyleScopedClasses['smart-select']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (__VLS_ctx.toggleDropdown) },
    ...{ class: "select-box" },
    ref: "wrapperRef",
});
/** @type {__VLS_StyleScopedClasses['select-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-select d-flex flex-wrap align-items-center gap-1 px-2 py-1" },
    ...{ class: ([props.class, { 'is-invalid': props.modelValue.errorMessage && __VLS_ctx.required && props.formSubmitted }]) },
    disabled: (props.disabled),
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['form-select']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['is-invalid']} */ ;
if (__VLS_ctx.multiSelect && Array.isArray(__VLS_ctx.displaySelected) && __VLS_ctx.displaySelected.length) {
    for (const [item, index] of __VLS_vFor((__VLS_ctx.displaySelected))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            key: (index),
            ...{ class: "badge badge-primary" },
        });
        /** @type {__VLS_StyleScopedClasses['badge']} */ ;
        /** @type {__VLS_StyleScopedClasses['badge-primary']} */ ;
        (item[props.displayKey]);
        // @ts-ignore
        [toggleDropdown, required, multiSelect, displaySelected, displaySelected, displaySelected,];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-muted" },
    });
    /** @type {__VLS_StyleScopedClasses['text-muted']} */ ;
    if (__VLS_ctx.displaySelected && !Array.isArray(__VLS_ctx.displaySelected)) {
        (__VLS_ctx.displaySelected);
    }
    else {
        (__VLS_ctx.isPlaceholder ? __VLS_ctx.placeholder || 'Select' : '');
    }
}
if (!__VLS_ctx.disableClearButton && __VLS_ctx.multiSelect ? Array.isArray(__VLS_ctx.displaySelected) && __VLS_ctx.displaySelected.length : __VLS_ctx.displaySelected) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ onClick: (__VLS_ctx.clear) },
        ...{ class: "clear-btn" },
    });
    /** @type {__VLS_StyleScopedClasses['clear-btn']} */ ;
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        type: ('x'),
    }));
    const __VLS_10 = __VLS_9({
        type: ('x'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
}
if (__VLS_ctx.showDropdown) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.showDropdown))
                    return;
                __VLS_ctx.handleKeydown($event);
                // @ts-ignore
                [showDropdown, multiSelect, displaySelected, displaySelected, displaySelected, displaySelected, displaySelected, displaySelected, isPlaceholder, placeholder, disableClearButton, clear, handleKeydown,];
            } },
        type: "text",
        value: (__VLS_ctx.search),
        ...{ class: "form-control" },
        placeholder: "Search...",
        ref: "searchInput",
    });
    /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "custom-scrollbar" },
    });
    /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
    for (const [option, index] of __VLS_vFor((__VLS_ctx.filteredOptions))) {
        if (option && option.data && Array.isArray(option.data) && props.showOptions) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "disabled" },
            });
            /** @type {__VLS_StyleScopedClasses['disabled']} */ ;
            (option[__VLS_ctx.displayKey]);
            for (const [child, childIndex] of __VLS_vFor((option.data))) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
                    ...{ onClick: (...[$event]) => {
                            if (!(__VLS_ctx.showDropdown))
                                return;
                            if (!(option && option.data && Array.isArray(option.data) && props.showOptions))
                                return;
                            __VLS_ctx.handleSelect(child);
                            // @ts-ignore
                            [search, filteredOptions, displayKey, handleSelect,];
                        } },
                    ...{ class: ({ selected: __VLS_ctx.isSelected(child) }) },
                    ref: (el => __VLS_ctx.setOptionRef(el, index)),
                    key: (childIndex),
                });
                /** @type {__VLS_StyleScopedClasses['selected']} */ ;
                (child[__VLS_ctx.displayKey]);
                // @ts-ignore
                [displayKey, isSelected, setOptionRef,];
            }
        }
        else {
            __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
                ...{ onClick: (...[$event]) => {
                        if (!(__VLS_ctx.showDropdown))
                            return;
                        if (!!(option && option.data && Array.isArray(option.data) && props.showOptions))
                            return;
                        __VLS_ctx.handleSelect(option);
                        // @ts-ignore
                        [handleSelect,];
                    } },
                ...{ class: ({ highlighted: index === __VLS_ctx.highlightedIndex, selected: __VLS_ctx.isSelected(option) }) },
                ref: (el => __VLS_ctx.setOptionRef(el, index)),
            });
            /** @type {__VLS_StyleScopedClasses['highlighted']} */ ;
            /** @type {__VLS_StyleScopedClasses['selected']} */ ;
            (option[__VLS_ctx.displayKey]);
        }
        // @ts-ignore
        [displayKey, isSelected, setOptionRef, highlightedIndex,];
    }
    if (!__VLS_ctx.filteredOptions.length) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "no-option" },
        });
        /** @type {__VLS_StyleScopedClasses['no-option']} */ ;
    }
}
// @ts-ignore
[filteredOptions,];
var __VLS_3;
var __VLS_4;
if (__VLS_ctx.modelValue?.errorMessage && __VLS_ctx.required && props.formSubmitted) {
    if (props.tooltipValidation) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "invalid-tooltip" },
        });
        /** @type {__VLS_StyleScopedClasses['invalid-tooltip']} */ ;
        (__VLS_ctx.modelValue?.errorMessage);
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "invalid-feedback" },
        });
        /** @type {__VLS_StyleScopedClasses['invalid-feedback']} */ ;
        (__VLS_ctx.modelValue?.errorMessage);
    }
}
// @ts-ignore
[required, modelValue, modelValue, modelValue,];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
    props: {},
});
export default {};
