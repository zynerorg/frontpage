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
            <p class="text-body-2 font-weight-bold text-truncate pb-1">
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

<script setup>
import {
  mdiConsole,
  mdiDomain,
  mdiFileCode,
  mdiHeartPulse,
  mdiLaptop,
  mdiServer,
} from "@mdi/js";

const features = [
  {
    title: "Driftar egen miljö",
    subtitle:
      "Vi driver vår egen infrastruktur, men utan garanti – allt sker på best effort-basis.",
    icon: mdiServer,
  },
  {
    title: "Ideell förening",
    subtitle:
      "Vi är en ideell förening, driven av entusiaster och utan vinstintresse.",
    icon: mdiDomain,
  },
  {
    title: "Öppen källkod",
    subtitle: "Vi främjar öppen källkod och fri mjukvaruanvändning.",
    icon: mdiFileCode,
  },
  {
    title: "Systemövervakning",
    subtitle: "Vi övervakar våra system, men erbjuder inga driftsgarantier.",
    icon: mdiHeartPulse,
  },
  {
    title: "Förverkliga din IT-hobby",
    subtitle: "Få tillgång till resurser till låg kostnad.",
    icon: mdiLaptop,
  },
  {
    title: "Hantering via terminal",
    subtitle: "Vi hanterar vår miljö primärt via terminalen.",
    icon: mdiConsole,
  },
];
</script>
