import axios from "axios";
import { URI, PORT } from "@/config";
const uriWithPort = `${URI}:${PORT}`;
export default function setBaseUrl(uri: string = uriWithPort) {
  axios.defaults.baseURL = uri;
}
