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
            :class="'mr-4 custom-btn ' + getHoverColor(icon)"
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
  "mdi-map-marker",
  "mdi-facebook",
  "mdi-instagram",
  "mdi-linkedin",
  "mdi-twitter",
]);

const links = ref([
  "https://www.google.com/maps/place/FabRehab+-+Mobile+Physiotherapist+Marbella/@36.4875537,-4.9579826,17z/data=!3m2!4b1!5s0xd7329c02b5004d3:0x25ad0f13907236ba!4m6!3m5!1s0x8f3a4654463c5b11:0xd2c963fde9021f03!8m2!3d36.4875494!4d-4.9554023!16s%2Fg%2F11kpl01w_d?entry=ttu",
  "https://www.facebook.com/profile.php?id=100090998603012&locale=en_GB",
  "https://www.instagram.com/fabrehab_/",
  "https://www.linkedin.com/in/fabio-mouawad-5b0269190/",
  "https://twitter.com/",
]);
const getHoverColor = (icon) => {
  switch (icon) {
    case "mdi-map-marker":
      return "hover-gradient-map-marker";
    case "mdi-facebook":
      return "hover-color-facebook";
    case "mdi-instagram":
      return "hover-color-instagram";
    case "mdi-linkedin":
      return "hover-color-linkedin";
    case "mdi-twitter":
      return "hover-color-twitter";
    default:
      return "hover-color-default";
  }
};

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

.hover-color-facebook:hover {
  background-color: #3b5998;
}

.hover-color-instagram:hover {
  background-color: #c32aa3;
}

.hover-color-linkedin:hover {
  background-color: #0077b5;
}

.hover-color-twitter:hover {
  background-color: #1da1f2;
}

.hover-gradient-map-marker:hover {
  /* background-image: linear-gradient(
    90deg,
    #4285f4 0%,
    #db4437 25%,
    #f4b400 50%,
    #0f9d58 90%
  ); */
  background-image: linear-gradient(
    30deg,
    #4285f4 0%,
    #4285f4 33%,

    #f4b400 33%,
    #f4b400 66%,
    #0f9d58 66%,
    #0f9d58 100%
  );
}
</style>
