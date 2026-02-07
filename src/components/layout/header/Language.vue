<template>
  <div class="translate_wrapper" :class="{ active: layoutState.isLanguage }">
    <div class="current_lang" v-if="selectedLanguage">
      <div class="lang">
        <i :class="`flag-icon flag-icon-${selectedLanguage.icon}`"></i>
        <span class="lang-txt">{{ selectedLanguage.code }}</span>
      </div>
    </div>
    <div class="more_lang" :class="{ active: layoutState.isLanguage }">
      <div class="lang" :class="{ selected: selectedLanguage && selectedLanguage.code === language.code }" v-for="(language, index) in languages" :key="index" @click="selectLanguage(language)">
        <i :class="`flag-icon flag-icon-${language.icon}`"></i>
        <span class="lang-txt"
          >{{ language.name }}
          <span v-if="language.country_code"> ({{ language.country_code }})</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';

import { language } from '@/core/data/header';
import { useLayout } from '@/stores/layout';
import type { Language } from '@/types/header';

const layoutStore = useLayout();
const { layoutState } = storeToRefs(layoutStore);
const i18n = useI18n();

let languages = ref(language);
let selectedLanguage = ref<Language>({
  id: 1,
  name: 'English',
  code: 'en',
  icon: 'us',
  country_code: 'US',
  active: true,
});

onMounted(() => {
  const savedLang = localStorage.getItem('selectedLang');

  if (savedLang) {
    const found = languages.value.find(lang => lang.name === savedLang);
    if (found) {
      selectLanguage(found);
      return;
    }
  }

  languages.value.filter(details => {
    if (details.active) {
      selectLanguage(details);
    }
  });
});

function selectLanguage(language: Language) {
  i18n.locale.value = language.name;
  selectedLanguage.value = language;
  localStorage.setItem('selectedLang', language.name);
}
</script>

<style scoped></style>
