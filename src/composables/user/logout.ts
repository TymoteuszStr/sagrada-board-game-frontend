import router from "@/router";
import { useUserStore } from "@/stores/UserStore";
import { destroyToken } from "../services/jwt.service";

export default function logout() {
  const userStore = useUserStore();
  destroyToken();
  userStore.user = undefined;
  userStore.isUserLogIn = false;
  router.push("/");
}
