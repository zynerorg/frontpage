import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|vue)"],
  addons: ["storybook-vue-addon"],
  framework: "@storybook/vue3-vite",
};
export default config;
