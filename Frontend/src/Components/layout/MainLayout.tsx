import Navbar from "./Navbar";
import Container from "./Container";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      
      {/* NAVBAR (boxed) */}
      <header style={{ background: "#fff", borderBottom: "1px solid #E5E5E5" }}>
        <Container>
          <Navbar />
        </Container>
      </header>

      {/* PAGE CONTENT (boxed) */}
      <main style={{ paddingTop: "24px" }}>
        <Container>{children}</Container>
      </main>

    </div>
  );
};

export default MainLayout;