import { http } from "./http";
import "./websocket/client";

http.listen(3333, () => console.info("Server is Running!"));
