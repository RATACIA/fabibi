<template>
  <v-container fluid class="pa-0">
    <v-card class="ml-1" style="margin-right: 4px" color="orange">
      <v-card-title class="text-center">Fabrehab</v-card-title>
      <v-img
        class="mx-auto mb-4"
        :width="200"
        aspect-ratio="16/9"
        cover
        src="https://static.vecteezy.com/system/resources/previews/006/723/796/non_2x/lotus-human-wellness-logo-free-vector.jpg"
      ></v-img>
    </v-card>
    <tab-comp style="margin-right: 4px" />
    <div style="margin-right: 8px">
      <CarouselComp />
    </div>
    <google-review />
    <FooterComp style="margin-left: 8px" />
  </v-container>
</template>

<script setup>
import CarouselComp from "@/components/CarouselComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import TabComp from "@/components/TabComp.vue";
import GoogleReview from "@/components/GoogleReview.vue";
</script>

<style scoped></style>
