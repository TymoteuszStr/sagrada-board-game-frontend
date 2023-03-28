import { createRouter, createWebHistory } from "vue-router";
import AuthorizationView from "@/views/AuthorizationView.vue";
import { getCookie } from "@/composables/services/cookie.service";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "authorization",
      component: AuthorizationView,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/room/:roomId",
      name: "room",
      props: true,
      component: () => import("../views/RoomView.vue"),
    },
    {
      path: "/game/:roomId",
      name: "game",
      component: () => import("../views/GameView.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  const isUserLogIn = getCookie("isUserLogIn");
  if (!isUserLogIn) {
    if (to.path === "/") next();
    else next("/");
  } else {
    if (to.path !== "/") next();
    else next("/home");
  }
});

export default router;
