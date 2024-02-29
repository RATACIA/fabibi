<template>
  <v-col>
    <v-row>
      <v-layout class="layout">
        <div v-if="isMobile">
          <v-app-bar>
            <template v-slot:prepend>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>
            <template v-slot:append>
              <v-btn icon="mdi-instagram"></v-btn>

              <v-btn icon="mdi-facebook"></v-btn>

              <v-btn icon="mdi-whatsapp"></v-btn>
            </template>
            <v-app-bar-title class="pl-5">FabRehab</v-app-bar-title>
          </v-app-bar>
        </div>

        <div v-else>
          <div class="container">
            <div class="child-avatar">
              <v-avatar color="orange" class="ma-1"
                ><v-icon>mdi-facebook</v-icon></v-avatar
              >
              <v-avatar color="orange" class="ma-1"
                ><v-icon>mdi-instagram</v-icon></v-avatar
              >
            </div>
            <div class="child-title">
              <h1>FabRehab</h1>
              <nav class="my-3">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/services">Services</RouterLink>
                <RouterLink to="/contact-us">Contact us</RouterLink>
                <RouterLink to="/blog">Blog</RouterLink>
              </nav>
            </div>
            <v-spacer></v-spacer>
            <div class="child-button">
              <v-btn color="orange-darken-1" class="ma-1">Contact us</v-btn>
            </div>
          </div>
          <v-divider class="mt-3"></v-divider>
        </div>
      </v-layout>
    </v-row>
  </v-col>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const screenWidth = ref(window.innerWidth);

const isMobile = ref(screenWidth.value < 768);

const handleResize = () => {
  screenWidth.value = window.innerWidth;
  isMobile.value = screenWidth.value < 768;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
<style>
.layout {
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box; /* Ensure padding and border don't increase the width */
}

.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end; /* Align items at the end of the flex container */
  box-sizing: border-box; /* Ensure padding and border don't increase the width */
}

.child-title h1 {
  display: flex;
  justify-content: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
