import { OnClickOutside } from '@vueuse/components';
const props = withDefaults(defineProps(), {
    modalOpen: false,
    modalCentered: false,
    staticBackdrop: false,
});
const emit = defineEmits(['closeModal']);
function closeModal() {
    if (!props.staticBackdrop) {
        emit('closeModal');
    }
}
const __VLS_defaults = {
    modalOpen: false,
    modalCentered: false,
    staticBackdrop: false,
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
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Transition | typeof __VLS_components.Transition} */
Transition;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    name: "modals",
}));
const __VLS_2 = __VLS_1({
    name: "modals",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
if (props.modalOpen) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "modal fade show d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['modal']} */ ;
    /** @type {__VLS_StyleScopedClasses['fade']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "modal-dialog" },
        ...{ class: ([props.sizeClass, props.dialogClass, { 'modal-dialog-centered': props.modalCentered }]) },
    });
    /** @type {__VLS_StyleScopedClasses['modal-dialog']} */ ;
    /** @type {__VLS_StyleScopedClasses['modal-dialog-centered']} */ ;
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.OnClickOutside | typeof __VLS_components.OnClickOutside} */
    OnClickOutside;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        ...{ 'onTrigger': {} },
        ...{ class: "modal-content" },
        ...{ class: (__VLS_ctx.contentClass) },
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onTrigger': {} },
        ...{ class: "modal-content" },
        ...{ class: (__VLS_ctx.contentClass) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_11;
    const __VLS_12 = ({ trigger: {} },
        { onTrigger: (__VLS_ctx.closeModal) });
    /** @type {__VLS_StyleScopedClasses['modal-content']} */ ;
    const { default: __VLS_13 } = __VLS_9.slots;
    if (props.title) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "modal-header" },
        });
        /** @type {__VLS_StyleScopedClasses['modal-header']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
            ...{ class: "modal-title" },
        });
        /** @type {__VLS_StyleScopedClasses['modal-title']} */ ;
        (props.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (__VLS_ctx.closeModal) },
            ...{ class: "btn-close" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
    }
    var __VLS_14 = {};
    // @ts-ignore
    [contentClass, closeModal, closeModal,];
    var __VLS_9;
    var __VLS_10;
}
// @ts-ignore
[];
var __VLS_3;
let __VLS_16;
/** @ts-ignore @type {typeof __VLS_components.Transition | typeof __VLS_components.Transition} */
Transition;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
    name: "modals",
}));
const __VLS_18 = __VLS_17({
    name: "modals",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const { default: __VLS_21 } = __VLS_19.slots;
if (props.modalOpen) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "modal-backdrop fade show" },
    });
    /** @type {__VLS_StyleScopedClasses['modal-backdrop']} */ ;
    /** @type {__VLS_StyleScopedClasses['fade']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
}
// @ts-ignore
[];
var __VLS_19;
// @ts-ignore
var __VLS_15 = __VLS_14;
// @ts-ignore
[];
const __VLS_base = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
