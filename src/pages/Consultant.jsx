import React from "react";
import LandingHeroSection from "../components/LandingHeroSection";

function Consultant() {
  const heroProps = {
    heading: "YOUR ONE STOP PLACE",
    subHeading: "FOR ALL YOUR CONSULTING NEEDS",
  };

  return (
    <>
      <LandingHeroSection {...heroProps} />
    </>
  );
}

export default Consultant;
