<template>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :href="item.href"
        link
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.to"
      />
    </v-list>
  </v-navigation-drawer>

  <v-app-bar absolute class="px-md-4">
    <v-app-bar-nav-icon
      v-if="$vuetify.display.smAndDown"
      @click="drawer = !drawer"
    />

    <v-img
      alt="Zyner logo"
      class="me-sm-8"
      max-width="40"
      rounded="lg"
      src="https://s3.zyner.org/brand/logo.svg"
    />

    <template v-if="$vuetify.display.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        class="me-2 text-none"
        :href="item.href"
        :prepend-icon="item.icon"
        :text="item.title"
        :to="item.to"
      />
    </template>

    <v-spacer />

    <v-btn
      :icon="theme.current.value.dark ? mdiWeatherSunny : mdiWeatherNight"
      @click="theme.change(theme.current.value.dark ? 'light' : 'dark')"
    />

    <LanguageSelector />
  </v-app-bar>
</template>

<script setup lang="ts">
import {
  mdiFileDocument,
  mdiFormatListText,
  mdiHome,
  mdiWeatherNight,
  mdiWeatherSunny,
} from "@mdi/js";
import { computed, shallowRef } from "vue";
import { useI18n } from "vue-i18n";
import { useTheme } from "vuetify";

const { t } = useI18n();

const theme = useTheme();
const drawer = shallowRef(false);

const items = computed(() => [
  { to: "/", title: t("nav.home"), icon: mdiHome },
  { to: "/timeline", title: t("nav.timeline"), icon: mdiFormatListText },
  {
    href: "https://go.zyner.org/stadgar",
    title: t("nav.about"),
    icon: mdiFileDocument,
  },
  // { to: "/about", title: "Om oss", icon: mdiInformation },
]);
</script>
