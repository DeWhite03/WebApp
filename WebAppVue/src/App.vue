<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { userStore } from '@/stores/userStore'
const route = useRoute()

const drawer = ref<null | boolean>(true)
</script>

<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-cog" :to="{ name: 'About' }"></v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :width="220">
      <!-- <v-list>
        <v-list-item
          prepend-icon="mdi-account-circle"
          title="My Application"
          :subtitle="String(route.fullPath)"
        >
        </v-list-item>
      </v-list> -->
      <!-- <v-divider></v-divider> -->
      <v-list>
        <!-- <v-list-item prepend-icon="mdi-home" link :to="{ name: 'Home' }">Home</v-list-item>
        <v-list-item prepend-icon="mdi-information" link :to="{ name: 'About' }">About</v-list-item> -->
        <v-list-item prepend-icon="mdi-home" :to="{ name: 'Home' }" title="Home"></v-list-item>
        <v-list-item
          prepend-icon="mdi-information"
          :to="{ name: 'About' }"
          title="About"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-clock"
          :to="{ name: 'TimeTracker' }"
          title="Time Tracker"
        ></v-list-item>

        <v-list-group value="Categories" v-if="userStore().isLogin">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-folder" title="Categories"></v-list-item>
          </template>
          <v-list-item
            v-for="item in $router.options.routes.filter(
              (route) => route.meta?.hideFromNav !== true,
            )"
            :key="item.name"
            :to="{ name: item.name }"
            :prepend-icon="typeof item.meta?.icon === 'string' ? item.meta.icon : 'mdi-circle'"
          >
            <v-list-item-title>{{ item.meta?.title || item.name }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
      <template #append>
        <v-divider></v-divider>
        <v-list>
          <v-list-item
            prepend-icon="mdi-plus"
            title="Add Category"
            :to="{ name: 'AddCategory' }"
            class="bottom"
          ></v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-main class="">
      <v-container>
        <v-row>
          <v-col cols="12" md="9">
            <h1 class="text-4xl">{{ route.name ?? 'My Application' }}</h1>
            <v-divider class="mb-4"></v-divider>
            <router-view />
          </v-col>
          <v-col cols="12" md="3">
            <div class="bg-blue-300">basadsd</div>
            <v-btn
              @click="
                () => {
                  console.log($router.options.routes.filter((route) => route.name))
                }
              "
            ></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>

<style scoped>
.main {
  margin-left: 20px;
  width: 100%;
}
</style>
