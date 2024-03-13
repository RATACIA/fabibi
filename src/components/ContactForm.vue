<template>
  <h1>Contact us</h1>
  <v-row>
    <v-col cols="12">
      <v-row class="ma-3">
        <v-card variant="flat">
          <v-card-title>Telephone</v-card-title>
          <p>
            You can reach us by phone between 8am - 4pm (Mon - Fri). Our number
            is: +34747434979
          </p>
        </v-card>
      </v-row>
      <v-row class="ma-3"
        ><v-card variant="flat">
          <v-card-title>Email</v-card-title>
          <p>
            For general enquiries by email, please get in touch with us at:
            example@email.com. Got a question about a specific case? Use the
            contact form below so we can answer your query asap.
          </p>
        </v-card></v-row
      >
    </v-col>
  </v-row>
  <v-card class="mx-auto mt-3 bg-grey-darken-1" title="Contact Form">
    <v-container>
      <v-text-field
        v-model="firstName"
        color="primary"
        label="First name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        color="primary"
        label="Last name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="message"
        color="primary"
        label="Message"
        placeholder="Enter your message"
        variant="underlined"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success">
        Send message

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  <h1>Do you prefer a callback?</h1>
  <p>
    No worries, please leave your name, number and best time to call back below
    and we will reach out to you.
  </p>
</template>
<script setup>
import { ref } from "vue";

const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const terms = ref(false);
const message = ref("");
</script>
