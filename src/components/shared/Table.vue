<template>
  <template v-if="props.tableConfig">
    <template v-if="props.search || props.dateFilter || props.showPaginate">
      <div class="top-body">
        <template v-if="props.showPaginate">
          <select @change="handleSelect($event)">
            <template v-for="pages in pageSizeOptions" :key="pages.value">
              <option :value="pages.value" :selected="pages.selected">{{ pages.title }}</option>
            </template>
          </select>
        </template>

        <template v-if="props.dateFilter">
          <div>
            <div class="row align-items-center g-1">
              <div class="col-auto">
                <label class="form-label">Select Dates</label>
              </div>
              <div class="col-auto">
                <div class="range-dropdown flatpickr-input" id="reportrange" readonly="readonly">
                  <span @click.prevent="handleDropdown()">{{ tableState.selectedDate ? tableState.selectedDate : 'Select' }}</span>
                  <div id="rangeButtons" :class="{ 'range-option': tableState.dateDropdownOpen }">
                    <button @click.prevent="handleDateFilter('today')" :class="{ active: tableState.selectedValue == 'today' }">Today</button>
                    <button @click.prevent="handleDateFilter('yesterday')" :class="{ active: tableState.selectedValue == 'yesterday' }">Yesterday</button>
                    <button @click.prevent="handleDateFilter('7_days')" :class="{ active: tableState.selectedValue == '7_days' }">Last 7 Days</button>
                    <button @click.prevent="handleDateFilter('30_days')" :class="{ active: tableState.selectedValue == '30_days' }">Last 30 Days</button>
                    <button @click.prevent="handleDateFilter('this_month')" :class="{ active: tableState.selectedValue == 'this_month' }">This Month</button>
                    <button @click.prevent="handleDateFilter('last_month')" :class="{ active: tableState.selectedValue == 'last_month' }">Last Month</button>
                    <button @click.prevent="handleDateFilter('custom')" :class="{ active: tableState.selectedValue == 'custom' }">Custom Date Range</button>
                  </div>
                  <template v-if="tableState.selectedValue && tableState.selectedValue === 'custom'">
                    <Flatpickr v-model="tableState.date" :config="tableState.config" @on-change="handleDate" />
                  </template>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-if="props.search">
          <div id="basic-1_filter" class="dataTables_filter">
            <label
              >Search:
              <input type="text" name="searchTerm" v-model="tableState.searchText" @keyup="searchTerm(tableState.searchText)" :placeholder="props.searchPlaceholder" />
            </label>
            <div class="dt-buttons btn-group flex-wrap" v-if="props.downloadReports">
              <button class="btn buttons-copy buttons-html5 btn-outline-primary" type="button"><span>Copy</span></button>
              <button class="btn buttons-csv buttons-html5 btn-outline-primary" type="button"><span>CSV</span></button>
              <button class="btn buttons-excel buttons-html5 btn-outline-primary" type="button"><span>Excel</span></button>
              <button class="btn buttons-pdf buttons-html5 btn-outline-primary" type="button"><span>PDF</span></button>
              <button class="btn buttons-print btn-outline-primary" type="button"><span>Print</span></button>
            </div>
          </div>
        </template>
      </div>
    </template>
    <table class="table" :class="props.tableClass">
      <thead>
        <tr>
          <th class="datatable-checkbox" v-if="props.hasCheckbox" :class="{ 'selected-checkbox': tableState.selected.length && tableState.selected.length != props.tableConfig.data.length }">
            <input
              type="checkbox"
              class="cb-select-checkbox"
              :checked="(props.tableConfig && props.tableConfig.data.length && tableState.selected && tableState.selected.length == props.tableConfig.data.length) || false"
              @change="checkUncheckAll($event, props)"
            />
          </th>

          <th v-if="props.rowDetails"></th>

          <template v-for="column in props.tableConfig.columns" :key="column.field_value">
            <template v-if="!column.hide_column">
              <template v-if="column.sort">
                <th
                  :class="
                    tableState.sortableKey == (column.sortable_key ? column.sortable_key : column.field_value) && tableState.filter['sort'] == 'asc'
                      ? 'asc'
                      : tableState.sortableKey == (column.sortable_key ? column.sortable_key : column.field_value) && tableState.filter['sort'] == 'desc'
                        ? 'desc'
                        : ''
                  "
                  @click="onSort(String(column.sortable_key ? column.sortable_key : column.field_value), props)"
                >
                  {{ column.title }}
                  <span class="cb-accending-decending"></span>
                </th>
              </template>
              <th v-else>{{ column.title }}</th>
            </template>
          </template>

          <th v-if="props.tableConfig.row_action">{{ 'Actions' }}</th>
        </tr>
      </thead>

      <template v-if="tableState.tableRecords && tableState.tableRecords.length">
        <tbody>
          <template v-for="(details, index) in tableState.tableRecords" :key="index">
            <tr :class="{ selected: tableState.selected && tableState.selected.length && tableState.selected.includes(Number(details.id)) }">
              <td class="datatable-checkbox" v-if="props.hasCheckbox">
                <input type="checkbox" :data-id="details.id" :value="details?.id" :checked="tableState.selected.includes(Number(details.id))" @change="onItemChecked($event)" />
              </td>

              <td
                v-if="props.rowDetails"
                :style="{
                  background: `url(${getImage(tableState.selectedOpenRows.includes(Number(details.id)) ? 'details_close' : 'details_open') + '.png'}) no-repeat center center`,
                  cursor: 'pointer',
                }"
                @click="openRowDetails(Number(details.id))"
              ></td>

              <template v-for="column in props.tableConfig.columns" :key="column.field_value">
                <template v-if="!column.hide_column">
                  <template v-if="column.text">
                    <td>{{ columnValue(details, column.field_value) }} {{ column.text }}</td>
                  </template>
                  <template v-else-if="column.type == 'price'">
                    <td :class="column.class ? column.class : ''">
                      <template v-if="column.decimal_number"> ${{ columnValue(details, column.field_value, true) }} </template>
                      <template v-else> ${{ columnValue(details, column.field_value) }} </template>
                    </td>
                  </template>
                  <template v-else>
                    <td v-html="columnValue(details, column.field_value)"></td>
                  </template>
                </template>
              </template>

              <template v-if="props.tableConfig.row_action">
                <td>
                  <div class="product-action common-align gap-2 justify-content-start">
                    <template v-for="(row, i) in props.tableConfig.row_action" :key="i">
                      <template v-if="row.type == 'button'">
                        <button :class="row.class">{{ row.label }}</button>
                      </template>
                      <template v-else-if="row.label == 'Create'">
                        <button class="plus-btn">+</button>
                      </template>
                      <template v-else-if="row.label == 'Edit' || row.label == 'Delete'">
                        <router-link class="square-white" :to="row.path || ''" @click="handleAction(row, details)">
                          <SvgIcon :icon="row.icon || ''" />
                        </router-link>
                      </template>
                      <template v-else-if="row.label == 'View'">
                        <router-link class="square-white" :to="row.path || ''" @click="handleAction(row, details)">
                          <i class="fa-solid fa-eye"></i>
                        </router-link>
                      </template>
                      <template v-else-if="row.label == 'Refresh'">
                        <a class="square-white" href="javascript:void(0)" v-tooltip title="Change Status">
                          <i :class="`fa-solid fa-${row.icon}`"></i>
                        </a>
                      </template>
                      <template v-else-if="row.label == 'Message'">
                        <a class="square-white btn btn-primary" href="javascript:void(0)" v-tooltip title="Message">
                          <i class="fa-solid fa-envelope"></i>
                        </a>
                      </template>
                      <template v-else-if="row.label == 'Approve'">
                        <a class="square-white btn btn-success" href="javascript:void(0)" v-tooltip title="Approve">
                          <i class="fa-solid fa-thumbs-up"></i>
                        </a>
                      </template>
                      <template v-else-if="row.label == 'Reject'">
                        <a class="square-white btn btn-danger" href="javascript:void(0)" v-tooltip title="Reject">
                          <i class="fa-solid fa-circle-xmark"></i>
                        </a>
                      </template>
                    </template>
                  </div>
                </td>
              </template>
            </tr>

            <template v-if="props.rowDetails && tableState.selectedOpenRows.includes(Number(details.id))">
              <tr data-dt-row="8">
                <td colspan="8">
                  <table :style="{ 'padding-left': '50px' }">
                    <tbody>
                      <tr v-for="column in props.tableConfig.columns">
                        <td>{{ column.title }}</td>
                        <td v-html="columnValue(details, column.field_value)"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </template>
          </template>
        </tbody>
      </template>

      <template v-else-if="!tableState.tableRecords.length">
        <tbody>
          <tr :data-dt-row="getColSpan(props)">
            <td :colspan="getColSpan(props)" class="empty-data">No data found</td>
          </tr>
        </tbody>
      </template>

      <slot name="tableFooter"></slot>
    </table>

    <template v-if="props.tableConfig.data.length && props.pagination">
      <Pagination
        :total="props.tableConfig.data.length"
        :paginate="tableState.paginate"
        :paginateDetails="props.paginateDetails"
        :selectedRows="props.selectedRows"
        :selectedItems="tableState.selected.length"
        @setPage="setPage($event)"
      />
    </template>
  </template>
