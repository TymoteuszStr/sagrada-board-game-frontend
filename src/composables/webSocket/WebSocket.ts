import { URI, PORT_WS } from "@/config";
import { io } from "socket.io-client";
import { getToken } from "../services/jwt.service";
import { CONNECT_ERROR } from "@/models/webSocketEvents";
import logout from "../user/logout";
export function useWebSocketIO() {
  const socket = io(`${URI}:${PORT_WS}`, { auth: { token: getToken() } });
  socket.on("connect", () => {
    console.log("connected with id", socket.id);
  });
  socket.on(CONNECT_ERROR, () => {
    alert("Nie jesteś zalogowany");
    // logout();
  });
  return { socket };
}
