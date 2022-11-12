import axios from "axios";
import { URI } from "@/config";

export default function setBaseUrl(uri: string = URI) {
  axios.defaults.baseURL = uri;
}
