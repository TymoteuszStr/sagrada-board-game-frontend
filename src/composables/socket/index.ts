import { URI, PORT_WS } from "@/config";
import { io } from "socket.io-client";

export function useWebSocketIO() {
  const socket = io(`${URI}:${PORT_WS}`);
  socket.on("connect", () => {
    console.log("connected", socket);
  });
  return { socket };
}
