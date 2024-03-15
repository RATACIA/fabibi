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
  <div class="text-subtitle-2 mb-2">Default</div>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="i in 3"
      :key="i"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      title="Item"
    ></v-expansion-panel>
  </v-expansion-panels>
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
  `These can consist of Deep Tissue, Sports Massage or Relaxing massage. 45 minutes`,
  "If you have pains, discomfort or an injury, we can assess and rehabilitate these! 45 minutes",
  "Cupping therapy is a traditional alternative therapy that involves placing specially designed cups on the skin to create a vacuum, which suctions the skin and underlying tissues. This suction creates a negative pressure that is believed to stimulate blood flow, loosen fascial adhesions, and promote healing. The cups are typically made of glass, silicone, or plastic and can be either stationary or moved along the skin. Cupping therapy is often used to relieve muscle tension, promote relaxation, and address a variety of conditions such as pain, inflammation, and stress. 30 minutes",
  "Reflexology is a complementary therapy that involves applying pressure to specific points on the feet, hands, or ears to promote relaxation, reduce stress, and support overall well-being. These points are believed to correspond to specific organs, glands, or body systems, and applying pressure to them is thought to stimulate natural healing responses in the body. Reflexology is often used for relaxation, stress relief, and to address a variety of conditions such as pain, tension, and digestive issues.45 minutes",
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
