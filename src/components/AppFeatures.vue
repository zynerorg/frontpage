<template>
  <v-container>
    <v-row justify="center">
      <v-col
        v-for="(item, i) in features"
        :key="i"
        class="text-center"
        cols="12"
        md="4"
      >
        <v-list-item variant="text">
          <v-list-item-title>
            <v-avatar class="mb-2 bg-primary" :icon="item.icon" />

            <p class="text-body-medium font-weight-bold text-truncate pb-1">
              {{ item.title }}
            </p>
          </v-list-item-title>

          <v-divider
            class="mx-auto mt-1 mb-4"
            inset
            length="24"
            opacity="1"
            thickness="4"
          ></v-divider>

          <v-list-item-subtitle>
            {{ item.subtitle }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {
  mdiConsole,
  mdiDomain,
  mdiFileCode,
  mdiHeartPulse,
  mdiLaptop,
  mdiServer,
} from "@mdi/js";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const features = computed(() => [
  {
    title: t("features.f1.title"),
    subtitle: t("features.f1.subtitle"),
    icon: mdiServer,
  },
  {
    title: t("features.f2.title"),
    subtitle: t("features.f2.subtitle"),
    icon: mdiDomain,
  },
  {
    title: t("features.f3.title"),
    subtitle: t("features.f3.subtitle"),
    icon: mdiFileCode,
  },
  {
    title: t("features.f4.title"),
    subtitle: t("features.f4.subtitle"),
    icon: mdiHeartPulse,
  },
  {
    title: t("features.f5.title"),
    subtitle: t("features.f5.subtitle"),
    icon: mdiLaptop,
  },
  {
    title: t("features.f6.title"),
    subtitle: t("features.f6.subtitle"),
    icon: mdiConsole,
  },
]);
</script>
