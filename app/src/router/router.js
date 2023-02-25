import main from "../pages/main-page.vue";
import { createRouter, createWebHistory } from "vue-router";
import AuthorsPage from "@/pages/authors-page.vue";

const routes = [
  {
    path: "/",
    component: main,
  },
  {
    path: "/authors",
    component: AuthorsPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
