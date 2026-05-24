import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer style={{ width: "100%" }}>

      {/* CTA SECTION */}
      <div
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "80px",
          paddingBottom: "80px",
          paddingLeft: "64px",
          paddingRight: "64px",
        }}
      >
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            backgroundColor: "#D4F5EF",
            borderRadius: "28px",
            padding: "80px 64px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#111111",
              letterSpacing: "-0.5px",
              lineHeight: "1.2",
              marginBottom: "16px",
            }}
          >
            Ready When You Are.
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#666666",
              lineHeight: "1.75",
              maxWidth: "380px",
              margin: "0 auto",
            }}
          >
            No Pressure. No Commitment. Just A Safe Space
            To Talk Through Whatever Is On Your Mind.
          </p>

          <button
            onClick={() => navigate("/chat")}
            style={{
              marginTop: "32px",
              backgroundColor: "#1A9E8D",
              color: "white",
              padding: "14px 40px",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: "500",
              border: "none",
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            Start Anonymous Chat
          </button>
        </div>
      </div>

      {/* FOOTER BAR */}
      <div style={{ backgroundColor: "#EFEFEB" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "40px 64px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >

          {/* LEFT — logo + tagline */}
          <div>
            <img
              src={logoImg}
              alt="Mindora"
              style={{ height: "36px", width: "auto", marginBottom: "8px" }}
            />
            <p style={{ fontSize: "13px", color: "#888888" }}>
              A Safe Space To Talk. Anonymous By Design.
            </p>
          </div>

          {/* CENTER — nav links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              paddingTop: "4px",
            }}
          >
            <a href="#about" style={{ fontSize: "14px", color: "#666666", textDecoration: "none" }}>
              About
            </a>
            <a href="#how-it-works" style={{ fontSize: "14px", color: "#666666", textDecoration: "none" }}>
              How It Works
            </a>
            <a href="#resources" style={{ fontSize: "14px", color: "#666666", textDecoration: "none" }}>
              Resources
            </a>
            <a href="#privacy" style={{ fontSize: "14px", color: "#666666", textDecoration: "none" }}>
              Privacy
            </a>
          </div>

          {/* RIGHT — copyright */}
          <p
            style={{
              fontSize: "14px",
              color: "#888888",
              paddingTop: "4px",
              whiteSpace: "nowrap",
            }}
          >
            © 2026 Bolt. All Rights Reserved.
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;