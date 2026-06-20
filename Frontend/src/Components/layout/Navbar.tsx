import { useLocation, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isChatPage = location.pathname === "/chat";

  const handleHomeSection = (hash: string) => {
    if (location.pathname !== "/") {
      navigate(`/${hash}`);
      return;
    }

    window.location.hash = hash;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "24px 64px",
        minHeight: "96px",
      }}
    >
      <img
        src={logoImg}
        alt="Mindora"
        onClick={() => navigate("/")}
        style={{
          height: isChatPage ? "64px" : "44px",
          cursor: "pointer",
        }}
      />

      {!isChatPage && (
        <nav
          style={{
            display: "flex",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {[
            ["About", "#about"],
            ["How It Works", "#how-it-works"],
            ["Resources", "#resources"],
            ["Privacy", "#privacy"],
          ].map(([label, hash]) => (
            <button
              key={hash}
              onClick={() => handleHomeSection(hash)}
              style={{
                background: "transparent",
                border: "none",
                color: "#666666",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              {label}
            </button>
          ))}
        </nav>
      )}

      <button
        onClick={() => navigate(isChatPage ? "/" : "/chat")}
        style={{
          backgroundColor: isChatPage ? "#FDE7E8" : "#0D9488",
          color: isChatPage ? "#C9161D" : "#ffffff",
          padding: isChatPage ? "20px 36px" : "14px 28px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          fontSize: isChatPage ? "24px" : "15px",
          fontWeight: 700,
        }}
      >
        {isChatPage ? "End Chat" : "Start Chatting"}
      </button>
    </div>
  );
};

export default Navbar;