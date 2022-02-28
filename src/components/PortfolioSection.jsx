import React from "react";
import Portfolio from "./Portfolio";
import {
  Heading,
  PortfolioList,
  PortfolioSectionContainer,
  SubHeading,
} from "./styles/PortfolioSection";

function PortfolioSection() {
  return (
    <PortfolioSectionContainer>
      <Heading>OUR PORTFOLIO</Heading>
      <SubHeading>Have a look on projects under our belt</SubHeading>

      <PortfolioList>
        <Portfolio />
      </PortfolioList>
    </PortfolioSectionContainer>
  );
}

export default PortfolioSection;
