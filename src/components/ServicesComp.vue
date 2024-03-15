<template>
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

          <v-card
            class="d-flex align-center"
            v-for="(service, index) in services"
            :key="index"
          >
            <v-card-title @click="toggleCard(index)">
              {{ service }}
              <v-icon
                :icon="
                  expanded === index ? 'mdi-chevron-up' : 'mdi-chevron-down'
                "
              ></v-icon>
            </v-card-title>
            <v-expand-transition>
              <v-card-text v-show="expanded === index">{{
                serviceText[index]
              }}</v-card-text>
            </v-expand-transition>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
  "These can consist of Deep Tissue, Sports Massage or Relaxing massage. 45 minutes",
  "If you have pains, discomfort or an injury, we can assess and rehabilitate these! 45 minutes",
  "Cupping therapy is a traditional alternative therapy that involves placing specially designed cups on the skin to create a vacuum, which suctions the skin and underlying tissues. This suction creates a negative pressure that is believed to stimulate blood flow, loosen fascial adhesions, and promote healing. The cups are typically made of glass, silicone, or plastic and can be either stationary or moved along the skin. Cupping therapy is often used to relieve muscle tension, promote relaxation, and address a variety of conditions such as pain, inflammation, and stress. 30 minutes",
  "Reflexology is a complementary therapy that involves applying pressure to specific points on the feet, hands, or ears to promote relaxation, reduce stress, and support overall well-being. These points are believed to correspond to specific organs, glands, or body systems, and applying pressure to them is thought to stimulate natural healing responses in the body. Reflexology is often used for relaxation, stress relief, and to address a variety of conditions such as pain, tension, and digestive issues.45 minutes",
]);

const expanded = ref(null);

const toggleCard = (index) => {
  expanded.value = expanded.value === index ? null : index;
};
</script>
