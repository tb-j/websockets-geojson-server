import { WebSocketServer } from "ws";
import { data } from "./sample-geojson.js";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });
  setInterval(() => {
    ws.send(JSON.stringify(data));
  }, 1000);
});
