import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { language } from '@/core/data/header';
import { useLayout } from '@/stores/layout';
const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);
const i18n = useI18n();
let languages = ref(language);
let selectedLanguage = ref({
    id: 1,
    name: 'English',
    code: 'en',
    icon: 'us',
    country_code: 'US',
    active: true,
});
onMounted(() => {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang) {
        const found = languages.value.find(lang => lang.name === savedLang);
        if (found) {
            selectLanguage(found);
            return;
        }
    }
    languages.value.filter(details => {
        if (details.active) {
            selectLanguage(details);
        }
    });
});
function selectLanguage(language) {
    i18n.locale.value = language.name;
    selectedLanguage.value = language;
    localStorage.setItem('selectedLang', language.name);
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "translate_wrapper" },
    ...{ class: ({ active: __VLS_ctx.layoutState.isLanguage }) },
});
/** @type {__VLS_StyleScopedClasses['translate_wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
if (__VLS_ctx.selectedLanguage) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "current_lang" },
    });
    /** @type {__VLS_StyleScopedClasses['current_lang']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "lang" },
    });
    /** @type {__VLS_StyleScopedClasses['lang']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: (`flag-icon flag-icon-${__VLS_ctx.selectedLanguage.icon}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "lang-txt" },
    });
    /** @type {__VLS_StyleScopedClasses['lang-txt']} */ ;
    (__VLS_ctx.selectedLanguage.code);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "more_lang" },
    ...{ class: ({ active: __VLS_ctx.layoutState.isLanguage }) },
});
/** @type {__VLS_StyleScopedClasses['more_lang']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
for (const [language, index] of __VLS_vFor((__VLS_ctx.languages))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectLanguage(language);
                // @ts-ignore
                [layoutState, layoutState, selectedLanguage, selectedLanguage, selectedLanguage, languages, selectLanguage,];
            } },
        ...{ class: "lang" },
        ...{ class: ({ selected: __VLS_ctx.selectedLanguage && __VLS_ctx.selectedLanguage.code === language.code }) },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['lang']} */ ;
    /** @type {__VLS_StyleScopedClasses['selected']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: (`flag-icon flag-icon-${language.icon}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "lang-txt" },
    });
    /** @type {__VLS_StyleScopedClasses['lang-txt']} */ ;
    (language.name);
    if (language.country_code) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (language.country_code);
    }
    // @ts-ignore
    [selectedLanguage, selectedLanguage,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
