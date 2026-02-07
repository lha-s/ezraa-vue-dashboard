<template>
  <div class="d-flex profile-media">
    <img class="b-r-10" :src="`${getImage('dashboard/profile.png')}`" alt="profile" />
    <div class="flex-grow-1">
      <span>Emay Walter</span>
      <p class="mb-0">
        Admin
        <i class="middle fa-solid fa-angle-down"></i>
      </p>
    </div>
  </div>
  <ul class="profile-dropdown onhover-show-div">
    <li v-for="(item, index) in profileItem" :key="index">
      <router-link :to="item.path">
        <vue-feather :type="item.icon" />
        <span>{{ item.title }}</span>
      </router-link>
    </li>
    <li>
      <a href="javascript:void(0)">
        <vue-feather :type="'log-in'" />
        <span @click="logOut()">Log out</span>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useRouter } from 'vue-router';

import { profile } from '@/core/data/header';
import { Profile } from '@/types/header';
import { baseUtils } from '@/utils';

const router = useRouter();
const { getImage } = baseUtils();

let profileItem = ref<Profile[]>(profile);

function logOut() {
  localStorage.clear();
  router.replace('/auth/login');
}
</script>

<style scoped></style>
