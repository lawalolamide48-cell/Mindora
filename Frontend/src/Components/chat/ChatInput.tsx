import { useState } from "react";

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
        padding: "10px 18px",
        border: "1px solid #E6E6E1",
        gap: "12px",
      }}
    >
      <input
        type="text"
        placeholder="Share what’s on your mind..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: "15px",
          color: "#111111",
        }}
      />

      <button
        onClick={handleSend}
        style={{
          border: "none",
          borderRadius: "999px",
          padding: "10px 18px",
          backgroundColor: "#1A9E8D",
          color: "white",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;