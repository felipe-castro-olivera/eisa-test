<template>
  <v-app>
    <the-navigation-drawer v-model="drawer" />
    <the-app-bar @click.stop="drawer = !drawer" />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
      <the-footer />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import TheAppBar from "@/components/TheAppBar.vue";
import TheNavigationDrawer from "@/components/TheNavigationDrawer.vue";
import TheFooter from "@/components/TheFooter.vue";

const drawer = ref(true);
</script>
