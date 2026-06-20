<template>
  <div class="ml-4">
    <v-select
      v-model="locale"
      density="compact"
      hide-details
      :items="availableLocales"
      variant="outlined"
    />
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale, availableLocales } = useI18n();

const STORAGE_KEY = "zyner.org";

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved && availableLocales.includes(saved)) {
    locale.value = saved;
    return;
  }

  const browserLang = navigator.language.split("-")[0];

  if (availableLocales.includes(browserLang)) {
    locale.value = browserLang;
  }
});

watch(locale, (newLocale) => {
  localStorage.setItem(STORAGE_KEY, newLocale);
});
</script>
