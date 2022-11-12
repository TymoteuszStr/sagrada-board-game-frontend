import type IUser from "@/models/interfaces/userModel";
import { useUserStore } from "@/stores/UserStore";

export default function setAuthenticatedUser(user: IUser) {
  const userStore = useUserStore();
  userStore.user = user;
  userStore.isUserLogIn = true;
}
