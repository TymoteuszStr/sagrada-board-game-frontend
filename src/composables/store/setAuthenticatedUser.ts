import { IS_USER_LOG_IN } from "@/models/constants";
import type IUser from "@/models/interfaces/userModel";
import { useUserStore } from "@/stores/UserStore";
import { setCookie } from "../services/cookie.service";

export default function setAuthenticatedUser(user: IUser) {
  const userStore = useUserStore();
  userStore.user = user;
  setCookie(IS_USER_LOG_IN, true);
}
