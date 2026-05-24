import { Message } from "../../types/chat";

interface Props {
  message: Message;
}

const ChatMessage = ({ message }: Props) => {
  const isUser = message.sender === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          maxWidth: "68%",
          padding: "18px 22px",
          borderRadius: "24px",
          backgroundColor: isUser ? "#1A9E8D" : "white",
          color: isUser ? "white" : "#4B4B4B",
          lineHeight: "1.9",
          fontSize: "15px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
        }}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;