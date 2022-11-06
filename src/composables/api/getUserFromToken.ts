import type IUser from "@/models/interfaces/userModel";
import axios from "axios";

export default async function getUserFromToken(
  token: string
): Promise<IUser | null> {
  const resp = await axios({
    method: "post",
    url: `/getUserFromToken`,
    data: { token },
  });
  const user: IUser | null = resp.data;
  return user;
}
