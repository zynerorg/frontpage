<template>
  <v-container>
    <v-timeline side="end">
      <v-timeline-item
        v-for="item in getItems()"
        :key="item.id"
        :dot-color="item.color"
        size="small"
      >
        <v-alert :color="item.color" :icon="item.icon" :value="true">
          <v-alert-title>
            <v-chip label size="x-small" variant="tonal">
              {{ date.format(item.date, "fullDateWithWeekday") }}
            </v-chip>
          </v-alert-title>
          {{ item.text }}
        </v-alert>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script setup lang="ts">
import { mdiDomain, mdiFileSign, mdiPhone } from "@mdi/js";
import { useI18n } from "vue-i18n";
import { useDate } from "vuetify";

const date = useDate();
const { t } = useI18n();

const items = [
  {
    date: new Date("2025-02-08T17:55"),
    icon: mdiDomain,
    color: "green",
    text: t("timeline.event1"),
  },
  {
    date: new Date("2025-02-17"),
    icon: mdiFileSign,
    color: "indigo",
    text: t("timeline.event2"),
  },
  {
    date: new Date("2025-03-18"),
    icon: mdiFileSign,
    color: "green",
    text: t("timeline.event3"),
  },
  {
    date: new Date("2025-07-01"),
    icon: mdiPhone,
    color: "blue",
    text: t("timeline.event4"),
  },
];

function getItems() {
  return items.toSorted((a, b) => b.date - a.date);
}
</script>
