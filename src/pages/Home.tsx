import { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import CompanyListingsSection from "../components/home/CompanyListingsSection";
import CTASection from "../components/home/CTASection";
import ContactSection from "../components/home/ContactSection";

const Home = () => {
  // Add scroll to top behavior when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full">
      <HeroSection />
      <FeaturesSection />
      <CompanyListingsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Home;
