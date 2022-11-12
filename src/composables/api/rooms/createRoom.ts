import axios from "axios";
export default async function createRoom(
  name: string
): Promise<{ _id: string }> {
  const resp = await axios({
    method: "post",
    url: `/createRoom`,
    data: { name },
  });
  return resp.data;
}
