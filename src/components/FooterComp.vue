<template>
  <div style="margin-right: -4px">
    <v-divider></v-divider>
    <v-footer class="bg-grey-darken-2 text-center">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <div class="py-4">
              <p class="mb-2">Hours</p>
              <p class="mb-0">Home Service</p>
              <p class="mb-0">Mon - Sun: 11am - 7pm</p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="py-4">
              <p class="mb-2">Contact</p>
              <p class="mb-0">Phone: +34747434979</p>
              <p class="mb-0">
                Email: <a href="mailto:example@email.com">example@gmail.com</a>
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="py-4">
              <p class="mb-2">More Info</p>
              <router-link to="/health-and-safety" class="text-decoration-none"
                >Health and Safety</router-link
              >
            </div>
          </v-col>
        </v-row>
        <div style="margin: 0 -32px">
          <GoogleMap
            :api-key="apiKey"
            style="width: 100%; height: 500px"
            :center="center"
            :zoom="15"
          >
            <Marker :options="{ position: center }" />
          </GoogleMap>
        </div>

        <div class="my-6">
          <v-btn
            v-for="(icon, index) in icons"
            :key="index"
            :icon="icon"
            class="mr-4 custom-btn"
            variant="text"
            @click="goToLink(index)"
          ></v-btn>
        </div>

        <v-divider></v-divider>

        <div class="my-4">
          <p class="mb-0">
            {{ new Date().getFullYear() }}© — <span>FabRehab</span>
          </p>
        </div>
      </v-container>
    </v-footer>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

const apiKey = "AIzaSyAiCB4Xzny_ebB3dEjNMcefvlB9d3PdjTg";
const center = { lat: 36.4875494, lng: -4.955402299999999 };
const icons = ref([
  "mdi-facebook",
  "mdi-instagram",
  "mdi-linkedin",
  "mdi-twitter",
]);

const links = ref([
  "https://www.facebook.com/profile.php?id=100090998603012&locale=en_GB",
  "https://www.instagram.com/fabrehab_/",
  "https://www.linkedin.com/in/fabio-mouawad-5b0269190/",
  "https://twitter.com/",
]);

const goToLink = (index) => {
  const clickedLink = links.value[index];
  window.open(clickedLink, "_blank");
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.v-footer {
  margin-left: -4px;
}

a {
  color: white;
}
a:hover {
  cursor: pointer;
  background-color: #82b1ff;
  padding: 4px 4px;
  border-radius: 15px;
}

.custom-btn:hover {
  background-color: #82b1ff;
}
</style>
