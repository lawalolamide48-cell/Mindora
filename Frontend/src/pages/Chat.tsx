import { useState } from "react";
import ChatInput from "../components/chat/ChatInput";
import EmptyChatState from "../components/chat/EmptyChatState";

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = async (text: string) => {
    setMessages((prev) => [...prev, `You: ${text}`]);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, `Mindora: ${data.reply}`]);
    } catch (err) {
      console.error("Error connecting to backend:", err);
      setMessages((prev) => [
        ...prev,
        "Mindora: Cannot connect to backend",
      ]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#EEF8F6",
      }}
    >
      {messages.length === 0 ? (
        <EmptyChatState onSend={handleSend} />
      ) : (
        <div
          style={{
            flex: 1,
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                padding: "10px 14px",
                borderRadius: "10px",
                backgroundColor: msg.startsWith("You:")
                  ? "#DCF8F5"
                  : "#FFFFFF",
                alignSelf: msg.startsWith("You:")
                  ? "flex-end"
                  : "flex-start",
                maxWidth: "60%",
              }}
            >
              {msg}
            </div>
          ))}
        </div>
      )}

      <div
        style={{
          padding: "20px 24px 32px",
        }}
      >
        <ChatInput onSend={handleSend} />

        <p
          style={{
            textAlign: "center",
            marginTop: "16px",
            fontSize: "13px",
            color: "#7B7B7B",
          }}
        >
          Mindora is an AI companion, not a substitute for professional care.
        </p>
      </div>
    </div>
  );
};

export default Chat;