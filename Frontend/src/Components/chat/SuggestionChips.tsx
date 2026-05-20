const suggestions = [
  "I feel anxious",
  "I need support",
  "I can’t sleep",
  "I’m overwhelmed with work",
];

const SuggestionChips = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-12">

      {suggestions.map((item) => (
        <button
          key={item}
          className="border border-[#E5E5E5] bg-white rounded-full px-5 py-3 text-sm text-[#111111] hover:bg-[#111111] hover:text-white transition"
        >

          {item}

        </button>
      ))}

    </div>
  );
};

export default SuggestionChips;