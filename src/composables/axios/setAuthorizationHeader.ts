import axios from "axios";
import { getToken } from "../services/jwt.service";
const token = getToken();

export default function setAuthorizationHeader() {
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
