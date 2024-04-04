<template>
  <v-card
    class="ml-0 mb-6 d-flex flex-column"
    style="margin-right: 4px; height: 50vh"
    color="white"
    variant="flat"
  >
    <v-card-title class="text-center mt-5">Fabrehab</v-card-title>
    <v-img
      style="object-fit: contain; width: 100%; max-width: 700px"
      class="mx-auto mb-4"
      width="50%"
      aspect-ratio="16/9"
      cover
      src="https://static.vecteezy.com/system/resources/previews/006/723/796/non_2x/lotus-human-wellness-logo-free-vector.jpg"
    ></v-img>
  </v-card>
  <tab-comp style="margin-right: 4px" />
  <div style="margin-right: 6px">
    <CarouselComp />
  </div>
  <google-review />
  <FooterComp />
</template>

<script setup>
import CarouselComp from "@/components/CarouselComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import TabComp from "@/components/TabComp.vue";
import GoogleReview from "@/components/GoogleReview.vue";
</script>

<style scoped></style>
