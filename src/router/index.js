import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue";
import ContactView from "../views/ContactView.vue";
import BlogView from "../views/BlogView.vue";
import ThankYouComp from "@/components/ThankYouComp.vue";
import GoogleReview from "@/components/GoogleReview.vue";
import HealthAndSafety from "@/views/HealthAndSafety.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/form-submitted-success",
      name: "form-submitted-success",
      component: ThankYouComp,
      props: (route) => ({
        firstName: route.query.firstName,
        lastName: route.query.lastName,
      }),
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/reviews",
      name: "reviews",
      component: GoogleReview,
    },
    {
      path: "/health-and-safety",
      name: "health-and-safety",
      component: HealthAndSafety,
    },
  ],
});

export default router;
