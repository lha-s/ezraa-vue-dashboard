<template>
  <div class="card" :class="props.cardClass">
    <template v-if="props.cardType === 'simple'">
      <template v-if="props.headerTitle">
        <div class="card-header" :class="[{ 'card-no-border': !props.border, 'pb-2': props.padding }, props.header]">
          <template v-if="(props.dropdownType && props.options) || props.rightSideDetails">
            <div class="header-top">
              <template v-if="props.headerTitle">
                <h5 :class="headerClass">
                  {{ props.headerTitle }}
                  <slot name="header"></slot>
                </h5>
              </template>

              <slot name="header2"></slot>

              <div class="card-header-right-icon">
                <slot name="header3"></slot>
                <template v-if="props.dropdownType && props.options">
                  <CardDropdown :dropdownType="props.dropdownType" :options="props.options" :dropdownClass="props.dropdownClass" />
                </template>
              </div>
            </div>
            <slot name="headerTitleValue"></slot>
          </template>
          <template v-else>
            <h5 :class="props.headerClass">
              <slot name="icon"></slot>
              {{ props.headerTitle }}
              <slot name="header4"></slot>
            </h5>
            <slot name="header5"></slot>
          </template>
        </div>
      </template>
      <template v-else>
        <slot name="image"></slot>
      </template>
    </template>

    <template v-else-if="props.cardType == 'classic'">
      <div class="card-header card-no-border">
        <template v-if="props.headerTitle">
          <div class="common-space">
            <div class="left-header-content">
              <h5>{{ props.headerTitle }}</h5>

              <template v-if="props.sortDescription">
                <p class="m-0 c-o-light">{{ props.sortDescription }}</p>
              </template>
            </div>

            <template v-if="props.buttonText">
              <div class="card-header-right-btn">
                <router-link class="c-o-light" :to="props.path || ''">{{ props.buttonText }}</router-link>
              </div>
            </template>
          </div>
        </template>
      </div>
    </template>

    <template v-else-if="props.cardType == 'dataTable'">
      <template v-if="props.headerTitle">
        <div class="card-header" :class="[{ 'card-no-border': !props.border, 'pb-2': props.padding }]">
          <div class="header-top">
            <h5 :class="props.headerClass">
              {{ props.headerTitle }}
              <slot name="header6"></slot>
            </h5>
            <slot name="header7"></slot>
          </div>
        </div>
      </template>
    </template>

    <div class="card-body" :class="props.cardBodyClass">
      <slot></slot>
    </div>

    <slot name="details"></slot>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

import type { CardProps } from '@/types/common';

const CardDropdown = defineAsyncComponent(() => import('@/components/shared/card/CardDropdown.vue'));

const props = withDefaults(defineProps<CardProps>(), {
  cardType: 'simple',
  border: false,
  padding: true,
  rightSideDetails: false,
});
</script>

<style scoped></style>
