import { Input } from "./ui/input";

export default function UserInput({
  username,
  setUsername,
  isUsernameDisabled,
}: {
  username: string;
  setUsername: (username: string) => void;
  isUsernameDisabled: boolean;
}) {
  return (
    <Input
      type="text"
      placeholder="Enter username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="mb-3"
      disabled={isUsernameDisabled}
    ></Input>
  );
}
