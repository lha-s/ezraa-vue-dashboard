<template>
  <Swiper class="notification-slider" :direction="'vertical'" :pagination="false" :navigation="false" :autoHeight="true" :loop="true" :autoplay="{ delay: 2000 }" :slidesPerView="1" :modules="modules">
    <SwiperSlide v-for="(item, index) in notice" :key="index">
      <div>
        <div class="d-flex h-100" v-html="item"></div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { notice } from '@/core/data/header';

const modules = [Autoplay, Pagination, Navigation];
</script>

<style scoped></style>
