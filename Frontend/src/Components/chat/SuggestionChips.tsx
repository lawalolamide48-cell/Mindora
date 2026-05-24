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
        gap: "12px",
        justifyContent: "center",
      }}
    >
      {suggestions.map((item, index) => (
        <button
          key={index}
          onClick={() => onSend(item)}
          style={{
            border: "none",
            borderRadius: "999px",
            padding: "12px 18px",
            backgroundColor: "#F8F8F8",
            color: "#444444",
            fontSize: "14px",
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