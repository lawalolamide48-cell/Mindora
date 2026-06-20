import { useState } from "react";
import ChatBubble from "../Components/chat/ChatBubble";
import ChatInput from "../Components/chat/ChatInput";
import EmptyChatState from "../Components/chat/EmptyChatState";
import SuggestionChips from "../Components/chat/SuggestionChips";
import type { Message } from "../types/chat";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (text: string) => {
    const trimmedText = text.trim();

    if (!trimmedText || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmedText,
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
    ]);

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.reply || data.message || "Cannot connect to the backend"
        );
      }

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply,
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        assistantMessage,
      ]);
    } catch {
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "I cannot connect to Mindora right now. Please try again shortly.",
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        errorMessage,
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <div className="chat-page">
      <section
        className={`chat-stage ${
          hasMessages ? "chat-stage--active" : "chat-stage--empty"
        }`}
      >
        {!hasMessages ? (
          <EmptyChatState />
        ) : (
          <div className="chat-messages">
            {messages.map((message) => (
              <ChatBubble key={message.id} message={message} />
            ))}

            {isLoading && (
              <ChatBubble
                message={{
                  id: "loading",
                  role: "assistant",
                  content:
                    "I am here with you. Thinking through a gentle response...",
                }}
              />
            )}
          </div>
        )}
      </section>

      <section
        className={`chat-composer-section ${
          hasMessages
            ? "chat-composer-section--active"
            : "chat-composer-section--empty"
        }`}
      >
        {!hasMessages && (
          <div className="chat-suggestions-wrap">
            <SuggestionChips onSend={handleSend} />
          </div>
        )}

        <div className="chat-composer">
          <ChatInput onSend={handleSend} />

          <p className="chat-disclaimer">
            Mindora Is An AI Companion, Not A Substitute For Professional Care.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Chat;
