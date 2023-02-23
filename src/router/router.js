import main from "../pages/main-page.vue";
import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/about-page.vue";

const routes = [
  {
    path: "/",
    component: main,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