</template>

<script setup lang="ts">
import { watch, defineAsyncComponent } from 'vue';

import Swal from 'sweetalert2';

import type { TableData, TableProps, TableRows } from '@/types/common';
import { baseUtils } from '@/utils';
import { tableUtils } from '@/utils/tableUtils';

const Pagination = defineAsyncComponent(() => import('@/components/shared/Pagination.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));

const { columnValue, getImage } = baseUtils();
const {
  tableState,
  pageSizeOptions,
  handlePaginationSize,
  setPage,
  searchTerm,
  handleSelect,
  checkUncheckAll,
  onItemChecked,
  onSort,
  handleDateFilter,
  handleDate,
  openRowDetails,
  getColSpan,
  handleDropdown,
  applyFilters,
} = tableUtils();

const props = withDefaults(defineProps<TableProps>(), {
  pageSize: 4,
  paginateDetails: false,
  showPaginate: false,
  search: true,
  pagination: true,
  selectedRows: false,
  rowDetails: false,
  dateFilter: false,
  downloadReports: false,
  searchPlaceholder: '',
});

let emits = defineEmits(['action']);

watch(
  () => props.pageSize,
  newPageSize => {
    if (newPageSize) {
      tableState.filter['pageSize'] = newPageSize;

      handlePaginationSize();
    }
  },
  { immediate: true, deep: true },
);

watch(
  () => props.tableConfig,
  newConfig => {
    if (newConfig && newConfig.data) {
      applyFilters(props);
    }
  },
  { immediate: true, deep: true },
);

watch(
  () => tableState.pageNo,
  newValue => {
    if (newValue) {
      applyFilters(props);
    }
  },
  { immediate: true, deep: true },
);

function handleAction(value: TableRows, details: TableData) {
  if (value.action_to_perform == 'delete') {
    if (!value.modal) {
      emits('action', { action_to_perform: value.action_to_perform, data: details });
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: value.model_text ? value.model_text : 'Do you really want to delete the product?',
        imageUrl: getImage('gif/trash.gif'),
        confirmButtonText: 'Yes, delete it!',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        cancelButtonColor: '#FC4438',
      }).then(result => {
        if (result.isConfirmed) {
          emits('action', { action_to_perform: value.action_to_perform, data: details });
        }
      });
    }
    if (tableState.selected.includes(Number(details.id))) {
      tableState.selected = tableState.selected.filter(id => id !== Number(details.id));
    }
  }
  if (value.action_to_perform == 'view') {
    emits('action', { action_to_perform: value.action_to_perform, data: details });
  }
}

watch(
  () => [tableState.filter['search'], tableState.filter['sort'], tableState.filter['date'], tableState.filter['page'], tableState.filter['pageSize']],
  () => {
    applyFilters(props);
  },
  { deep: true },
);
</script>

<style scoped></style>
