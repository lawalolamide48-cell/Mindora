import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import StepsSection from "../components/home/StepsSection";
import SelfCareSection from "../components/home/SelfCareSection";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#F8F8F4]">

      <Navbar />

      <HeroSection />

      <AboutSection />

      <StepsSection />

      <SelfCareSection />

      <Footer />

    </main>
  );
};

export default Home;