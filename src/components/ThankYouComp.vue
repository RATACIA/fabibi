<template>
  <div class="ma-2">
    <div>
      <span
        ><v-icon class="mx-0 mb-1">mdi-ticket-confirmation</v-icon>Thank you,
        {{ props.firstName }} {{ props.lastName }}, for your message!</span
      >
      <br />

      <span
        >We have received your message and we aim to reply to your messaged
        within 24 hours.</span
      ><br />
      <span>Our working hours are: Mon - Sun: 11am - 7pm</span>
      <p class="pl-4">
        For any urgent queries, please contact us via phone number:070000000
      </p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

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
