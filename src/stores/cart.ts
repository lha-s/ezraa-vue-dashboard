import { ref } from 'vue';

import { defineStore } from 'pinia';

export interface CartItem {
  id: number;
  product_name: string;
  product_image: string;
  price: number;
  discount_price?: number;
  quantity: number;
}

export const useCart = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([]);

  function updateQuantity(value: number, item: CartItem) {
    const cartItem = cartItems.value.find(c => c.id === item.id);
    if (!cartItem) return;

    if (value === -1) {
      cartItem.quantity -= 1;
      if (cartItem.quantity < 1) deleteCartItem(item);
    } else if (value === 1) {
      cartItem.quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cartItems.value));
  }

  function deleteCartItem(item: CartItem) {
    cartItems.value = cartItems.value.filter(p => p.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(cartItems.value));
  }

  function getSubTotal() {
    const subTotal = cartItems.value.reduce((acc, item) => {
      const price = item.discount_price ?? item.price ?? 0;
      return acc + price * item.quantity;
    }, 0);
    return `$${subTotal.toFixed(2)}`;
  }

  return { cartItems, updateQuantity, deleteCartItem, getSubTotal };
});
