<template>
  <v-container class="pa-md-0 bg-surface" fluid>
    <v-row align="center" no-gutters>
      <v-col cols="12" md="6">
        <v-responsive class="mx-auto" max-width="500">
          <v-chip
            color="primary"
            :prepend-icon="mdiDomain"
            size="small"
            text="Ideell förening"
          >
            <template #append></template>
          </v-chip>
          <p class="text-headline-large text-md-h3 font-weight-bold mb-6">
            Digital labbmiljö till ett fast medlemspris
          </p>

          <p class="text-body-large text-medium-emphasis mb-10">
            Vi drivs utan vinstintresse och levererar trygga och hållbara
            lösningar för ideella föreningar och privatpersoner.
          </p>

          <div class="d-flex ga-4 align-center justify-start flex-wrap">
            <v-btn
              class="text-none"
              color="primary"
              href="https://go.zyner.org/blimedlem"
              :prepend-icon="mdiAccountPlus"
              target="_blank"
              text="Bli medlem!"
              variant="flat"
            >
            </v-btn>

            <v-btn
              append-icon="fa:fab fa-discord"
              class="text-none"
              href="https://go.zyner.org/discord"
              text="Gå med i vår server"
              variant="tonal"
            >
              <template #prepend></template>
            </v-btn>
          </div>
        </v-responsive>
      </v-col>
      <v-col class="hidden-sm-and-down pa-0" md="6" rols="12">
        <v-responsive>
          <v-img
            cover
            height="640"
            src="https://s3.zyner.org/frontpage/assets/hero.png"
          />
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { mdiChevronRight, mdiDomain, mdiAccountPlus } from "@mdi/js";
</script>
