import { COLORS } from "../../constants/colors";

const ChatHeader = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        backgroundColor: COLORS.background,
        borderBottom: `1px solid ${COLORS.border}`,
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 600,
          color: COLORS.text,
        }}
      >
        Mindora
      </h2>

      <button
        style={{
          backgroundColor: COLORS.dangerBg,
          color: COLORS.dangerText,
          border: "none",
          borderRadius: "999px",
          padding: "9px 22px",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        End Chat
      </button>
    </header>
  );
};

export default ChatHeader;