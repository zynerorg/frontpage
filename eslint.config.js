import eslintConfigPrettierFlat from "eslint-config-prettier/flat";
import vuetify from "eslint-config-vuetify";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  ...(await vuetify()),

  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  {
    rules: {
      "vuetify/no-deprecated-components": "error",
      "vuetify/no-deprecated-props": "error",
    },
  },

  eslintConfigPrettierFlat,
];
