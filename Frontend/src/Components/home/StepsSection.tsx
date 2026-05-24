const steps = [
  {
    number: "1",
    title: "Open the chat",
    description: "No sign-up required. Click and start talking instantly.",
  },
  {
    number: "2",
    title: "Share how you feel",
    description: "Tell Mindora what is on your mind. Everything stays private.",
  },
  {
    number: "3",
    title: "Get support",
    description:
      "Receive compassionate guidance, coping strategies, and resources.",
  },
];

const StepsSection = () => {
  return (
    <section
      id="how-it-works"
      style={{
        width: "100%",
        background: "#1A9E8D",
        padding: "100px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 64px",
        }}
      >

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "#ffffff",
              letterSpacing: "-0.3px",
              marginBottom: "12px",
            }}
          >
            How Mindora Works
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Three Simple Steps To Get The Support You Need.
          </p>
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "24px",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "48px 40px",
                textAlign: "center",
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Teal circle number */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "#1A9E8D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "32px",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#111111",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.7",
                  color: "#666666",
                  maxWidth: "260px",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StepsSection;