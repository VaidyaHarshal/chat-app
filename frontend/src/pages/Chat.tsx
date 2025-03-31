import { useState } from "react";
import UserInput from "@/components/UserInput";
import ChatWindow from "@/components/ChatWindow";
import MessageInput from "@/components/MessageInput";

export default function Chat() {
  const [username, setUsername] = useState("");
  const [isUsernameDisabled, setIsUsernameDisabled] = useState(false);

  const handleMessageSent = () => {
    setIsUsernameDisabled(true);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-5 border rounded-lg shadow-lg flex flex-col space-y-3">
      <h2 className="text-center text-xl font-semibold text-gray-700">
        Live Chat
      </h2>
      <UserInput
        username={username}
        setUsername={setUsername}
        isUsernameDisabled={isUsernameDisabled}
      />
      <ChatWindow username={username} />
      <MessageInput username={username} onMessageSent={handleMessageSent} />
    </div>
  );
}
