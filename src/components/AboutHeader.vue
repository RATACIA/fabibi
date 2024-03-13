<template>
  <div style="min-height: 50px"></div>
  <v-spacer></v-spacer>
  <v-row class="d-flex">
    <v-col style="margin-left: 1px; display: flex; align-items: center">
      <v-card variant="flat" style="min-width: 400px">
        <v-card-title style="font-size: 45px" class="text-center pb-4 pt-3">
          about.
        </v-card-title>
        <v-card class="px-3">
          <p style="margin: 2px 0px; text-align: center; line-height: 1.8">
            Hello there! My name is Fabio, and I am a Sports Therapist with a
            BSc (Hons) degree. <br />Originally from Marbella, Spain, I've spent
            the past 7 years studying and working in London. During this time, I
            have gained extensive experience working in various sports clubs and
            private clinics throughout the city.<br />
            I am fluent in Spanish and English, and have a decent command of
            French and Arabic. As a passionate and dedicated sports therapist, I
            am committed to helping my clients achieve their goals and reach
            their full potential.
          </p>
        </v-card>
      </v-card>
    </v-col>
    <v-col style="display: flex; align-items: center">
      <v-img
        :min-width="400"
        aspect-ratio="1/1"
        cover
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-img>
    </v-col>
  </v-row>
  <v-divider class="my-5 ml-3"></v-divider>
  <v-row class="mt-12">
    <v-col style="text-align: center" class="px-0">
      <v-card variant="flat">
        <v-card-title style="font-size: 45px">
          Skills and Qualifications
        </v-card-title>
        <v-list>
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
</template>
