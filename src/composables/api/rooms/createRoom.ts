import axios from "axios";
export default async function createRoom(
  name: string
): Promise<{ name: string }> {
  const resp = await axios({
    method: "post",
    url: `/createRoom`,
    data: { name },
  });
  return resp.data;
}
