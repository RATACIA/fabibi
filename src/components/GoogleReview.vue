<!-- <template>
  <h1>hello world</h1>
  <v-card
    v-for="(review, index) in reviews"
    :key="index"
    class="my-3"
    color="grey-lighten-2"
  >
    <v-card-title>{{ review.authorName }}</v-card-title>
    <v-card variant="flat" color="grey-lighten-2">{{
      review.textReview
    }}</v-card>
  </v-card>
</template>

<script setup>
import { onMounted, ref } from "vue";

const reviews = ref([]);

const timestamp = ref(null);

const unixToDate = (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000;

  const date = new Date(milliseconds);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const hour = String(date.getHours()).padStart(2, "0");
  //   const minute = String(date.getMinutes()).padStart(2, "0");
  //   const second = String(date.getSeconds()).padStart(2, "0");

  return `${month} ${year}`;
};

const fetchReviews = async () => {
  const url =
    "https://local-business-data.p.rapidapi.com/business-reviews?business_id=ChIJEVs8RlRGOo8RAx8C6f1jydI&region=us&language=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "096339dfcdmshf459ee8181b2b9fp18d767jsn61250751abc6",
      "X-RapidAPI-Host": "local-business-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    reviews.value = result.data.map((review) => {
      return {
        textReview: review.review_text,
        authorName: review.author_name,
        timestamp: review.review_timestamp,
      };
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchReviews();
});
</script> -->
<!-- <template>
  <div>
    <v-container class="bg-surface-variant">
      <v-row no-gutters justify="center">
        <v-col>
          
            <div class="d-flex mt-4 ml-4">
            <v-img
              max-width="50"
              aspect-ratio="16/9"
              cover
              src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
            > </v-img>
            <h2 class="ma-2">Reviews</h2>
          </div>
        </v-col>
        <v-col
          v-for="review in reviews"
          :key="review.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="d-flex justify-center"
        >
          <v-card variant="outlined" class="ma-2">
            <v-avatar size="64">
              <v-img :src="review.profile_photo_url"></v-img>
            </v-avatar>

            <v-divider></v-divider>

            <v-card-text class="text-center">
              <p>{{ review.author_name }}</p>
              <p>Rating: {{ review.rating }}/5</p>
              <span>{{ review.relative_time_description }}</span>
              <p>{{ review.text }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template> -->
<template>
  <v-divider></v-divider>

  <div style="height: 5vh"></div>
  <div v-if="reviews.length">
    <div class="container-fluid d-flex justify-center pa-3">
      <div class="row">
        <div class="col text-center px-3">
          <v-card variant="flat" class="pr-2 ma-3">
            <v-card-title style="font-size: 1.5em"
              >What Our Clients Say</v-card-title
            >
            <div class="text-center">
              <p style="line-height: 1.8; color: #757575">
                We pride ourselves on providing an exceptional service to our
                clients, but you don’t just have to take our word for it.
                <br />Read what our clients have to say about working with us.
              </p>
            </div>
          </v-card>
        </div>
        <div class="col text-center px-3">
          <v-card variant="flat" class="pr-2 ma-3 d-flex justify-center">
            <v-img
              max-width="60"
              aspect-ratio="1/1"
              cover
              src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
            ></v-img>
            <p style="font-size: 18px" class="pa-3 align-self-center">
              Reviews
            </p>
          </v-card>
        </div>
      </div>
    </div>
    <div style="height: 5vh"></div>
    <v-divider class="my-2 mx-15"></v-divider>
    <v-carousel
      height="auto"
      show-arrows="hover"
      hide-delimiters
      class="px-3"
      cycle
    >
      <v-carousel-item v-for="review in reviews" :key="review.id" class="ma-3">
        <div>
          <div class="d-flex align-items-start px-10">
            <div class="d-flex text-center align-self-center pb-3 pl-9">
              <v-avatar size="64">
                <v-img :src="review.profile_photo_url"></v-img>
              </v-avatar>
              <p class="ml-3 align-self-center">{{ review.author_name }}</p>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex flex-column text-center align-self-center pr-9">
              <v-rating
                size="small"
                v-model="review.rating"
                active-color="orange-lighten-1"
                color="orange-lighten-1"
                density="compact"
              ></v-rating>

              <v-card-subtitle class="align-self-center px-1">
                {{ review.relative_time_description }}
              </v-card-subtitle>
            </div>
          </div>

          <v-card-text class="mx-13 font-weight-medium align-self-center">
            <p class="text-center">{{ review.text }}</p>
          </v-card-text>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

const reviews = ref([]);
const apiKey = "AIzaSyAiCB4Xzny_ebB3dEjNMcefvlB9d3PdjTg";
const placeId = "ChIJEVs8RlRGOo8RAx8C6f1jydI";

const fetchGoogleReviews = async () => {
  fetch("https://www.roffon.ro/api_seb/reviews.php")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      reviews.value = data.result.reviews;
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

const carouselItems = computed(() => {
  return reviews.value.map((review) => ({ id: review.id, review }));
});

onMounted(fetchGoogleReviews);
</script>

<style>
.mapdiv {
  margin-right: -8px;
}
</style>
