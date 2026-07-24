<script setup lang="ts">
import Palette from "./Palette.vue";

const accent = {
  50: "--color-accent-50",
  100: "--color-accent-100",
  200: "--color-accent-200",
  300: "--color-accent-300",
  400: "--color-accent-400",
  500: "--color-accent-500",
  600: "--color-accent-600",
  700: "--color-accent-700",
  800: "--color-accent-800",
  900: "--color-accent-900",
  950: "--color-accent-950",
};
</script>

<template>
  <Stories title="Palette" :component="Palette">
    <Story title="Accent">
      <Palette title="Accent" :palette="accent" :primary="600" />
    </Story>
  </Stories>
</template>
