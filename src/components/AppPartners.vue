<template>
  <v-container>
    <v-row justify="center">
      <v-col v-for="(partner, i) in partners" :key="i" cols="12" md="auto">
        <v-card :href="partner.link" rounded="lg" target="_blank">
          <template v-if="partner.icon" #prepend>
            <v-avatar class="mr-2">
              <v-img :alt="`${partner.title} logo`" :src="partner.icon" />
            </v-avatar>
          </template>
          <template #title>
            <span class="text-body-1 font-weight-bold text-truncate">
              {{ partner.title }}
            </span>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { Partner } from "@/config";

defineProps<{
  partners: Partner[];
}>();
</script>
