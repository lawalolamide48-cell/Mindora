import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 0",
      }}
    >
      {/* LOGO */}
      <img src={logoImg} alt="Mindora" style={{ height: "40px" }} />

      {/* LINKS */}
      <nav style={{ display: "flex", gap: "40px" }}>
        <a href="#about" style={{ color: "#555", textDecoration: "none" }}>
          About
        </a>
        <a href="#how-it-works" style={{ color: "#555", textDecoration: "none" }}>
          How It Works
        </a>
        <a href="#resources" style={{ color: "#555", textDecoration: "none" }}>
          Resources
        </a>
        <a href="#privacy" style={{ color: "#555", textDecoration: "none" }}>
          Privacy
        </a>
      </nav>

      {/* BUTTON */}
      <button
        onClick={() => navigate("/chat")}
        style={{
          backgroundColor: "#1A9E8D",
          color: "white",
          padding: "10px 24px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Start Chatting
      </button>
    </header>
  );
};

export default Navbar;