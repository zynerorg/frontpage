import { createI18n } from "vue-i18n";

import en from "../languages/en.json";
import sv from "../languages/sv.json";

export default createI18n({
  legacy: false,
  locale: "sv",
  fallbackLocale: "en",
  messages: {
    en: {
      ...en,
    },
    sv: {
      ...sv,
    },
  },
});
