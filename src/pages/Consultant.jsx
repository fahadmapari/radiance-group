import React from "react";
import LandingAboutSection from "../components/LandingAboutSection";
import LandingHeroSection from "../components/LandingHeroSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/ServicesSection";
import USPSection from "../components/USPSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ClientSection from "../components/ClientSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection ";

function Consultant() {
  const heroProps = {
    heading: "YOUR ONE STOP PLACE",
    subHeading: "FOR ALL YOUR CONSULTING NEEDS",
  };

  return (
    <>
      <LandingHeroSection {...heroProps} />
      <USPSection />
      <LandingAboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ClientSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default Consultant;
