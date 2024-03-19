<template>
  <div class="container">
    <div>
      <v-card-title
        >Thank you, {{ props.firstName }} {{ props.lastName }}, for your
        message!</v-card-title
      >

      <v-card-subtitle
        >We have received your message and we aim to reply to your messaged
        within 24 hours.</v-card-subtitle
      >
      <v-card-text>Our working hours are: Mon - Sun: 11am - 7pm</v-card-text>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps(["firstName", "lastName"]);
</script>
<style scoped>
.container {
  display: flex;
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
</style>
