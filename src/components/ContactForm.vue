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

      <v-textarea
        v-model="message"
        color="primary"
        label="Message"
        :rules="messageRules"
        placeholder="Enter your message"
        variant="outlined"
      ></v-textarea>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
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
  <v-card class="mx-auto mt-3 bg-grey-darken-1" title="Callback Form">
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
        v-model="phoneNumber"
        color="primary"
        label="phone number"
        variant="underlined"
      ></v-text-field>

      <v-select
        label="Select"
        :items="['1', '2', '3', '4', '5', '6']"
      ></v-select>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="sendEmail">
        Request Callback
        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-snackbar v-model="snackbar" :timeout="timeout" :color="snackbarColor">
    <div v-for="(error, index) in text" :key="index">
      {{ error }}
    </div>
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script setup>
import { ref, onMounted } from "vue";

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
const recaptchaSiteKey = "6LfcxJcpAAAAAAZLG429BrdEXMe0MyDBjMfhi6Wt";
const hours = ref(1, 3, 5);
const phoneNumber = ref(null);

const messageRules = ref([
  (value) => {
    if (value?.length > 30) return true;

    return "Message must be at least 30 characters long";
  },
]);

const sendEmail = async () => {
  const token = await loadRecaptcha();
  console.log("Token:", token);
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
        "Content-Type": "application/x-www-form-urlencoded",
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
        snackbar.value = true;
        snackbarColor.value = "green";
        text.value = Object.values(responseData).join("-");
        console.log("Email sent successfully!");
      } else if (responseData.status === -1) {
        snackbar.value = true;
        snackbarColor.value = "red";

        console.log(
          Object.entries(responseData).filter(([key, value]) => {
            return key !== "message" || key !== "status";
          })
        );
        text.value = Object.entries(responseData)
          .filter(([key, value]) => {
            if (key === "message") return false;
            if (key === "status") return false;
            return true;
          })
          .map(([key, value]) => value);

        console.error("Request failed with status:", responseData.status);
      }
    } else {
      console.error("Request failed with status:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

let recaptchaInstance = null;

const loadRecaptcha = () => {
  return new Promise((resolve, reject) => {
    if (typeof grecaptcha === "undefined") {
      reject(new Error("reCAPTCHA has not been loaded."));
    }

    grecaptcha.ready(() => {
      grecaptcha
        .execute(recaptchaSiteKey, { action: "submit" })
        .then((token) => {
          recaptchaResponse.value = token;
          resolve(token);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

const onRecaptchaLoaded = () => {
  console.log("reCAPTCHA loaded");
};
onMounted(() => {
  onRecaptchaLoaded();
});

// const onRecaptchaLoaded = () => {
//   console.log("reCAPTCHA loaded");
// };

// const submitForm = async () => {
//   try {
//     await loadRecaptcha();
//     console.log("Token:", recaptchaInstance);
//     // Send the token to your backend for verification
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// onMounted(() => {
//   loadRecaptcha()
//     .then(() => {
//       console.log("reCAPTCHA loaded");
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// });
// const handleRecaptcha = (response) => {
//   recaptchaResponse.value = response;
// };
// const onRecaptchaSuccess = () => {
//   // Logic to execute when reCAPTCHA is successfully verified
//   // You can submit the form here or perform any other action
//   document.getElementById("contact-form").submit();
// };
</script>
