const cards = [
    {
        title: 'Order Plants',
        href: '/c/plants/dashboard',
        icon: 'shopping-bag',
        bg: '#e8e5a3',
        iconBg: 'rgba(120, 115, 30, 0.18)',
        iconColor: '#6b6720',
        textColor: '#4a4718',
        description: 'Order and manage plant inventory for environmental projects',
    },
    {
        title: 'Carbon Accounting',
        href: '/c/carbon/dashboard',
        icon: 'activity',
        bg: '#d4c9a8',
        iconBg: 'rgba(120, 100, 50, 0.18)',
        iconColor: '#7a6b3a',
        textColor: '#5a4e2a',
        description: 'Track and manage carbon emissions across your organization',
    },
    {
        title: 'ESG',
        href: '/c/esg/dashboard',
        icon: 'feather',
        bg: '#b8bee0',
        iconBg: 'rgba(60, 65, 130, 0.18)',
        iconColor: '#4a4f8a',
        textColor: '#3a3f6a',
        description: 'Environmental, Social & Governance reporting and compliance',
    },
    {
        title: 'Sustainability Report',
        href: '/c/reports/dashboard',
        icon: 'bar-chart-2',
        bg: '#bddcbe',
        iconBg: 'rgba(40, 110, 50, 0.18)',
        iconColor: '#3a7a40',
        textColor: '#2d5e32',
        description: 'Generate comprehensive sustainability reports and analytics',
    },
    {
        title: 'Geospatial Monitoring',
        href: '/c/geo/dashboard',
        icon: 'globe',
        bg: '#c5b8d8',
        iconBg: 'rgba(90, 60, 130, 0.18)',
        iconColor: '#6a4a90',
        textColor: '#523a72',
        description: 'Monitor environmental impact with geospatial intelligence',
    },
];
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['category-card']} */ ;
/** @type {__VLS_StyleScopedClasses['category-card']} */ ;
/** @type {__VLS_StyleScopedClasses['category-icon-circle']} */ ;
/** @type {__VLS_StyleScopedClasses['category-open-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['category-card']} */ ;
/** @type {__VLS_StyleScopedClasses['category-icon-circle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [card] of __VLS_vFor((__VLS_ctx.cards))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (card.title),
        ...{ class: "col-xxl col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xxl']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        to: (card.href),
        ...{ class: "text-decoration-none" },
    }));
    const __VLS_2 = __VLS_1({
        to: (card.href),
        ...{ class: "text-decoration-none" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['text-decoration-none']} */ ;
    const { default: __VLS_5 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card category-card" },
    });
    /** @type {__VLS_StyleScopedClasses['card']} */ ;
    /** @type {__VLS_StyleScopedClasses['category-card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-body" },
        ...{ style: ({ backgroundColor: card.bg }) },
    });
    /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "category-icon-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['category-icon-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "category-icon-circle" },
        ...{ style: ({ backgroundColor: card.iconBg }) },
    });
    /** @type {__VLS_StyleScopedClasses['category-icon-circle']} */ ;
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        type: (card.icon),
        ...{ style: ({ color: card.iconColor, stroke: card.iconColor }) },
    }));
    const __VLS_8 = __VLS_7({
        type: (card.icon),
        ...{ style: ({ color: card.iconColor, stroke: card.iconColor }) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "category-text" },
    });
    /** @type {__VLS_StyleScopedClasses['category-text']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "f-w-600" },
        ...{ style: ({ color: card.textColor }) },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
    (card.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-12" },
        ...{ style: ({ color: card.textColor, opacity: 0.7 }) },
    });
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    (card.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "btn category-open-btn" },
        ...{ style: ({ color: card.textColor }) },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['category-open-btn']} */ ;
    // @ts-ignore
    [cards,];
    var __VLS_3;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
