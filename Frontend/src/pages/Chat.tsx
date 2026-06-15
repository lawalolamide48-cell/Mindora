import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
import ChatInput from "../components/chat/ChatInput";
import EmptyChatState from "../components/chat/EmptyChatState";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: text },
    ]);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Cannot connect to backend" },
      ]);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[#EEF8F6]">

      {/* CHAT AREA */}
      <div className="flex-1 w-full flex flex-col overflow-hidden">

        {/* MESSAGES OR EMPTY STATE */}
        {messages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center px-6">
            <EmptyChatState onSend={handleSend} />
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="max-w-3xl mx-auto flex flex-col gap-3">

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`px-4 py-3 rounded-xl text-[15px] shadow-sm max-w-[75%] ${
                    msg.role === "user"
                      ? "ml-auto bg-[#DCF8F5]"
                      : "mr-auto bg-white"
                  }`}
                >
                  {msg.content}
                </div>
              ))}

            </div>
          </div>
        )}

        {/* INPUT (ALWAYS FIXED STRUCTURE) */}
        <div className="w-full px-6 py-5 border-t border-[#DCEAE6]">
          <div className="max-w-3xl mx-auto">
            <ChatInput onSend={handleSend} />
          </div>

          <p className="text-center text-[13px] text-gray-500 mt-4">
            Mindora is an AI companion, not a substitute for professional care.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Chat;