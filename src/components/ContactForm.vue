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
      <div
        class="g-recaptcha"
        :data-sitekey="recaptchaSiteKey"
        :data-callback="onRecaptchaSuccess"
      ></div>
      <input name="recaptcha_response" :value="recaptchaResponse" />
      <v-btn color="success" @click="sendEmail">
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
  <v-snackbar v-model="snackbar" :timeout="timeout" :color="snackbarColor">
    {{ text }}
    <template v-slot:actions>
      <v-btn color="blue" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script setup>
import { ref } from "vue";

const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const terms = ref(false);
const message = ref("");
const snackbar = ref(false);
const timeout = 2000;
const snackbarColor = ref("green-accent-1");
const text = ref("");
const recaptchaResponse = ref(null);
const recaptchaSiteKey = "6Lfo45cpAAAAAOgk_rk-l7QGd84DvtXh_vBY_0Sc";

const handleRecaptcha = (response) => {
  recaptchaResponse.value = response;
};
const onRecaptchaSuccess = () => {
  // Logic to execute when reCAPTCHA is successfully verified
  // You can submit the form here or perform any other action
  document.getElementById("contact-form").submit();
};

const sendEmail = async () => {
  try {
    const URL = "https://roffon.ro/api_seb/contact_form.php";

    const data = {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      message: message.value,
      recaptcha_response: recaptchaResponse.value,
    };

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();

      if (responseData.message === "Email sent successfully") {
        firstName.value = null;
        lastName.value = null;
        email.value = null;
        terms.value = false;
        message.value = "";
        console.log("Email sent successfully!");
      }
    } else {
      console.error("Request failed with status:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>
