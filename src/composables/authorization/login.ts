import axios from "axios";
import { URI } from "@/config";
import { saveToken } from "./jwt.service";

export async function authorization(
  login: string,
  password: string
): Promise<any> {
  try {
    const resp = await axios({
      method: "post",
      url: `${URI}/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { login, password },
    });
    saveToken(resp.data.token);
    return {
      id: resp.data.userId,
      name: resp.data.userName,
    };
  } catch (err) {
    console.log(err);
    throw "error";
  } finally {
    console.log("finally");
  }
}
