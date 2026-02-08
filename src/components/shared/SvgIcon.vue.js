import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useLayout } from '@/stores/layout';
const props = defineProps();
const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);
const iconClass = computed(() => props.class || 'stroke-icon');
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (props.change) {
    if (__VLS_ctx.layoutState.config.settings.icon === 'stroke-svg') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
            ...{ class: (__VLS_ctx.iconClass) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.use)({
            'xlink:href': (`/svg/icon-sprite.svg#stroke-${props.icon}`),
        });
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
            ...{ class: "fill-icon" },
        });
        /** @type {__VLS_StyleScopedClasses['fill-icon']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.use)({
            'xlink:href': (`/svg/icon-sprite.svg#fill-${props.icon}`),
        });
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
        ...{ class: (__VLS_ctx.iconClass) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.use)({
        'xlink:href': (`/svg/icon-sprite.svg#${props.icon}`),
    });
}
// @ts-ignore
[layoutState, iconClass, iconClass,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
