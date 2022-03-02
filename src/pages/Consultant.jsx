import React, { useState } from "react";
import LandingAboutSection from "../components/LandingAboutSection";
import LandingHeroSection from "../components/LandingHeroSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/ServicesSection";
import USPSection from "../components/USPSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ClientSection from "../components/ClientSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import OfferSection from "../components/OfferSection";

import heroBackground from "../assets/images/landing-background.png";
import navLogo from "../assets/icons/logo-icon.png";

//services images
import structArch from "../assets/images/struct-arch.png";
import structAudit from "../assets/images/struct-audit.png";
import projManCon from "../assets/images/project-management-consultant.png";
import buildRepair from "../assets/images/building-repair.png";
import costEstimate from "../assets/images/cost-estimate.png";
import drainage from "../assets/images/drainage.png";

function Consultant() {
  const [offerAvailable, SetOfferAvailable] = useState(true);

  const heroProps = {
    heading: "YOUR ONE STOP PLACE",
    subHeading: "FOR ALL YOUR CONSULTING NEEDS",
    backgroundImage: heroBackground,
    navLogo: navLogo,
  };

  const offerProps = {
    offerTitle: "NEW YEAR OFFER",
    offerDesc: "50% DISCOUNT ON CONTRACTING",
  };

  const services = [
    {
      serviceName: "Structural Audit",
      serviceImage: structAudit,
    },
    {
      serviceName: "Structural Design & Architectural Designing",
      serviceImage: structArch,
    },
    {
      serviceName: "Project Management Consultant",
      serviceImage: projManCon,
    },
    {
      serviceName: "Building repair consultant",
      serviceImage: buildRepair,
    },
    {
      serviceName: "Cost Estimators for Construction Projects",
      serviceImage: costEstimate,
    },
    {
      serviceName: "Drainage Plumbing Consultant",
      serviceImage: drainage,
    },
  ];

  return (
    <>
      <LandingHeroSection {...heroProps} />
      {offerAvailable ? <OfferSection {...offerProps} /> : ""}
      <USPSection />
      <LandingAboutSection />
      <ServicesSection serviceList={[...services]} />
      <PortfolioSection />
      <TestimonialsSection />
      <ClientSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default Consultant;
