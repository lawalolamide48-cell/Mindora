import React, { useState } from "react";

const ChatInput = ({ onSend }: any) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSend(text);
    setText("");
  };

  return (
    <div className="flex items-center gap-2 bg-[#F6F6F2]">

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Message Mindora..."
        className="flex-1 bg-white border border-[#E7E7E2] rounded-xl px-4 py-3 text-[14px] outline-none"
      />

      <button
        onClick={handleSend}
        className="bg-[#2F2F2F] text-white px-4 py-3 rounded-xl text-[13px] hover:bg-black transition"
      >
        Send
      </button>

    </div>
  );
};

export default ChatInput;