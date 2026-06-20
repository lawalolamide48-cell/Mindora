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
    <div
      style={{
        minHeight: "calc(100vh - 96px)",
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
      }}
    >
      <section
        style={{
          flex: "1 1 auto",
          background:
            "linear-gradient(180deg, #EEF8F6 0%, #EEF8F6 82%, #FFFFFF 82%)",
        }}
      >
        {!hasMessages ? (
          <EmptyChatState />
        ) : (
          <div
            style={{
              width: "100%",
              maxWidth: "1640px",
              margin: "0 auto",
              padding: "140px 72px 96px",
              display: "flex",
              flexDirection: "column",
              gap: "88px",
            }}
          >
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                message={message}
              />
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
        style={{
          background: "#ffffff",
          padding: hasMessages
            ? "64px 24px 56px"
            : "72px 24px 56px",
        }}
      >
        {!hasMessages && (
          <div style={{ marginBottom: "96px" }}>
            <SuggestionChips onSend={handleSend} />
          </div>
        )}

        <div
          style={{
            width: "100%",
            maxWidth: "1160px",
            margin: "0 auto",
          }}
        >
          <ChatInput onSend={handleSend} />

          <p
            style={{
              marginTop: "36px",
              textAlign: "center",
              color: "#808080",
              fontSize: "18px",
            }}
          >
            Mindora Is An AI Companion, Not A Substitute For
            Professional Care.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Chat;