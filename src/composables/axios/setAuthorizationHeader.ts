import axios from "axios";
import { getToken } from "../services/jwt.service";

export default function setAuthorizationHeader() {
  const token = getToken();
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
