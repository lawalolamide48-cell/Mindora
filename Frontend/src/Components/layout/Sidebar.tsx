import React from "react";

const Sidebar = ({
  chatSessions,
  activeChatId,
  onSelectChat,
  onNewChat,
}: any) => {
  return (
    <div className="w-[280px] h-screen bg-white border-r border-[#E7E7E2] flex flex-col">

      {/* NEW CHAT BUTTON */}
      <div className="p-4">
        <button
          onClick={onNewChat}
          className="w-full bg-[#2F2F2F] text-white text-[13px] py-2.5 rounded-xl hover:bg-black transition"
        >
          + New chat
        </button>
      </div>

      {/* CHAT LIST */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1">

        {chatSessions?.length === 0 && (
          <p className="text-[12px] text-[#999] text-center mt-6">
            No conversations yet
          </p>
        )}

        {chatSessions?.map((chat: any) => {
          const active = chat.id === activeChatId;

          return (
            <div
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={`px-3 py-2 rounded-xl cursor-pointer text-[13px] truncate transition ${
                active
                  ? "bg-[#F0F0EC] text-[#111]"
                  : "hover:bg-[#F6F6F2] text-[#555]"
              }`}
            >
              {chat.title}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Sidebar;