<template>
  <div class="cart-box">
    <SvgIcon :icon="'stroke-ecommerce'" />
    <template v-if="cartItems && cartItems.length">
      <span class="badge rounded-pill badge-danger">{{ cartItems.length }}</span>
    </template>
  </div>

  <div class="cart-dropdown onhover-show-div">
    <h6 class="f-18 mb-0 dropdown-title">Cart</h6>
    <ul class="custom-scrollbar">
      <template v-if="cartItems && cartItems.length">
        <li v-for="(item, index) in cartItems" :key="index">
          <div class="d-flex">
            <img class="img-fluid b-r-5 me-3 img-60" :src="item.product_image" :alt="item.product_name" />
            <div class="flex-grow-1">
              <span>{{ item.product_name }}</span>
              <div class="qty-box">
                <div class="input-group">
                  <span class="input-group-prepend">
                    <button class="btn quantity-left-minus" type="button" @click="updateQuantity(-1, item)">-</button>
                  </span>
                  <input class="form-control input-number" type="text" name="quantity" v-model="item.quantity" />
                  <span class="input-group-prepend">
                    <button class="btn quantity-right-plus" type="button" @click="updateQuantity(1, item)">+</button>
                  </span>
                </div>
              </div>
              <h6 class="font-primary">${{ ((item.discount_price ?? item.price) * item.quantity).toFixed(2) }}</h6>
            </div>
            <div class="close-circle">
              <a class="bg-danger" href="javascript:void(0)" @click="deleteCartItem(item)">
                <vue-feather :type="'x'"></vue-feather>
              </a>
            </div>
          </div>
        </li>
      </template>
      <template v-else>
        <li class="empty-cart">
          <img src="/images/empty-cart.svg" class="img-fluid" />
          <h4>Oops!&nbsp;&nbsp;Empty cart!</h4>
        </li>
      </template>
    </ul>

    <template v-if="cartItems && cartItems.length">
      <ul class="pb-0">
        <li class="total">
          <h6 class="mb-0">
            Order Total :
            <span class="f-right">{{ getSubTotal() }}</span>
          </h6>
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

import { storeToRefs } from 'pinia';

import { useCart } from '@/stores/cart';

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));

const cartStore = useCart();
const { cartItems } = storeToRefs(cartStore);
const { updateQuantity, deleteCartItem, getSubTotal } = cartStore;
</script>
