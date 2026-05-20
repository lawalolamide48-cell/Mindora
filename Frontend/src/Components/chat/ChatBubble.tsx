type ChatBubbleProps = {
  message: string;
  sender: "user" | "ai";
};

const ChatBubble = ({
  message,
  sender,
}: ChatBubbleProps) => {
  return (
    <div
      className={`flex ${
        sender === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >

      <div
        className={`max-w-[80%] rounded-[28px] px-6 py-5 text-[15px] leading-7 ${
          sender === "user" ?
            "bg-[#111111] text-white"
            : "bg-white border border-[#E5E5E5] text-[#111111]"
        }`}
      >

        {message}

      </div>

    </div>
  );
};

export default ChatBubble;