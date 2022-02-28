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

import unicornBackground from "../assets/images/unicorn-background.jpg";
import navLogo from "../assets/icons/unicorn-logo.png";

//services images

import buildRepair from "../assets/images/unicorn-building-repair.jpg";
import structRetro from "../assets/images/building-repair.png";
import waterproof from "../assets/images/unicorn-waterproof.webp";
import civilContract from "../assets/images/civil-contract.jpeg";
import roadConstruct from "../assets/images/road-construction.jpg";

function Unicorn() {
  const [offerAvailable, SetOfferAvailable] = useState(false);

  const heroProps = {
    heading: "YOUR ONE STOP PLACE",
    subHeading: "FOR ALL YOUR CONTRACTING NEEDS",
    navLogo: navLogo,
    backgroundImage: unicornBackground,
  };

  const offerProps = {
    offerTitle: "NEW YEAR OFFER",
    offerDesc: "50% DISCOUNT ON CONTRACTING",
  };

  const services = [
    {
      serviceName: "Building Repair work",
      serviceImage: buildRepair,
    },
    {
      serviceName: "Structural Strengthening & Retrofitting",
      serviceImage: structRetro,
    },
    {
      serviceName: "Waterproofing Specialists",
      serviceImage: waterproof,
    },
    {
      serviceName: "Civil Contracts",
      serviceImage: civilContract,
    },
    {
      serviceName: "Road Construction",
      serviceImage: roadConstruct,
    },
  ];

  return (
    <>
      <LandingHeroSection {...heroProps} />
      {offerAvailable ? <OfferSection {...offerProps} /> : ""}
      <USPSection />
      <LandingAboutSection />
      <ServicesSection serviceList={services} />
      <PortfolioSection />
      <TestimonialsSection />
      <ClientSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default Unicorn;
