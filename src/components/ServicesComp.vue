<!-- <template>
  <div>
    <v-row>
      <v-col>
        <v-card variant="flat" class="my-3">
          <v-card-title class="pb-8 text-center mt-3" style="font-size: 30px">
            Our Services
            <v-card-title class="text-center"
              >(All services are home based)</v-card-title
            >
          </v-card-title>
        </v-card>
        <v-card
          v-for="(service, index) in services"
          :key="index"
          class="service-card"
          width="100%"
          variant="flat"
        >
          <v-card @click="toggleCard(index)" variant="flat">
            <div class="service-content">
              <v-card-title class="service-title">{{ service }}</v-card-title>
              <div class="icon-column">
                <v-icon
                  :icon="
                    expanded === index ? 'mdi-chevron-up' : 'mdi-chevron-down'
                  "
                ></v-icon>
              </div>
            </div>
            <v-card-text v-show="expanded === index">{{
              serviceText[index]
            }}</v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template> -->
<template>
  <v-row
    class="d-flex flex-column-reverse flex-md-row"
    align="center"
    justify="center"
  >
    <v-col cols="12" md="6" class="align-self-center">
      <v-img
        class="mt-3 mx-2"
        aspect-ratio="1/1"
        cover
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-img>
    </v-col>

    <v-col cols="12" md="6">
      <v-card variant="flat" class="pr-2 my-3">
        <v-card-title class="text-center py-4" style="font-size: 30px">
          Booking an appointment.
        </v-card-title>
        <div class="text-justify px-4 mt-6">
          <p style="line-height: 1.8">
            Services below are offered as a mobile treatment, meaning the
            therapist will come to the comfort of your home! To book one of the
            services below, please contact Fabio directly. You can reach us on
            +34747434979, email us at info@fabrehab.net or get in touch through
            our socials!
          </p>
        </div>
      </v-card>
    </v-col>
  </v-row>
  <v-card class="mt-3">
    <v-card-text class="text-center my-3" style="font-size: 3em"
      >Our Services</v-card-text
    >
    <v-card-subtitle class="text-center my-3"
      >(All services are home based)</v-card-subtitle
    >

    <v-card-text
      class="text-center my-3"
      style="font-size: 1.5em; line-height: 1.5"
      >If you have any questions or enqueries, please don’t hesitate to get in
      touch!</v-card-text
    >
    <v-expansion-panels multiple>
      <v-expansion-panel
        v-for="(service, index) in services"
        :key="index"
        :text="serviceText[index]"
        :title="service"
      ></v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const services = ref([
  "Massage Therapy",
  "Injury Assessment and Rehabilitation",
  "Cupping Therapy",
  "Reflexology",
]);

const serviceText = ref([
  `These can consist of Deep Tissue, Sports Massage or Relaxing massage. A session lasts approximately 45 minutes`,
  "If you have pains, discomfort or an injury, we can assess and rehabilitate these! A session lasts approximately 45 minutes",
  "Cupping therapy is a traditional alternative therapy that involves placing specially designed cups on the skin to create a vacuum, which suctions the skin and underlying tissues. This suction creates a negative pressure that is believed to stimulate blood flow, loosen fascial adhesions, and promote healing. The cups are typically made of glass, silicone, or plastic and can be either stationary or moved along the skin. Cupping therapy is often used to relieve muscle tension, promote relaxation, and address a variety of conditions such as pain, inflammation, and stress. A session lasts approximately 30 minutes",
  "Reflexology is a complementary therapy that involves applying pressure to specific points on the feet, hands, or ears to promote relaxation, reduce stress, and support overall well-being. These points are believed to correspond to specific organs, glands, or body systems, and applying pressure to them is thought to stimulate natural healing responses in the body. Reflexology is often used for relaxation, stress relief, and to address a variety of conditions such as pain, tension, and digestive issues. A session lasts approximately 45 minutes",
]);

const expanded = ref(null);

const toggleCard = (index) => {
  expanded.value = expanded.value === index ? null : index;
};
</script>
<style>
.v-card {
  width: 100%;
}

.service-card {
  position: relative;
}

.service-content {
  display: flex;
  align-items: center;
}

.service-title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.icon-column {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
