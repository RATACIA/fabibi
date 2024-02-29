<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="hidden-sm-and-down pl-5"
          >FabRehab</v-toolbar-title
        >

        <v-spacer></v-spacer>
        <v-btn text>Home</v-btn>
        <v-btn text>Services</v-btn>
        <v-btn text>Contact</v-btn>

        <v-spacer class="hidden-md-and-down"></v-spacer>
        <v-icon class="ma-1 hidden-sm-and-down">mdi-instagram</v-icon>
        <v-icon class="ma-1">mdi-facebook</v-icon>
      </v-app-bar>

      <!-- Side Drawer (visible on small screens) -->
      <v-navigation-drawer app v-model="drawer" class="mt-0" width="200">
        <v-list>
          <v-list-item @click="$router.push('/')">
            <v-list-item-icon>
              <v-icon class="mr-2">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Home</v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="$router.push('/about')">
            <v-list-item-icon>
              <v-icon class="mr-2">mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-content>About</v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="$router.push('/contact-us')">
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="ml-2">Contact</v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="$router.push('/services')">
            <v-list-item-icon>
              <v-icon>mdi-human-greeting</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="ml-2">Services</v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="$router.push('/blog')">
            <v-list-item-icon>
              <v-icon>mdi-book-open-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="ml-2">Blog</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Main Content -->
      <v-main class="ma-2">
        <!-- Your page content goes here -->
        <!-- <v-container style="margin: auto; padding-left: 1px"> -->
        <v-row no-gutters>
          <v-col class="mr-3">
            <router-view></router-view>
          </v-col>
        </v-row>
        <!-- Content goes here -->

        <!-- </v-container> -->
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>
