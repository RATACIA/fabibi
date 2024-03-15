<template>
  <div>
    <v-divider></v-divider>
    <v-footer
      class="bg-grey-lighten-5 text-center d-flex flex-column"
      style="width: 100%"
    >
      <v-row class="d-flex" cols="12">
        <v-col sm="12" xs="12" md="4" lg="4">
          <h4>Hours</h4>
          <span
            >Home Service<br />
            Mon - Sun: 11am - 7pm
          </span>
        </v-col>
        <v-col sm="12" xs="12" md="4" lg="4">
          <h4>Contact</h4>
          <span
            >Phone: <br />+34747434979

            <br />
            Email:<br /><a href="mailto:example@email.com">example@gmail.com</a>
          </span>
        </v-col>
        <v-col sm="12" xs="12" md="4" lg="4">
          <h4>More Info</h4>
          <router-link to="/health-and-safety">Health and Safety</router-link>
        </v-col>
      </v-row>
      <div>
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          :icon="icon"
          class="ma-4"
          variant="text"
          @click="goToLink(index)"
        ></v-btn>
      </div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>FabRehab</strong></div>
    </v-footer>
  </div>
</template>
<script setup>
import { ref } from "vue";

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
</style>
