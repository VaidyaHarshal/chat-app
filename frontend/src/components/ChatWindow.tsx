import { useState, useEffect, useRef } from "react";

const ws = new WebSocket("ws://localhost:5000");

interface Message {
  username: string;
  text: string;
  timestamp: string;
}

export default function ChatWindow({ username }: { username: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ws.onmessage = (event) => {
      const newMessage: Message = JSON.parse(event.data);
      newMessage.timestamp = new Date().toISOString();
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTimeStamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="h-80 overflow-auto border bg-white shadow-md rounded-lg p-4 flex flex-col space-y-2">
      {messages.map((message, index) => {
        const isYou = message.username === username;

        return (
          <div
            key={index}
            className={`p-3 rounded-lg text-white w-fit max-w-[75%] ${
              isYou
                ? "bg-blue-500 ml-auto text-right"
                : "bg-gray-500 mr-auto text-left"
            }`}
          >
            <strong
              className={`block text-xs opacity-80 ${
                isYou ? "text-right" : "text-left"
              }`}
            >
              {isYou ? "You" : message.username}:
            </strong>{" "}
            {message.text}
            <div className="text-sm text-white-500">
              {formatTimeStamp(message.timestamp)}
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef}></div>
    </div>
  );
}
