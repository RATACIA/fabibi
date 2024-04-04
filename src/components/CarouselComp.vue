<template>
  <div style="margin-right: -6px">
    <v-carousel
      cycle
      class="mx-0"
      height="50vh"
      hide-delimiters
      show-arrows="hover"
      width="100%"
      interval="4000"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slides = ref([
  {
    src: "https://www.roffon.ro/api_seb/media/04E5F2C1-A9E6-4424-82F5-F5C634030EB4.jpg",
  },
  {
    src: "https://www.roffon.ro/api_seb/media/26AE74BA-313C-4BF1-A1A2-6AFD008B9DB8.jpg",
  },
  {
    src: "https://www.roffon.ro/api_seb/media/IMG_1410.JPG",
  },
  {
    src: "https://www.roffon.ro/api_seb/media/IMG_1432.JPG",
  },

  {
    src: "https://www.roffon.ro/api_seb/media/IMG_1480.jpeg",
  },
  {
    src: "https://www.roffon.ro/api_seb/media/IMG_9946.JPG",
  },
  {
    src: "https://www.roffon.ro/api_seb/media/IMG_9971.JPG",
  },
]);
</script>

<style>
v-carousel {
  margin-right: -6px;
}
</style>
