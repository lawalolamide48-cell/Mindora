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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "999px",
        padding: "14px 16px 14px 28px",
        border: "1px solid #D8DEDC",
        gap: "16px",
        width: "100%",
      }}
    >
      <input
        type="text"
        placeholder="Share what’s on your mind..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: "24px",
          color: "#111111",
          minWidth: 0,
        }}
      />

      <button
        aria-label="Send message"
        onClick={handleSend}
        style={{
          border: "none",
          borderRadius: "999px",
          width: "72px",
          height: "72px",
          backgroundColor: "#0D9488",
          color: "white",
          cursor: "pointer",
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
        }}
      >
        <ArrowUp size={38} strokeWidth={2.2} />
      </button>
    </div>
  );
};

export default ChatInput;