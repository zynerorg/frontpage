<template>
  <v-container>
    <v-responsive class="text-center mx-auto" max-width="600">
      <p v-if="caption" class="mt-8 text-overline">{{ caption }}</p>

      <p v-if="title" class="font-weight-bold text-h4">{{ title }}</p>
      <p
        v-if="subtitle"
        class="mt-2 text-subtitle-1 text-medium-emphasis hidden-sm-and-down"
      >
        {{ subtitle }}
      </p>
    </v-responsive>
  </v-container>
</template>

<script setup>
defineProps({
  caption: String,
  title: String,
  subtitle: String,
});
</script>
