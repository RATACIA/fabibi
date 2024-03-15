<template>
  <div>
    <v-row
      class="d-flex flex-column-reverse flex-md-row"
      align="center"
      justify="center"
    >
      <v-col cols="12" md="6">
        <v-img
          aspect-ratio="1/1"
          cover
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
      </v-col>

      <v-col cols="12" md="6">
        <v-card variant="flat" class="px-3 py-5">
          <v-card-title class="text-center pb-4 pt-3" style="font-size: 30px">
            About
          </v-card-title>
          <div class="text-justify">
            <p style="line-height: 1.8">
              Hello there! My name is Fabio, and I am a Sports Therapist with a
              BSc (Hons) degree. Originally from Marbella, Spain, I've spent the
              past 7 years studying and working in London. During this time, I
              have gained extensive experience working in various sports clubs
              and private clinics throughout the city. I am fluent in Spanish
              and English, and have a decent command of French and Arabic. As a
              passionate and dedicated sports therapist, I am committed to
              helping my clients achieve their goals and reach their full
              potential.
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!-- Divider -->
    <v-divider class="my-5 mx-3"></v-divider>
    <!-- Skills and qualifications section -->
    <v-row>
      <v-col>
        <v-card variant="flat" class="my-3">
          <v-card-title class="pb-8" style="font-size: 30px">
            Skills and Qualifications
          </v-card-title>
          <v-list class="text-center">
            <v-list-item
              >Injury Assessment and Rehabilitation / Injury Prevention
              (Degree)</v-list-item
            >
            <v-list-item>Cupping Therapy (Certified)</v-list-item>
            <v-list-item>Reflexology (Certified) </v-list-item>
            <v-list-item
              >Massage Therapy: Sports / Deep tissue / Relaxing
              (Degree)</v-list-item
            >
            <v-list-item>Kinesiology Tape (Degree)</v-list-item>
            <v-list-item>Lymphatic Drainage (Certified) </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.text-justify {
  text-align: justify;
}
</style>
