import React, { useState, useEffect, useRef } from "react";

import Sidebar from "../components/layout/Sidebar";
import ChatHeader from "../components/chat/ChatHeader";
import ChatBubble from "../components/chat/ChatBubble";
import ChatInput from "../components/chat/ChatInput";

type Message = {
  id: number;
  text: string;
  sender: "user" | "ai";
};

type ChatSession = {
  id: string;
  title: string;
  messages: Message[];
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const [isTyping, setIsTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // LOAD SESSIONS
  useEffect(() => {
    const saved = localStorage.getItem("mindora_sessions");
    if (saved) {
      const parsed = JSON.parse(saved);
      setChatSessions(parsed);

      if (parsed.length > 0) {
        setActiveChatId(parsed[0].id);
        setMessages(parsed[0].messages || []);
      }
    }
  }, []);

  // SAVE SESSIONS
  useEffect(() => {
    localStorage.setItem("mindora_sessions", JSON.stringify(chatSessions));
  }, [chatSessions]);

  // AUTO SCROLL
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const startNewChat = () => {
    const newChat: ChatSession = {
      id: Date.now().toString(),
      title: "New Chat",
      messages: [],
    };

    setChatSessions((prev) => [newChat, ...prev]);
    setActiveChatId(newChat.id);
    setMessages([]);
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text,
      sender: "user",
    };

    const updated = [...messages, userMsg];
    setMessages(updated);

    setIsTyping(true);

    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ message: text }),
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();

    let aiText = "";
    const aiId = Date.now() + 1;

    setMessages((prev) => [
      ...prev,
      { id: aiId, text: "", sender: "ai" },
    ]);

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      aiText += decoder.decode(value);

      setMessages((prev) =>
        prev.map((m) =>
          m.id === aiId ? { ...m, text: aiText } : m
        )
      );
    }

    setIsTyping(false);
  };

return (
  <div className="flex h-screen bg-[#F6F6F2] text-[#111] font-sans">

    {/* SIDEBAR */}
    <Sidebar
      chatSessions={chatSessions}
      activeChatId={activeChatId}
      onSelectChat={(id) => {
        const chat = chatSessions.find((c) => c.id === id);
        if (chat) {
          setActiveChatId(id);
          setMessages(chat.messages);
        }
      }}
      onNewChat={startNewChat}
    />

    {/* MAIN AREA */}
    <div className="flex-1 flex flex-col">

      {/* HEADER */}
      <div className="h-[64px] flex items-center px-6 border-b border-[#E7E7E2] bg-white">
        <h1 className="text-[16px] font-semibold tracking-tight">
          Mindora
        </h1>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        
        <div className="max-w-[720px] mx-auto space-y-4">

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-3 rounded-2xl text-[14px] leading-relaxed max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-[#2F2F2F] text-white rounded-br-md"
                    : "bg-white border border-[#E7E7E2] text-[#111] rounded-bl-md"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="text-[13px] text-[#6B6B6B]">
              Mindora is typing...
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* INPUT BAR */}
      <div className="border-t border-[#E7E7E2] bg-white p-4">
        <ChatInput onSend={handleSendMessage} />
      </div>

    </div>
  </div>
);
};
