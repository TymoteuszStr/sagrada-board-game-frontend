import { createRouter, createWebHistory } from "vue-router";
import AuthorizationView from "@/views/AuthorizationView.vue";
import { useUserStore } from "@/stores/UserStore";

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
  const { isUserLogIn } = useUserStore();
  if (!isUserLogIn) {
    if (to.path === "/") next();
    else next("/");
  } else {
    if (to.path !== "/") next();
    else next("/home");
  }
});

export default router;
