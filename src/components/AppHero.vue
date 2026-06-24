<template>
  <v-container class="pa-md-0 bg-surface" fluid>
    <v-row align="center" no-gutters>
      <v-col cols="12" md="6">
        <v-responsive class="mx-auto" max-width="500">
          <v-chip
            color="primary"
            :prepend-icon="mdiDomain"
            size="small"
            :text="$t('hero.badge')"
          >
            <template #append></template>
          </v-chip>

          <p class="text-headline-large text-md-h3 font-weight-bold mb-6">
            {{ $t('hero.title') }}
          </p>

          <p class="text-body-large text-medium-emphasis mb-10">
            {{ $t('hero.subtitle') }}
          </p>

          <div class="d-flex ga-4 align-center justify-start flex-wrap">
            <v-btn
              class="text-none"
              color="primary"
              href="https://go.zyner.org/blimedlem"
              :prepend-icon="mdiAccountPlus"
              target="_blank"
              :text="$t('hero.btn_join')"
              variant="flat"
            >
            </v-btn>

            <v-btn
              append-icon="fa:fab fa-discord"
              class="text-none"
              href="https://go.zyner.org/discord"
              :text="$t('hero.btn_discord')"
              variant="tonal"
            >
              <template #prepend></template>
            </v-btn>
          </div>
        </v-responsive>
      </v-col>

      <v-col class="hidden-sm-and-down pa-0" md="6" rols="12">
        <v-responsive>
          <v-img
            cover
            height="640"
            src="https://s3.zyner.org/frontpage/assets/hero.png"
          />
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>