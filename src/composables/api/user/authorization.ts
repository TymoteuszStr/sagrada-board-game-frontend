import axios from "axios";
import { saveToken } from "../../services/jwt.service";

export default async function authorizeAndSaveToken(
  login: string,
  password: string
): Promise<{ id: string; name: string }> {
  const resp = await axios({
    method: "post",
    url: `/login`,
    data: { login, password },
  });
  saveToken(resp.data.token);
  return {
    id: resp.data.userId,
    name: resp.data.name,
  };
}
