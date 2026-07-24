import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unfonts from "unplugin-fonts/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unfonts({
      fontsource: {
        families: ["DM Sans", "Doto", "JetBrains Mono"],
      },
    }),
  ],
});
