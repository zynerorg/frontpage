import tsParser from "@typescript-eslint/parser";
import eslintConfigPrettierFlat from "eslint-config-prettier/flat";
import vuetify from "eslint-config-vuetify";
import pluginPrettier from "eslint-plugin-prettier";
import pluginVuetify from "eslint-plugin-vuetify";

export default [
  ...(await vuetify()),

  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    languageOptions: {
      parser: tsParser,
    },
  },

  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
    },
  },

  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  {
    plugins: {
      vuetify: pluginVuetify,
    },
    rules: {
      "vuetify/no-deprecated-components": "error",
      "vuetify/no-deprecated-props": "error",
    },
  },

  eslintConfigPrettierFlat,
];
