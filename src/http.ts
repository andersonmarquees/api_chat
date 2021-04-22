import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { app } from "./app";

const http = createServer(app); // create protocol http
const io = new Server(http); // create protocol ws

io.on("connection", (socket: Socket) => {
  // console.log("Connection Up!", socket.id);
})

export { http, io }
