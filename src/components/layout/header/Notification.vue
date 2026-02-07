<template>
  <div class="notification-box">
    <SvgIcon :icon="'notification'" />
    <span class="badge rounded-pill badge-success" v-if="notifications && notifications.length">{{ notifications.length }}</span>
  </div>

  <div class="onhover-show-div notification-dropdown">
    <h6 class="f-18 mb-0 dropdown-title">Notifications</h6>

    <ul>
      <template v-if="notifications && notifications.length">
        <li :class="`b-l-${notification.border_color} border-4 toast default-show-toast align-items-center text-light border-0 show`" v-for="(notification, index) in notifications" :key="index">
          <div class="d-flex justify-content-between">
            <div class="toast-body">
              <p>{{ notification.message }}</p>
            </div>
            <button class="btn-close btn-close-white me-2 m-auto" type="button" @click="removeNotification(notification.id)"></button>
          </div>
        </li>
      </template>
      <template v-else>
        <li>There are no notifications.</li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';

import { notification } from '@/core/data/header';
import type { Notification } from '@/types/header';

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));

let notifications = ref<Notification[]>(notification);

function removeNotification(id: number) {
  const index = notifications.value.findIndex(notification => notification.id === id);

  if (index !== -1) {
    notifications.value.splice(index, 1);
  }
}
</script>

<style scoped></style>
