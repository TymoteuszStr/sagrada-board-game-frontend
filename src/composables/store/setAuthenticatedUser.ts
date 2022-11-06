import type IUser from "@/models/userModel";
import { useUserStore } from "@/stores/UserStore";

export default function setAuthenticatedUser(user: IUser) {
  const userStore = useUserStore();
  userStore.user = user;
  userStore.isUserLogged = true;
}
