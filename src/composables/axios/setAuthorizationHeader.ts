import axios from "axios";

export default function setAuthorizationHeader(token: string) {
  axios.defaults.headers.common["Authorization"] = token;
}
