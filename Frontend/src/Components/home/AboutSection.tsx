import brainImg from "../../assets/brain.png";

const features = [
  "Privacy",
  "Accessibility",
  "Emotional support",
  "Safe AI-assisted conversations",
];

const AboutSection = () => {
  return (
    <section
      id="about"
      style={{
        width: "100%",
        background: "#ffffff",
        padding: "96px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 64px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >

          {/* LEFT — brain image in dark container */}
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              height: "340px",
              background: "#000000",
            }}
          >
            <img
              src={brainImg}
              alt="AI brain circuit"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* RIGHT — text content */}
          <div>

            {/* Heading */}
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#111111",
                marginBottom: "20px",
                letterSpacing: "-0.3px",
              }}
            >
              About Mindora
            </h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#444444",
                marginBottom: "16px",
              }}
            >
              Mindora is an AI-powered anonymous support platform designed to
              provide users with a safe, calm, and judgment-free space to talk
              about emotional, mental, and personal health concerns.
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#444444",
              }}
            >
              The platform combines conversational AI with supportive wellness
              resources to help users feel heard, supported, and guided whenever
              they need someone to talk to.
            </p>

            {/* Features — teal dot + dark text, 2 columns */}
            <div
              style={{
                marginTop: "32px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px 24px",
              }}
            >
              {features.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#1A9E8D",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#333333",
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;