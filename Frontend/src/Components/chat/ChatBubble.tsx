import type { Message } from "../../types/chat";

interface Props {
  message: Message;
}

const ChatBubble = ({ message }: Props) => {
  const isUser = message.role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          maxWidth: isUser ? "320px" : "760px",
          padding: isUser ? "28px 40px" : "36px 44px",
          borderRadius: isUser ? "48px 48px 8px 48px" : "28px",
          backgroundColor: isUser ? "#0D9488" : "#ffffff",
          color: isUser ? "#ffffff" : "#444444",
          lineHeight: "1.55",
          fontSize: "24px",
          border: isUser ? "none" : "1px solid #D8DEDC",
        }}
      >
        {message.content}
      </div>
    </div>
  );
};

export default ChatBubble;