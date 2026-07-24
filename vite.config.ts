import path from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import Unfonts from "unplugin-fonts/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, "./src/locales/**")],
    }),
    Unfonts({
      fontsource: {
        families: ["DM Sans", "Doto", "JetBrains Mono"],
      },
    }),
  ],
});
