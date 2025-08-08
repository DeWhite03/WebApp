<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <v-app>
    <v-navigation-drawer permanent expand-on-hover rail>
      <v-list>
        <v-list-item
          prepend-icon="mdi-account-circle"
          title="My Application"
          :subtitle="String(route.fullPath)"
        ></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item prepend-icon="mdi-home" link :to="{ name: 'Home' }">Home</v-list-item>
        <v-list-item prepend-icon="mdi-information" link :to="{ name: 'About' }">About</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="main">
      <h1>{{ route.name ?? 'My Application' }}</h1>
      <v-divider></v-divider>
      <v-btn
        @click="
          () => {
            console.log(route)
            console.log(route.fullPath)
            console.log(route.name)
          }
        "
        >Log Route</v-btn
      >
      <router-view />
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>

<style scoped>
.main {
  margin: 20px;
}
</style>
