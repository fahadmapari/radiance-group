import React from "react";
import Portfolio from "./Portfolio";
import {
  Heading,
  PortfolioList,
  PortfolioSectionContainer,
  SubHeading,
} from "./styles/PortfolioSection";

import portfolioImage from "../assets/images/portfolio-example.png";
import clientLogo from "../assets/icons/client-logo.png";
import { ViewMore } from "./styles/TestimonialsSection";

function PortfolioSection() {
  return (
    <PortfolioSectionContainer>
      <Heading>OUR PORTFOLIO</Heading>
      <SubHeading>Have a look on projects under our belt</SubHeading>

      <PortfolioList>
        <Portfolio 
          image={portfolioImage} 
          title="Mumbra Building repair work"
          clientLogo={clientLogo}
          clientName="OYO"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vestibulum sodales, purus nec hendrerit porta, felis arcu 
          pulvinar velit, a gravida nibh nulla vel nibh."
        />

        <Portfolio 
          image={portfolioImage} 
          title="Mumbra Building repair work"
          clientLogo={clientLogo}
          clientName="OYO"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vestibulum sodales, purus nec hendrerit porta, felis arcu 
          pulvinar velit, a gravida nibh nulla vel nibh."
        />
      </PortfolioList>
      <ViewMore>VIEW ALL</ViewMore>
    </PortfolioSectionContainer>
  );
}

export default PortfolioSection;
