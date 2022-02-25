import React from "react";
import AboutSection from "../components/AboutSection";
import AchievementSection from "../components/AchievementSection";
import CompaniesSection from "../components/CompaniesSection";
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
    </>
  );
}

export default Homepage;
