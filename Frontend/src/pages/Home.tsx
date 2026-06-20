import HeroSection from "../Components/home/HeroSection";
import AboutSection from "../Components/home/AboutSection";
import StepsSection from "../Components/home/StepsSection";
import SelfCareSection from "../Components/home/SelfCareSection";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <StepsSection />
      <SelfCareSection />
      <Footer />
    </main>
  );
};

export default Home;