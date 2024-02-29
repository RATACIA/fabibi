<template>
  <v-container fluid>
    <v-card class="ml-2" style="margin-right: -8px" color="orange">
      <v-card-title class="text-center">Fabrehab</v-card-title>
      <v-img
        class="mx-auto mb-4"
        :width="200"
        aspect-ratio="16/9"
        cover
        src="https://static.vecteezy.com/system/resources/previews/006/723/796/non_2x/lotus-human-wellness-logo-free-vector.jpg"
      ></v-img>
    </v-card>
    <tab-comp />
    <CarouselComp />
  </v-container>
</template>

<script setup>
import CarouselComp from "@/components/CarouselComp.vue";
import TabComp from "@/components/TabComp.vue";
</script>

<style scoped></style>
