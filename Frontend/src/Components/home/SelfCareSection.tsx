const resources = [
  {
    type: "Exercises",
    title: "5-4-3-2-1 Grounding Technique",
    description:
      "Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
  },
  {
    type: "Article",
    title: "Understanding Panic Attacks",
    description:
      "Learn what happens during a panic attack and how to manage symptoms.",
  },
  {
    type: "Exercises",
    title: "Box Breathing Guide",
    description: "Inhale 4s · hold 4s · exhale 4s · hold 4s. Repeat 4 times.",
  },
  {
    type: "Article",
    title: "Building a Support Network",
    description:
      "How to reach out and build meaningful connections with others.",
  },
  {
    type: "Exercises",
    title: "Step Outside",
    description: "Two minutes of fresh air can shift the moment.",
  },
  {
    type: "Article",
    title: "Sleep Hygiene Checklist",
    description: "Practical tips to improve your sleep quality tonight.",
  },
];

const ExerciseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M22 12h-4l-3 9L9 3l-3 9H2"
      stroke="#1A9E8D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArticleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="2" width="14" height="20" rx="2" stroke="#1A9E8D" strokeWidth="2" />
    <path
      d="M9 7h6M9 11h6M9 15h4"
      stroke="#1A9E8D"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SelfCareSection = () => {
  return (
    <section
      id="resources"
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "64px",
          paddingRight: "64px",
        }}
      >

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "34px",
              fontWeight: "700",
              color: "#111111",
              letterSpacing: "-0.3px",
              marginBottom: "12px",
            }}
          >
            Quick Self Care
          </h2>
          <p style={{ fontSize: "15px", color: "#888888" }}>
            Curated Articles And Exercises To Help You Navigate Difficult Moments.
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {resources.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "28px",
                border: "1px solid #eeeeee",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              {/* Icon + type */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "#D0F5EF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.type === "Exercises" ? <ExerciseIcon /> : <ArticleIcon />}
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#1A9E8D",
                  }}
                >
                  {item.type}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  color: "#111111",
                  lineHeight: "1.4",
                  marginBottom: "8px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.65",
                  color: "#666666",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelfCareSection;