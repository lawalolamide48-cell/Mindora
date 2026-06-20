import { useState } from "react";
import ChatBubble from "../Components/chat/ChatBubble";
import ChatInput from "../Components/chat/ChatInput";
import EmptyChatState from "../Components/chat/EmptyChatState";
import SuggestionChips from "../Components/chat/SuggestionChips";
import type { Message } from "../types/chat";

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.reply || "Cannot connect to backend");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "I cannot connect to Mindora right now. Please make sure the backend server is running, then try again.",
        },
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
              maxWidth: "1640px",
              margin: "0 auto",
              padding: "140px 72px 96px",
              display: "flex",
              flexDirection: "column",
              gap: "88px",
            }}
          >
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
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
          padding: hasMessages ? "64px 24px 56px" : "72px 24px 56px",
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
              textAlign: "center",
              color: "#808080",
              fontSize: "18px",
              marginTop: "36px",
            }}
          >
            Mindora Is An AI Companion, Not A Substitute For Professional Care.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Chat;