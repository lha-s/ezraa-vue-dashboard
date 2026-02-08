import { ref, defineAsyncComponent } from 'vue';
import { notification } from '@/core/data/header';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
let notifications = ref(notification);
function removeNotification(id) {
    const index = notifications.value.findIndex(notification => notification.id === id);
    if (index !== -1) {
        notifications.value.splice(index, 1);
    }
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "notification-box" },
});
/** @type {__VLS_StyleScopedClasses['notification-box']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    icon: ('notification'),
}));
const __VLS_2 = __VLS_1({
    icon: ('notification'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
if (__VLS_ctx.notifications && __VLS_ctx.notifications.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "badge rounded-pill badge-success" },
    });
    /** @type {__VLS_StyleScopedClasses['badge']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-pill']} */ ;
    /** @type {__VLS_StyleScopedClasses['badge-success']} */ ;
    (__VLS_ctx.notifications.length);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "onhover-show-div notification-dropdown" },
});
/** @type {__VLS_StyleScopedClasses['onhover-show-div']} */ ;
/** @type {__VLS_StyleScopedClasses['notification-dropdown']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "f-18 mb-0 dropdown-title" },
});
/** @type {__VLS_StyleScopedClasses['f-18']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
if (__VLS_ctx.notifications && __VLS_ctx.notifications.length) {
    for (const [notification, index] of __VLS_vFor((__VLS_ctx.notifications))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: (`b-l-${notification.border_color} border-4 toast default-show-toast align-items-center text-light border-0 show`) },
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex justify-content-between" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['justify-content-between']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "toast-body" },
        });
        /** @type {__VLS_StyleScopedClasses['toast-body']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (notification.message);
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.notifications && __VLS_ctx.notifications.length))
                        return;
                    __VLS_ctx.removeNotification(notification.id);
                    // @ts-ignore
                    [notifications, notifications, notifications, notifications, notifications, notifications, removeNotification,];
                } },
            ...{ class: "btn-close btn-close-white me-2 m-auto" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-close-white']} */ ;
        /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['m-auto']} */ ;
        // @ts-ignore
        [];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
