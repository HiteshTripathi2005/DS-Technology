import { useEffect } from "react";
import SEO from "../components/SEO";
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
      <SEO
        title="Home"
        description="Premium hospital products and medical equipment. We offer a wide range of surgical instruments and healthcare supplies for medical professionals."
        canonicalUrl="https://dharmrajsurgicaltechnologies.com//"
      />
      <HeroSection />
      <FeaturesSection />
      <CompanyListingsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Home;
