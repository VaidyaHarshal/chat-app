import http from "http";
import app from "./app";
import connectDB from "./config/db";
import { WebSocket, WebSocketServer } from "ws";
import Message from "./models/Message";

const PORT = process.env.PORT || 5000;

connectDB();

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", async (message) => {
    const data = JSON.parse(message.toString());

    if (data.type === "message") {
      const newMessage = new Message({
        username: data.username,
        text: data.text,
      });
      await newMessage.save();

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(newMessage));
        }
      });
    }
  });
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
