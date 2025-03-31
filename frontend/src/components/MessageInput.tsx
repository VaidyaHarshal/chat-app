import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ws = new WebSocket("ws://localhost:5000");

export default function MessageInput({
  username,
  onMessageSent,
}: {
  username: string;
  onMessageSent: () => void;
}) {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() === "") return;
    const timestamp = new Date().toISOString();
    ws.send(
      JSON.stringify({ type: "message", username, text: message, timestamp })
    );
    setMessage("");
    onMessageSent();
  };

  return (
    <div className="flex items-center gap-2 p-3 bg-gray-50 border-t shadow-md rounded-b-lg">
      <Input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMessage(e.target.value)
        }
        className="flex-1 border rounded-lg px-4 py-2"
      />
      <Button
        onClick={sendMessage}
        disabled={message.trim() === "" || !username.trim()}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        Send
      </Button>
    </div>
  );
}
