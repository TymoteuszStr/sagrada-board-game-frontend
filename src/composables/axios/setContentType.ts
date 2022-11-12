import axios from "axios";

export default function setContentType(type: string = "application/json") {
  axios.defaults.headers.post["Content-Type"] = type;
}
