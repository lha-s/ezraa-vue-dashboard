import { ref, watch } from 'vue';
import { OnClickOutside } from '@vueuse/components';
const props = defineProps();
let selectedItem = ref('');
let show = ref(false);
watch(() => props.options, newValue => {
    if (newValue) {
        selectedItem.value = newValue[0].title;
    }
}, { immediate: true });
function openDropdown() {
    show.value = !show.value;
}
function selectItem(value) {
    selectedItem.value = value;
    show.value = false;
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (props.dropdownType == 'simple') {
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
                if (!(props.dropdownType == 'simple'))
                    return;
                __VLS_ctx.show = false;
                // @ts-ignore
                [show,];
            } });
    const { default: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown icon-dropdown" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
    /** @type {__VLS_StyleScopedClasses['icon-dropdown']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(props.dropdownType == 'simple'))
                    return;
                __VLS_ctx.openDropdown();
                // @ts-ignore
                [openDropdown,];
            } },
        ...{ class: "btn dropdown-toggle" },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "icon-more-alt" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-more-alt']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown-menu dropdown-menu-end" },
        ...{ class: ({ show: __VLS_ctx.show }) },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-menu-end']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    for (const [option, index] of __VLS_vFor((props.options))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: (...[$event]) => {
                    if (!(props.dropdownType == 'simple'))
                        return;
                    __VLS_ctx.selectItem(option.title);
                    // @ts-ignore
                    [show, selectItem,];
                } },
            ...{ class: "dropdown-item" },
            href: "javascript:void(0)",
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
        (option.title);
        // @ts-ignore
        [];
    }
    // @ts-ignore
    [];
    var __VLS_3;
    var __VLS_4;
}
if (props.dropdownType == 'classic') {
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.OnClickOutside | typeof __VLS_components.OnClickOutside} */
    OnClickOutside;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        ...{ 'onTrigger': {} },
    }));
    const __VLS_10 = __VLS_9({
        ...{ 'onTrigger': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_13;
    const __VLS_14 = ({ trigger: {} },
        { onTrigger: (...[$event]) => {
                if (!(props.dropdownType == 'classic'))
                    return;
                __VLS_ctx.show = false;
                // @ts-ignore
                [show,];
            } });
    const { default: __VLS_15 } = __VLS_11.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown" },
        ...{ class: (props.dropdownClass) },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(props.dropdownType == 'classic'))
                    return;
                __VLS_ctx.openDropdown();
                // @ts-ignore
                [openDropdown,];
            } },
        ...{ class: "btn dropdown-toggle" },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
    (__VLS_ctx.selectedItem);
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "dropdown-menu" },
        ...{ class: ({ show: __VLS_ctx.show }) },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    for (const [option, index] of __VLS_vFor((props.options))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ onClick: (...[$event]) => {
                    if (!(props.dropdownType == 'classic'))
                        return;
                    __VLS_ctx.selectItem(option.title);
                    // @ts-ignore
                    [show, selectItem, selectedItem,];
                } },
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "dropdown-item" },
            href: "javascript:void(0)",
        });
        /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
        (option.title);
        // @ts-ignore
        [];
    }
    // @ts-ignore
    [];
    var __VLS_11;
    var __VLS_12;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
