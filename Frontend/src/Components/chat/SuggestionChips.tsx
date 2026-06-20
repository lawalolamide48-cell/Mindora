interface Props {
  onSend: (text: string) => void;
}

const suggestions = [
  "I feel anxious",
  "I need support",
  "I can’t sleep",
  "I’m overwhelmed with work",
];

const SuggestionChips = ({ onSend }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "36px",
        justifyContent: "center",
        padding: "0 24px",
      }}
    >
      {suggestions.map((item, index) => (
        <button
          key={index}
          onClick={() => onSend(item)}
          style={{
            border: "1px solid #D8DEDC",
            borderRadius: "999px",
            padding: "18px 48px",
            backgroundColor: "#ffffff",
            color: "#1F2A2A",
            fontSize: "22px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default SuggestionChips;