import React from "react";
import AboutSection from "../components/AboutSection";
import AchievementSection from "../components/AchievementSection";
import ClientSection from "../components/ClientSection";
import CompaniesSection from "../components/CompaniesSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";

function Homepage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CompaniesSection />
      <AchievementSection />
      <TestimonialsSection />
      <ClientSection />
      <ContactSection />
    </>
  );
}

export default Homepage;
