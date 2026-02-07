<template>
  <div class="bottom-info" v-if="props.paginate">
    <div class="d-flex cb-info">
      <template v-if="props.paginateDetails">
        <p>
          Showing
          {{ props.paginate.total_items > 0 ? props.paginate.start_index + 1 : 0 }}-
          {{ props.paginate.total_items > 0 ? props.paginate.end_index + 1 : 0 }}
          of
          {{ props.paginate.total_items > 0 ? props.paginate.total_items : 0 }}
          entries
        </p>
      </template>

      <template v-if="props.selectedItems && props.selectedRows">
        <span class="select-info">
          <span class="select-item"> {{ props.selectedItems }} rows selected </span>
        </span>
      </template>
    </div>
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: props.paginate.current_page === 1 }">
        <a class="page-link" href="javascript:void(0)" @click="pageSet(1)"> « </a>
      </li>

      <li class="page-item" :class="{ disabled: props.paginate.current_page === 1 }">
        <a class="page-link" href="javascript:void(0)" @click="pageSet(props.paginate.current_page - 1)"> ‹ </a>
      </li>

      <template v-for="(page, index) in props.paginate.pages" :key="index">
        <li class="page-item" :class="{ active: props.paginate.current_page == page }">
          <a class="page-link" href="javascript:void(0)" @click="pageSet(page)">{{ page }}</a>
        </li>
      </template>

      <li
        class="page-item"
        :class="{
          disabled: props.paginate.current_page == props.paginate.total_pages,
        }"
      >
        <a class="page-link" href="javascript:void(0)" @click="pageSet(props.paginate.current_page + 1)"> › </a>
      </li>

      <li
        class="page-item"
        :class="{
          disabled: props.paginate.current_page == props.paginate.total_pages,
        }"
      >
        <a class="page-link" href="javascript:void(0)" @click="pageSet(props.paginate.end_page)"> » </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { PaginateProps } from '@/types/common';

const props = defineProps<PaginateProps>();

const emit = defineEmits(['setPage']);

// Set Page
function pageSet(page: number) {
  emit('setPage', page);
}
</script>

<style scoped></style>
