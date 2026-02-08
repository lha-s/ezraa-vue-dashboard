import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { notice } from '@/core/data/header';
const modules = [Autoplay, Pagination, Navigation];
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Swiper | typeof __VLS_components.Swiper} */
Swiper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "notification-slider" },
    direction: ('vertical'),
    pagination: (false),
    navigation: (false),
    autoHeight: (true),
    loop: (true),
    autoplay: ({ delay: 2000 }),
    slidesPerView: (1),
    modules: (__VLS_ctx.modules),
}));
const __VLS_2 = __VLS_1({
    ...{ class: "notification-slider" },
    direction: ('vertical'),
    pagination: (false),
    navigation: (false),
    autoHeight: (true),
    loop: (true),
    autoplay: ({ delay: 2000 }),
    slidesPerView: (1),
    modules: (__VLS_ctx.modules),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
/** @type {__VLS_StyleScopedClasses['notification-slider']} */ ;
const { default: __VLS_6 } = __VLS_3.slots;
for (const [item, index] of __VLS_vFor((__VLS_ctx.notice))) {
    let __VLS_7;
    /** @ts-ignore @type {typeof __VLS_components.SwiperSlide | typeof __VLS_components.SwiperSlide} */
    SwiperSlide;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        key: (index),
    }));
    const __VLS_9 = __VLS_8({
        key: (index),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const { default: __VLS_12 } = __VLS_10.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex h-100" },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, { ...__VLS_directiveBindingRestFields, value: (item) }, null, null);
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-100']} */ ;
    // @ts-ignore
    [modules, notice,];
    var __VLS_10;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
