<script setup lang="ts">
import classes from "./Palette.module.css";

interface PaletteProps {
  title: string;
  palette: Record<number, string>;
  primary?: number;
}

defineProps<PaletteProps>();
</script>

<template>
  <article :class="classes.container">
    <h1 :class="classes.title">{{ title }}</h1>
    <ul
      :class="classes.colors"
      :style="{
        'grid-template-columns': `repeat(${Object.entries(palette).length}, 1fr)`,
      }"
    >
      <li
        v-for="(color, number) in palette"
        :class="classes.swatch"
        :key="number"
      >
        <h3 v-if="parseInt(number) === primary">Primary</h3>
        <h2>{{ number }}</h2>
        <div :style="{ backgroundColor: `var(${color})` }"></div>
      </li>
    </ul>
  </article>
</template>
