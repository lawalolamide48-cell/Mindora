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
    <div className={`mindora-navbar ${isChatPage ? "mindora-navbar--chat" : ""}`}>
      <img
        className="mindora-navbar__logo"
        src={logoImg}
        alt="Mindora"
        onClick={() => navigate("/")}
      />

      {!isChatPage && (
        <nav className="mindora-navbar__links">
          {[
            ["About", "#about"],
            ["How It Works", "#how-it-works"],
            ["Resources", "#resources"],
            ["Privacy", "#privacy"],
          ].map(([label, hash]) => (
            <button
              className="mindora-navbar__link"
              key={hash}
              onClick={() => handleHomeSection(hash)}
            >
              {label}
            </button>
          ))}
        </nav>
      )}

      <button
        className={`mindora-navbar__action ${
          isChatPage ? "mindora-navbar__action--end" : ""
        }`}
        onClick={() => navigate(isChatPage ? "/" : "/chat")}
      >
        {isChatPage ? "End Chat" : "Start Chatting"}
      </button>
    </div>
  );
};

export default Navbar;
