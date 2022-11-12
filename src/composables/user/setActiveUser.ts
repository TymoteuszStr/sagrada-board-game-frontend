import getUserFromToken from "@/composables/api/user/getUserFromToken";
import router from "@/router";
import setAuthenticatedUser from "../store/setAuthenticatedUser";
import logout from "@/composables/user/logout";
import { getToken } from "../services/jwt.service";

export default async function setActiveUser(): Promise<void> {
  const token = getToken();
  try {
    if (!token) throw null;
    const user = await getUserFromToken(token);
    if (!user) throw user;
    setAuthenticatedUser(user);
    router.push("/home");
  } catch (err) {
    logout();
  }
}
