import type IUser from "@/models/userModel";
import axios from "axios";
import { getToken } from "../services/jwt.service";

export default async function getUserFromToken(
  token: string = getToken()
): Promise<IUser | null> {
  const resp = await axios({
    method: "post",
    url: `/getUserFromToken`,
    data: { token },
  });
  const user: IUser | null = resp.data;
  return user;
}
