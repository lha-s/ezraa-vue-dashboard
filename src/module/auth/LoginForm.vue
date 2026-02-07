<template>
  <form class="theme-form" @submit.prevent="submit()">
    <h4>Sign in to account</h4>
    <p>Enter your email & password to login</p>
    <div class="form-group">
      <InputWrapper :title="'Email Address'" :required="true">
        <InputField
          :formSubmitted="formSubmitted"
          :errorMessage="'Email is required.'"
          v-model:modelValue="form.email"
          :inputId="'email'"
          :placeholder="'test@gmail.com'"
          :inputType="'email'"
          :browserValidation="props.browserValidation"
        />
      </InputWrapper>
    </div>
    <div class="form-group">
      <InputWrapper :title="'Password'" :required="true">
        <InputField
          :formSubmitted="formSubmitted"
          :errorMessage="'Password is required.'"
          v-model:modelValue="form.password"
          :inputId="'password'"
          :placeholder="'*********'"
          :inputType="showPassword ? 'text' : 'password'"
          :browserValidation="props.browserValidation"
        >
          <div class="show-hide" @click="togglePassword()">
            <span :class="{ show: !showPassword }"></span>
          </div>
        </InputField>
      </InputWrapper>
    </div>
    <div class="form-group mb-0">
      <div class="form-check">
        <input class="checkbox-primary form-check-input" id="checkbox1" type="checkbox" />
        <label class="text-muted form-check-label" for="checkbox1">Remember password</label>
      </div>
      <div class="text-end mt-3">
        <button class="btn btn-primary btn-block w-100 mt-3" type="submit">Sign in</button>
      </div>
    </div>
    <div class="social mt-4">
      <div class="btn-showcase">
        <a class="btn btn-light" href="https://www.linkedin.com/login" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
        <a class="btn btn-light" href="https://twitter.com/login?lang=en" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
        <a class="btn btn-light" href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
        <a class="btn btn-light" href="https://www.google.com/" target="_blank"><i class="fa-brands fa-google"></i></a>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, defineAsyncComponent } from 'vue';

import { useRouter } from 'vue-router';

import { initInputField } from '@/core/data/common';
import { baseUtils } from '@/utils';
import { useToast } from '@/utils/useToast';
import { validateForm } from '@/utils/validators/formValidators';

const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));

const props = withDefaults(
  defineProps<{
    path: string;
    browserValidation?: boolean;
    storeDetails?: boolean;
  }>(),
  {
    browserValidation: false,
    storeDetails: false,
  },
);

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
      } else {
        toast.error('Email/Password is wrong...');
      }
    } else {
      toast.success(`Email: ${formData.email}\nPassword: ${formData.password}`);
    }
    form = resetForm(form);
    formSubmitted.value = false;
  }
}
</script>

<style scoped></style>
