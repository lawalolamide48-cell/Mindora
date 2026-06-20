import type { Message } from "../../types/chat";

interface Props {
  message: Message;
}

const ChatBubble = ({ message }: Props) => {
  const isUser = message.role === "user";

  return (
    <div className={`chat-bubble-row ${isUser ? "chat-bubble-row--user" : ""}`}>
      <div className={`chat-bubble ${isUser ? "chat-bubble--user" : "chat-bubble--assistant"}`}>
        {message.content}
      </div>
    </div>
  );
};

export default ChatBubble;
