/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import router from "@/router";
import vuetify from "./vuetify";
import i18n from "./i18n";

export function registerPlugins(app) {
  app.use(vuetify).use(router).use(i18n);
}
