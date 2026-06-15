import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isChatPage = location.pathname === "/chat";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#EEF8F6",
      }}
    >
      <header
        style={{
          background: "#EEF8F6",
          borderBottom: isChatPage
            ? "none"
            : "1px solid #E5E5E5",
        }}
      >
        <Navbar />
      </header>

      <main
        style={{
          paddingTop: isChatPage ? "0" : "24px",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;