import { createRouter, createWebHistory } from "vue-router";
import AuthorizationView from "@/views/AuthorizationView.vue";
import { useUserStore } from "@/stores/UserStore";

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
      path: "/new-room",
      name: "new-room",
      component: () => import("../views/NewRoomView.vue"),
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
