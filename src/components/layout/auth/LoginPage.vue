<template>
  <div class="container-fluid p-0">
    <div class="row m-0">
      <div class="col-12 p-0">
        <div class="login-card login-dark">
          <div>
            <div>
              <router-link class="logo" to="/dashboard"
                ><img class="img-fluid for-light" :src="`${getImage('logo/logo.png')}`" alt="looginpage" /><img class="img-fluid for-dark" :src="`${getImage('logo/logo_dark.png')}`" alt="looginpage"
              /></router-link>
            </div>
            <div class="login-main">
              <LoginForm :path="'/dashboard'" :storeDetails="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

import { baseUtils } from '@/utils';

const LoginForm = defineAsyncComponent(() => import('@/module/auth/LoginForm.vue'));

const { getImage } = baseUtils();
</script>
