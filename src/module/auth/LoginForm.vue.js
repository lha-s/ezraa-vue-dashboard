import { ref, onMounted, reactive, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { initInputField } from '@/core/data/common';
import { baseUtils } from '@/utils';
import { useToast } from '@/utils/useToast';
import { validateForm } from '@/utils/validators/formValidators';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const props = withDefaults(defineProps(), {
    browserValidation: false,
    storeDetails: false,
});
const toast = useToast();
const { resetForm } = baseUtils();
const router = useRouter();
let formSubmitted = ref(false);
let showPassword = ref(false);
let form = reactive({
    email: initInputField(),
    password: initInputField(),
});
onMounted(() => {
    if (props.storeDetails) {
        form.email.data = 'test@gmail.com';
        form.password.data = '123456789';
    }
});
function togglePassword() {
    showPassword.value = !showPassword.value;
}
async function submit() {
    formSubmitted.value = true;
    const { isValid, formData } = validateForm(form);
    if (isValid) {
        if (props.storeDetails) {
            if (formData.email === 'test@gmail.com' && formData.password === '123456789') {
                localStorage.setItem('user', JSON.stringify(formData));
                router.replace('/dashboard');
            }
            else {
                toast.error('Email/Password is wrong...');
            }
        }
        else {
            toast.success(`Email: ${formData.email}\nPassword: ${formData.password}`);
        }
        form = resetForm(form);
        formSubmitted.value = false;
    }
}
const __VLS_defaults = {
    browserValidation: false,
    storeDetails: false,
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ onSubmit: (...[$event]) => {
            __VLS_ctx.submit();
            // @ts-ignore
            [submit,];
        } },
    ...{ class: "theme-form" },
});
/** @type {__VLS_StyleScopedClasses['theme-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Email Address'),
    required: (true),
}));
const __VLS_2 = __VLS_1({
    title: ('Email Address'),
    required: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Email is required.'),
    modelValue: (__VLS_ctx.form.email),
    inputId: ('email'),
    placeholder: ('test@gmail.com'),
    inputType: ('email'),
    browserValidation: (props.browserValidation),
}));
const __VLS_8 = __VLS_7({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Email is required.'),
    modelValue: (__VLS_ctx.form.email),
    inputId: ('email'),
    placeholder: ('test@gmail.com'),
    inputType: ('email'),
    browserValidation: (props.browserValidation),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[formSubmitted, form,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    title: ('Password'),
    required: (true),
}));
const __VLS_13 = __VLS_12({
    title: ('Password'),
    required: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_16 } = __VLS_14.slots;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.InputField | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Password is required.'),
    modelValue: (__VLS_ctx.form.password),
    inputId: ('password'),
    placeholder: ('*********'),
    inputType: (__VLS_ctx.showPassword ? 'text' : 'password'),
    browserValidation: (props.browserValidation),
}));
const __VLS_19 = __VLS_18({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Password is required.'),
    modelValue: (__VLS_ctx.form.password),
    inputId: ('password'),
    placeholder: ('*********'),
    inputType: (__VLS_ctx.showPassword ? 'text' : 'password'),
    browserValidation: (props.browserValidation),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
const { default: __VLS_22 } = __VLS_20.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.togglePassword();
            // @ts-ignore
            [formSubmitted, form, showPassword, togglePassword,];
        } },
    ...{ class: "show-hide" },
});
/** @type {__VLS_StyleScopedClasses['show-hide']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: ({ show: !__VLS_ctx.showPassword }) },
});
/** @type {__VLS_StyleScopedClasses['show']} */ ;
// @ts-ignore
[showPassword,];
var __VLS_20;
// @ts-ignore
[];
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group mb-0" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "checkbox-primary form-check-input" },
    id: "checkbox1",
    type: "checkbox",
});
/** @type {__VLS_StyleScopedClasses['checkbox-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "text-muted form-check-label" },
    for: "checkbox1",
});
/** @type {__VLS_StyleScopedClasses['text-muted']} */ ;
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-end mt-3" },
});
/** @type {__VLS_StyleScopedClasses['text-end']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary btn-block w-100 mt-3" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "social mt-4" },
});
/** @type {__VLS_StyleScopedClasses['social']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-showcase" },
});
/** @type {__VLS_StyleScopedClasses['btn-showcase']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "btn btn-light" },
    href: "https://www.linkedin.com/login",
    target: "_blank",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-brands fa-linkedin-in" },
});
/** @type {__VLS_StyleScopedClasses['fa-brands']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-linkedin-in']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "btn btn-light" },
    href: "https://twitter.com/login?lang=en",
    target: "_blank",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-brands fa-x-twitter" },
});
/** @type {__VLS_StyleScopedClasses['fa-brands']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-x-twitter']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "btn btn-light" },
    href: "https://www.facebook.com/",
    target: "_blank",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-brands fa-facebook-f" },
});
/** @type {__VLS_StyleScopedClasses['fa-brands']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-facebook-f']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "btn btn-light" },
    href: "https://www.google.com/",
    target: "_blank",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-brands fa-google" },
});
/** @type {__VLS_StyleScopedClasses['fa-brands']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-google']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
