import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useCart } from '@/stores/cart';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const cartStore = useCart();
const { cartItems } = storeToRefs(cartStore);
const { updateQuantity, deleteCartItem, getSubTotal } = cartStore;
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cart-box" },
});
/** @type {__VLS_StyleScopedClasses['cart-box']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    icon: ('stroke-ecommerce'),
}));
const __VLS_2 = __VLS_1({
    icon: ('stroke-ecommerce'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
if (__VLS_ctx.cartItems && __VLS_ctx.cartItems.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "badge rounded-pill badge-danger" },
    });
    /** @type {__VLS_StyleScopedClasses['badge']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-pill']} */ ;
    /** @type {__VLS_StyleScopedClasses['badge-danger']} */ ;
    (__VLS_ctx.cartItems.length);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cart-dropdown onhover-show-div" },
});
/** @type {__VLS_StyleScopedClasses['cart-dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['onhover-show-div']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "f-18 mb-0 dropdown-title" },
});
/** @type {__VLS_StyleScopedClasses['f-18']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
if (__VLS_ctx.cartItems && __VLS_ctx.cartItems.length) {
    for (const [item, index] of __VLS_vFor((__VLS_ctx.cartItems))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-fluid b-r-5 me-3 img-60" },
            src: (item.product_image),
            alt: (item.product_name),
        });
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        /** @type {__VLS_StyleScopedClasses['b-r-5']} */ ;
        /** @type {__VLS_StyleScopedClasses['me-3']} */ ;
        /** @type {__VLS_StyleScopedClasses['img-60']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flex-grow-1" },
        });
        /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (item.product_name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "qty-box" },
        });
        /** @type {__VLS_StyleScopedClasses['qty-box']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "input-group" },
        });
        /** @type {__VLS_StyleScopedClasses['input-group']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "input-group-prepend" },
        });
        /** @type {__VLS_StyleScopedClasses['input-group-prepend']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.cartItems && __VLS_ctx.cartItems.length))
                        return;
                    __VLS_ctx.updateQuantity(-1, item);
                    // @ts-ignore
                    [cartItems, cartItems, cartItems, cartItems, cartItems, cartItems, updateQuantity,];
                } },
            ...{ class: "btn quantity-left-minus" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['quantity-left-minus']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ class: "form-control input-number" },
            type: "text",
            name: "quantity",
            value: (item.quantity),
        });
        /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
        /** @type {__VLS_StyleScopedClasses['input-number']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "input-group-prepend" },
        });
        /** @type {__VLS_StyleScopedClasses['input-group-prepend']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.cartItems && __VLS_ctx.cartItems.length))
                        return;
                    __VLS_ctx.updateQuantity(1, item);
                    // @ts-ignore
                    [updateQuantity,];
                } },
            ...{ class: "btn quantity-right-plus" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['quantity-right-plus']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
            ...{ class: "font-primary" },
        });
        /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
        (((item.discount_price ?? item.price) * item.quantity).toFixed(2));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "close-circle" },
        });
        /** @type {__VLS_StyleScopedClasses['close-circle']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.cartItems && __VLS_ctx.cartItems.length))
                        return;
                    __VLS_ctx.deleteCartItem(item);
                    // @ts-ignore
                    [deleteCartItem,];
                } },
            ...{ class: "bg-danger" },
            href: "javascript:void(0)",
        });
        /** @type {__VLS_StyleScopedClasses['bg-danger']} */ ;
        let __VLS_5;
        /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
        vueFeather;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
            type: ('x'),
        }));
        const __VLS_7 = __VLS_6({
            type: ('x'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        // @ts-ignore
        [];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "empty-cart" },
    });
    /** @type {__VLS_StyleScopedClasses['empty-cart']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: "/images/empty-cart.svg",
        ...{ class: "img-fluid" },
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
}
if (__VLS_ctx.cartItems && __VLS_ctx.cartItems.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "pb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['pb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "total" },
    });
    /** @type {__VLS_StyleScopedClasses['total']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-right" },
    });
    /** @type {__VLS_StyleScopedClasses['f-right']} */ ;
    (__VLS_ctx.getSubTotal());
}
// @ts-ignore
[cartItems, cartItems, getSubTotal,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
