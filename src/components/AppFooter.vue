<template>
  <v-footer absolute app>
    <v-row align="center" justify="space-between" no-gutters>
      <v-col
        class="d-flex justify-center justify-md-start align-center"
        cols="12"
        sm="6"
      >
        <p class="text-caption">
          © {{ new Date().getFullYear() }} Zyner. All rights reserved.
        </p>
      </v-col>
      <v-col class="d-flex justify-center justify-md-end" cols="12" sm="6">
        <v-btn
          v-for="(social, i) in socials"
          :key="i"
          color="text"
          :href="social.link"
          :icon="social.icon"
          size="x-small"
          variant="text"
        />
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
import {
  mdiDocker,
  mdiEmail,
  mdiGithub,
  mdiInstagram,
  mdiPhone,
} from "@mdi/js";

const socials = [
  { icon: mdiInstagram, link: "https://instagram.com/zynerofficial" },
  { icon: "fa:fab fa-discord", link: "https://go.zyner.org/discord" },
  { icon: mdiDocker, link: "https://hub.docker.com/u/zyner" },
  { icon: mdiGithub, link: "https://github.com/zynerorg" },
  { icon: mdiPhone, link: "tel:+46108086353" },
  { icon: mdiEmail, link: "mailto:support@zyner.org" },
];
</script>
