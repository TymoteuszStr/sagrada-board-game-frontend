import axios from "axios";

export default async function startNewGame(roomId: string): Promise<{
  playersOrder: string;
  setup: any;
} | null> {
  const resp = await axios({
    method: "post",
    data: { roomId },
    url: `/startNewGame`,
  });
  return resp.data;
}
