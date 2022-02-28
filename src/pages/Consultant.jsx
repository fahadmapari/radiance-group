import React from "react";
import LandingAboutSection from "../components/LandingAboutSection";
import LandingHeroSection from "../components/LandingHeroSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/ServicesSection";
import USPSection from "../components/USPSection";

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
    </>
  );
}

export default Consultant;
