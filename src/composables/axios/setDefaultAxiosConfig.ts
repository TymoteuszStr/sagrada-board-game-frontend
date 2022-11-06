import { getToken } from "../services/jwt.service";
import setAuthorizationHeader from "./setAuthorizationHeader";
import setBaseUrl from "./setBaseUrl";
import setContentType from "./setContentType";

export default function setDefaultAxiosConfig() {
  setBaseUrl();
  setContentType();
  const token = getToken();
  if (token) setAuthorizationHeader(token);
}
