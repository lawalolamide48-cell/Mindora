import type { ReactNode } from "react";
import Navbar from "./Navbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #F0F0EC",
        }}
      >
        <Navbar />
      </header>

      <main>{children}</main>
    </div>
  );
};

export default MainLayout;