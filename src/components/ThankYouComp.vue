<template>
  <div class="ma-2">
    <v-card class="text-center my-3" variant="flat">
      <v-card-title style="font-size: 1.5em"
        ><v-icon class="mx-0 mb-1">mdi-ticket-confirmation</v-icon>Thank you,
        {{ props.firstName }} {{ props.lastName }}, for your
        message!</v-card-title
      >

      <v-card-subtitle style="font-size: 1.2em"
        >We have received your message and we aim to reply to your messaged
        within 24 hours.</v-card-subtitle
      >
      <v-card-text class="py-5"
        >Our working hours are: Mon - Sun: 11am - 7pm</v-card-text
      >
      <v-card-text class="pt-0">
        For any urgent queries, please contact us via phone number:070000000
      </v-card-text>
    </v-card>
  </div>
  <google-review />
  <FooterComp />
</template>
<script setup>
import { defineProps } from "vue";
import FooterComp from "@/components/FooterComp.vue";
import GoogleReview from "@/components/GoogleReview.vue";
const props = defineProps(["firstName", "lastName"]);
</script>
<style scoped>
/* .container {
  display: flex;
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100%;
} */
span {
  margin-left: 16px;
}
</style>
