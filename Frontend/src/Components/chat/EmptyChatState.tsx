import SuggestionChips from "./SuggestionChips";

interface Props {
  onSend: (text: string) => void;
}

const EmptyChatState = ({ onSend }: Props) => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "560px",
          backgroundColor: "white",
          borderRadius: "32px",
          padding: "48px 56px",
          textAlign: "center",
          boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: 600,
            marginBottom: "16px",
            color: "#111111",
          }}
        >
          Hi, I’m Mindora.
        </h1>

        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.8",
            color: "#7B7B7B",
            marginBottom: "32px",
          }}
        >
          Tell me how you're feeling. I'm here, and this is private.
        </p>

        <SuggestionChips onSend={onSend} />
      </div>
    </div>
  );
};

export default EmptyChatState;