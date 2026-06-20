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
    <div className="suggestion-chips">
      {suggestions.map((item, index) => (
        <button
          className="suggestion-chip"
          key={index}
          onClick={() => onSend(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default SuggestionChips;
