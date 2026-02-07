<template>
  <Transition name="modals">
    <div v-if="props.modalOpen" class="modal fade show d-block">
      <div class="modal-dialog" :class="[props.sizeClass, props.dialogClass, { 'modal-dialog-centered': props.modalCentered }]">
        <OnClickOutside @trigger="closeModal" class="modal-content" :class="contentClass">
          <div class="modal-header" v-if="props.title">
            <h5 class="modal-title">{{ props.title }}</h5>
            <button class="btn-close" type="button" @click="closeModal"></button>
          </div>
          <slot />
        </OnClickOutside>
      </div>
    </div>
  </Transition>
  <Transition name="modals">
    <div class="modal-backdrop fade show" v-if="props.modalOpen"></div>
  </Transition>
</template>

<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components';

import { ModalProps } from '@/types/common';

const props = withDefaults(defineProps<ModalProps>(), {
  modalOpen: false,
  modalCentered: false,
  staticBackdrop: false,
});

const emit = defineEmits(['closeModal']);

function closeModal() {
  if (!props.staticBackdrop) {
    emit('closeModal');
  }
}
</script>

<style scoped></style>
