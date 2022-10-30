import axios from "axios";
import { saveToken, getToken } from "../shared/jwt.service";

export async function authorization(
  login: string,
  password: string
): Promise<{ id: string; name: string }> {
  const resp = await axios({
    method: "post",
    url: `/login`,
    data: { login, password },
  });
  saveToken(resp.data.token);
  axios.defaults.headers.common["Authorization"] = getToken();
  return {
    id: resp.data.userId,
    name: resp.data.name,
  };
}
