import { createRouter, createWebHistory } from "vue-router";
import AuthorizationView from "@/views/AuthorizationView.vue";
import { useUserStore } from "@/stores/UserStore";
import { getCookie } from "@/composables/services/cookie.service";
import { IS_USER_LOG_IN } from "@/models/constants";

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
router.beforeEach((to, from, next) => {
  const isUserLogIn = getCookie(IS_USER_LOG_IN);
  if (!isUserLogIn) {
    if (to.path === "/") next();
    else next("/");
  } else {
    if (to.path !== "/") next();
    else next("/home");
  }
});

export default router;
