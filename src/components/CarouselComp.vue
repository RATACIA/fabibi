<template>
  <div style="margin-right: -6px">
    <v-carousel
      cycle
      class="mx-0"
      height="500"
      hide-delimiters
      show-arrows="hover"
      width="100%"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

const colors = ref([
  "indigo",
  "warning",
  "pink darken-2",
  "red lighten-1",
  "deep-purple accent-4",
]);
const slides = ref(["First", "Second", "Third", "Fourth", "Fifth"]);
</script>

<style>
v-carousel {
  margin-right: -6px;
}
</style>
