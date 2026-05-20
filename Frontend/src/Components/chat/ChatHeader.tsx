type Props = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const ChatHeader = ({
  darkMode,
  setDarkMode,
}: Props) => {
  return (
    <header
      className={`sticky top-0 z-20 border-b px-6 py-4 flex items-center justify-between backdrop-blur-md ${
        darkMode
          ? "bg-[#0f0f0f]/80 border-[#222]"
          : "bg-white/80 border-gray-200"
      }`}
    >
      <div>
        <h2 className="font-semibold text-lg">
          Mindora Assistant
        </h2>

        <p className="text-sm opacity-70">
          Safe, calm, supportive AI conversations
        </p>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`px-4 py-2 rounded-lg transition ${
          darkMode
            ? "bg-[#1f1f1f] hover:bg-[#2a2a2a]"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </header>
  );
};

export default ChatHeader;