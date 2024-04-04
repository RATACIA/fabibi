<template>
  <v-card color="basil" variant="flat">
    <v-card-title class="text-center justify-center py-6">
      <h2 class="font-weight-bold text-h3 text-basil">SERVICES</h2>
    </v-card-title>

    <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item" :value="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item v-for="item in items" :key="item" :value="item">
        <v-card color="basil" flat>
          <p class="text-center pa-4" style="line-height: 1.8">
            {{ getText(item) }}
          </p>
          <p class="text-center pa-4">{{ getTime(item) }}</p>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
const tab = ref("Appetizers");
const items = ref([
  "Massage Therapy",
  "Injury Assessment and Rehabilitation",
  "Cupping Therapy",
  "Reflexology",
]);
const text = ref([
  "These can consist of Deep Tissue, Sports Massage or Relaxing massage.",
  "If you have pains, discomfort or an injury, we can assess and rehabilitate these!",
  "Cupping therapy is a traditional alternative therapy that involves placing specially designed cups on the skin to create a vacuum, which suctions the skin and underlying tissues. This suction creates a negative pressure that is believed to stimulate blood flow, loosen fascial adhesions, and promote healing. The cups are typically made of glass, silicone, or plastic and can be either stationary or moved along the skin. Cupping therapy is often used to relieve muscle tension, promote relaxation, and address a variety of conditions such as pain, inflammation, and stress.",
  "Reflexology is a complementary therapy that involves applying pressure to specific points on the feet, hands, or ears to promote relaxation, reduce stress, and support overall well-being. These points are believed to correspond to specific organs, glands, or body systems, and applying pressure to them is thought to stimulate natural healing responses in the body. Reflexology is often used for relaxation, stress relief, and to address a variety of conditions such as pain, tension, and digestive issues.",
]);

const time = ref(["45 minutes", "45 minutes", "30 minutes", "30 minutes"]);

const getText = (item) => {
  const index = items.value.indexOf(item);
  return index !== -1 ? text.value[index] : "";
};

const getTime = (item) => {
  const index = items.value.indexOf(item);
  return index !== -1 ? time.value[index] : "";
};
</script>

<style>
/* Helper classes .bg-basil {
  background-color: #fffbe6 !important;
}
.text-basil {
  color: #356859 !important;
} */
</style>
