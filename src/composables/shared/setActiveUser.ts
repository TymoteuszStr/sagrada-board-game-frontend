import getUserFromToken from "@/composables/api/getUserFromToken";
import setAuthenticatedUser from "../store/setAuthenticatedUser";

export default async function setActiveUser(): Promise<void> {
  const user = await getUserFromToken();
  if (user === null) return;
  setAuthenticatedUser(user);
}
