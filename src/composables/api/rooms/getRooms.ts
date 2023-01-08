import axios from "axios";
export default async function getRooms(): Promise<
  | {
      _id: string;
      name: string;
      players: string[];
    }[]
  | []
> {
  try {
    const resp = await axios({
      method: "get",
      url: `/rooms`,
    });
    return resp.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
