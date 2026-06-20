import { useState } from "react";
import { ArrowUp } from "lucide-react";

interface Props {
  onSend: (text: string) => void;
}

const ChatInput = ({ onSend }: Props) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    onSend(input);
    setInput("");
  };

  return (
    <div className="chat-input-shell">
      <input
        className="chat-input"
        type="text"
        placeholder="Share what’s on your mind..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
      />

      <button
        className="chat-send-button"
        aria-label="Send message"
        onClick={handleSend}
      >
        <ArrowUp aria-hidden="true" />
      </button>
    </div>
  );
};

export default ChatInput;
