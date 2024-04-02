<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="pl-3" style="margin-right: -50px"
          >FabRehab</v-toolbar-title
        >

        <v-spacer class="hidden-sm-and-down"></v-spacer>

        <!-- Centered buttons -->
        <div class="d-flex flex-start flex-grow-1" style="margin-right: -50px">
          <v-btn class="hidden-sm-and-down" text @click="$router.push('/')"
            >Home</v-btn
          >
          <v-btn
            class="hidden-sm-and-down"
            text
            @click="$router.push('/services')"
            >Services</v-btn
          >
          <v-btn
            class="hidden-sm-and-down"
            text
            @click="$router.push('/contact-us')"
            >Contact</v-btn
          >
        </div>

        <v-spacer class="hidden-xs-and-down"></v-spacer>

        <v-icon
          v-for="(icon, index) in icons"
          :key="index"
          :icon="icon"
          variant="text"
          @click="handleIconClick(index)"
          class="mx-1"
        ></v-icon>
        <div class="mr-1"></div>
      </v-app-bar>

      <!-- Side Drawer (visible on small screens) -->
      <v-navigation-drawer
        app
        v-model="drawer"
        class="mt-0"
        width="200"
        absolute
      >
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
      <v-main class="mx-1">
        <!-- Your page content goes here -->
        <!-- <v-container style="margin: auto; padding-left: 1px"> -->
        <v-row no-gutters>
          <v-col>
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
const icons = ref(["mdi-instagram", "mdi-facebook"]);

const links = ref([
  "https://www.instagram.com/fabrehab_/",
  "https://www.facebook.com/profile.php?id=100090998603012&locale=en_GB",
]);

const handleIconClick = (index) => {
  const clickedLink = links.value[index];
  window.open(clickedLink, "_blank");
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.grecaptcha-badge {
  visibility: hidden !important;
}
</style>
