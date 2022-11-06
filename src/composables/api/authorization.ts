import axios from "axios";
import setAuthorizationHeader from "../axios/setAuthorizationHeader";
import { saveToken, getToken } from "../services/jwt.service";

export default async function authorization(
  login: string,
  password: string
): Promise<{ id: string; name: string }> {
  const resp = await axios({
    method: "post",
    url: `/login`,
    data: { login, password },
  });
  saveToken(resp.data.token);
  setAuthorizationHeader(getToken());
  return {
    id: resp.data.userId,
    name: resp.data.name,
  };
}
