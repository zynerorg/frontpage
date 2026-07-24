<script setup lang="ts">
import Hero from "./Hero.vue";
</script>

<template>
  <Stories title="Hero" :component="Hero">
    <Story title="Primary">
      <Hero />
    </Story>
  </Stories>
</template>
