import setAuthorizationHeader from "./setAuthorizationHeader";
import setBaseUrl from "./setBaseUrl";
import setContentType from "./setContentType";

export default function setDefaultAxiosConfig() {
  setBaseUrl();
  setContentType();
  setAuthorizationHeader();
}
