import { createRouter, createWebHistory } from "vue-router";
import AuthorizationView from "@/views/AuthorizationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Authorization",
      component: AuthorizationView,
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
  ],
});

export default router;
