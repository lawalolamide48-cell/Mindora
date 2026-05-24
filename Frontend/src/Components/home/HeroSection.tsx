import { useNavigate } from "react-router-dom";
import heroFigure from "../../assets/hero-figure.png";
import cardMint from "../../assets/card-mint.png";
import cardWhite from "../../assets/card-white.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        width: "100%",
        minHeight: "580px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        background: "#F8F6F1",
      }}
    >
      {/* BACKGROUND ANGULAR GRADIENT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.16,

          background: `
            conic-gradient(
              from 180deg at 50% 50%,
              #FF7A37 0deg,
              #0D9488 72deg,
              #BCBE56 144deg,
              #DD9C46 216deg,
              #C67272 288deg,
              #FF7A37 360deg
            )
          `,

          filter: "blur(100px)",
          transform: "scale(1.2)",
        }}
      />

      {/* MAIN CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "60px 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ flex: "0 0 48%" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(0,0,0,0.05)",
              borderRadius: "999px",
              padding: "6px 16px",
              marginBottom: "24px",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "#0D9488",
                flexShrink: 0,
              }}
            />

            <span
              style={{
                fontSize: "13px",
                color: "#4B5563",
                fontWeight: 500,
              }}
            >
              Available 24/7
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.1",
              fontWeight: "800",
              color: "#241A08",
              letterSpacing: "-1.5px",
              marginBottom: "22px",
            }}
          >
            Safe Support Whenever
            <br />
            you Need Someone to
            <br />
            Talk to.
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#6B7280",
              marginBottom: "36px",
              maxWidth: "540px",
            }}
          >
            Chat Anonymously With Mindora For Guidance, Emotional
            Support, And Health-Related Conversations — Without
            Judgment, Without Sign-Ups.
          </p>

          {/* CTA BUTTON */}
          <button
            onClick={() => navigate("/chat")}
            style={{
              background: "#0D9488",
              color: "white",
              padding: "15px 34px",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(13,148,136,0.18)",
              transition: "0.3s ease",
            }}
          >
            Start Anonymous Chat
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: "0 0 48%",
            position: "relative",
            height: "460px",
          }}
        >
          {/* Mint Card */}
          <img
            src={cardMint}
            alt=""
            style={{
              position: "absolute",
              width: "88%",
              top: "10px",
              left: "5%",
            }}
          />

          {/* White Card */}
          <img
            src={cardWhite}
            alt=""
            style={{
              position: "absolute",
              width: "76%",
              top: "45px",
              left: "10%",
            }}
          />

          {/* Hero Figure */}
          <img
            src={heroFigure}
            alt="Meditation illustration"
            style={{
              position: "absolute",
              width: "65%",
              top: "20px",
              left: "16%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;