import { IS_USER_LOG_IN } from "@/models/constants";
import router from "@/router";
import { useUserStore } from "@/stores/UserStore";
import { removeCookie } from "../services/cookie.service";
import { destroyToken } from "../services/jwt.service";

export default function logout() {
  const userStore = useUserStore();
  destroyToken();
  userStore.user = undefined;
  removeCookie(IS_USER_LOG_IN);
  router.push("/");
}
