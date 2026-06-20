<template>
  <v-system-bar class="justify-center">
    <strong>Zyner 2025</strong> — {{ $t('systembar.reconstruction') }}
    {{
      !$vuetify.display.mobile ? $t('systembar.not_opened') : null
    }}
  </v-system-bar>
</template>