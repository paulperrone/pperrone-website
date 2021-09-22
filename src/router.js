import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "./components/AboutPage.vue";
import BlogPage from "./components/BlogPage.vue";
import CareerPage from "./components/CareerPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/about",
      component: AboutPage,
    },
    {
      path: "/career",
      component: CareerPage,
    },
    {
      path: "/",
      component: BlogPage,
      alias: "/blog",
    },
  ],
});

export default router;
