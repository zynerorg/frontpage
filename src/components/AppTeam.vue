<template>
  <v-container>
    <v-row class="justify-center">
      <v-col v-for="(member, index) in members" :key="index" cols="auto">
        <v-card width="310px">
          <v-img
            aspect-ratio="1"
            class="bg-surface-variant"
            cover
            :src="getAvatarSrc(member.avatar)"
          />

          <v-card-title>
            {{ member.name }}
          </v-card-title>
          <v-card-subtitle>
            {{ getMemberTeamRoleNames(member.id)[0] }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              v-for="(link, li) in member.links.slice(0, 3)"
              :key="li"
              color="text"
              :href="link.link"
              :icon="getLinkIcon(link.type)"
              size="x-small"
              target="_blank"
              variant="flat"
            />
            <v-spacer />
            <v-chip :prepend-icon="mdiAt" size="small" variant="flat">
              {{ member.id }}
            </v-chip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { Role, User } from "@/config";
import { mdiAt, mdiEmail, mdiKey, mdiLink, mdiLinkedin } from "@mdi/js";

const linkIcons: Record<string, string> = {
  email: mdiEmail,
  linkedin: mdiLinkedin,
  pgp: mdiKey,
};

const props = defineProps<{
  roles: Role[];
  members: User[];
}>();

function getAvatarSrc(avatarLink: string | null): string {
  if (!avatarLink || avatarLink == "") {
    return `https://s3.zyner.org/frontpage/assets/noavatar.png`;
  }
  return avatarLink;
}

function getMemberTeamRoleNames(memberId: string): string[] {
  const roleIds = props.members
    .find((member) => member.id === memberId)
    // eslint-disable-next-line antfu/consistent-chaining
    .teams.flatMap((team) => team.roles);

  const roleNames: string[] = [];
  for (const roleId of roleIds) {
    roleNames.push(props.roles.find((role) => role.id == roleId).name);
  }

  return roleNames;
}

function getLinkIcon(linkType: string): string {
  return linkIcons[linkType] || mdiLink;
}
</script>
