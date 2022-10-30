import axios, { type AxiosResponse } from "axios";

export async function registerUser(
  login: string,
  password: string
): Promise<AxiosResponse> {
  const resp = await axios({
    method: "post",
    url: `/register`,
    data: { login, password },
  });
  return resp.data;
}
