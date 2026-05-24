import { Routes, Route } from "react-router-dom";
import MainLayout from "./Components/layout/MainLayout";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/chat" element={<MainLayout><Chat /></MainLayout>} />
    </Routes>
  );
}

export default App;