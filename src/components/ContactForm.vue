<template>
  <h1 class="mt-6 ml-6">
    Contact us <v-icon size="x-large" icon="mdi-account"></v-icon>
  </h1>

  <v-row>
    <v-col cols="12">
      <v-row class="ma-3">
        <v-card variant="flat" append-icon="mdi-cellphone-iphone">
          <v-card-title
            ><v-icon icon="mdi-cellphone" size="large"></v-icon>Telephone
          </v-card-title>

          <p class="pa-2">
            You can reach us by phone between 8am - 4pm (Mon - Fri). Our number
            is: +34747434979
          </p>
          <v-card-title class="py-3"
            ><v-icon icon="mdi-whatsapp" size="large"></v-icon>Whatsapp
          </v-card-title>
          <p class="pa-2">
            Scan the QR code below or click the link below to send us a message
            on Whatsapp
          </p>
          <div class="d-flex ml-4">
            <img src="../images/qrwapp.jpg" width="100" height="100" />
            <v-card-text class="d-flex align-center justify-center">
              or click here</v-card-text
            >
            <v-btn
              variant="flat"
              class="align-self-center wapp-btn"
              @click="visitWhatsapp"
            >
              Contact us <v-icon>mdi-whatsapp</v-icon></v-btn
            >
            <v-spacer></v-spacer>
          </div>
        </v-card>
      </v-row>
      <v-row class="ma-3 pt-3 pb-3"
        ><v-card variant="flat">
          <v-card-title
            ><v-icon icon="mdi-email-outline" size="large"></v-icon>
            Email</v-card-title
          >
          <p class="pa-2">
            For general enquiries by email, please get in touch with us at:
            example@email.com. Got a question about a specific case? Use the
            contact form below so we can answer your query asap.
          </p>
        </v-card></v-row
      >
    </v-col>
  </v-row>
  <v-card class="mx-auto my-3" title="Contact Form" variant="outlined">
    <v-container>
      <v-text-field
        v-model="firstName"
        color="primary"
        label="First name*"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        color="primary"
        label="Last name*"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Email*"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="phoneNumber"
        color="primary"
        label="Phone Number"
        variant="outlined"
        hint="optional"
        persistent-hint
      ></v-text-field>

      <v-textarea
        class="mt-4"
        v-model="message"
        color="primary"
        label="Message (required)"
        :rules="messageRules"
        placeholder="Enter your message"
        variant="outlined"
      ></v-textarea>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions class="d-flex justify-center">
      <v-btn class="custom-btn" @click="handleClick">
        Send message

        <v-icon icon="mdi-email" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-snackbar v-model="snackbar" :timeout="timeout" :color="snackbarColor">
    <div v-if="text === 'Email sent successfully'">
      {{ text }}
    </div>
    <div v-else class="error-container">
      <div v-for="(error, index) in text" :key="index" class="d-flex">
        {{ error }}
      </div>
      <div class="d-flex flex-column">
        <v-btn
          class="mt-2"
          color="white"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </div>
    </div>
  </v-snackbar>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
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
const phoneNumber = ref(null);

const visitWhatsapp = () => {
  const targetLink =
    "https://api.whatsapp.com/message/DZHVGDJVM32QF1?autoload=1&app_absent=0";
  window.open(targetLink, "_blank");
};

const messageRules = ref([
  (value) => {
    if (value?.length > 30) return true;

    return "Message must be at least 30 characters long";
  },
]);

const sendEmail = async (router) => {
  const token = await loadRecaptcha();
  console.log("Token:", token);
  try {
    const URL = "https://roffon.ro/api_seb/contact_form.php";

    const data = {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      phone_number: phoneNumber.value,
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
        // firstName.value = null;
        // lastName.value = null;
        // email.value = null;
        // terms.value = false;
        // message.value = "";
        // snackbar.value = true;
        // snackbarColor.value = "green";
        // text.value = responseData.message;
        router.push({
          path: "/form-submitted-success",
          query: {
            firstName: firstName.value,
            lastName: lastName.value,
          },
        });
        console.log("Email sent successfully!");
      } else if (responseData.status === -1) {
        snackbar.value = true;
        snackbarColor.value = "red-lighten-1";
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

const router = useRouter();

const handleClick = () => {
  sendEmail(router);
};

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
<style scoped>
.d-flex.flex-column {
  flex-direction: column;
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.custom-btn:hover {
  background-color: #82b1ff;
}

.wapp-btn {
  background-color: #25d366;
}
</style>
