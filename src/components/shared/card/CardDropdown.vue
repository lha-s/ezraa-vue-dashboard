<template>
  <template v-if="props.dropdownType == 'simple'">
    <OnClickOutside @trigger="show = false">
      <div class="dropdown icon-dropdown">
        <button class="btn dropdown-toggle" type="button" @click="openDropdown()">
          <i class="icon-more-alt"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-end" :class="{ show: show }">
          <template v-for="(option, index) in props.options" :key="index">
            <a class="dropdown-item" href="javascript:void(0)" @click="selectItem(option.title)">{{ option.title }}</a>
          </template>
        </div>
      </div>
    </OnClickOutside>
  </template>

  <template v-if="props.dropdownType == 'classic'">
    <OnClickOutside @trigger="show = false">
      <div class="dropdown" :class="props.dropdownClass">
        <button class="btn dropdown-toggle" type="button" @click="openDropdown()">
          {{ selectedItem }}
        </button>
        <ul class="dropdown-menu" :class="{ show: show }">
          <template v-for="(option, index) in props.options" :key="index">
            <li @click="selectItem(option.title)">
              <a class="dropdown-item" href="javascript:void(0)">{{ option.title }}</a>
            </li>
          </template>
        </ul>
      </div>
    </OnClickOutside>
  </template>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import { OnClickOutside } from '@vueuse/components';

import type { CardToggleOptions } from '@/types/common';

const props = defineProps<{
  dropdownType: string;
  options: CardToggleOptions[];
  dropdownClass?: string | undefined;
}>();

let selectedItem = ref<string>('');
let show = ref<boolean>(false);

watch(
  () => props.options,
  newValue => {
    if (newValue) {
      selectedItem.value = newValue[0].title;
    }
  },
  { immediate: true },
);

function openDropdown() {
  show.value = !show.value;
}

function selectItem(value: string) {
  selectedItem.value = value;
  show.value = false;
}
</script>

<style scoped></style>
