import React from "react";
import {
  ClientContainer,
  ClientLogo,
  ClientName,
  ImageContainer,
  PortfolioContainer,
  PortfolioContent,
  PortfolioHeading,
  PortfolioImage,
  PortfolioText,
} from "./styles/PortfolioSection";

function Portfolio() {
  return (
    <PortfolioContainer>
      <ImageContainer>
        <PortfolioImage />
      </ImageContainer>

      <PortfolioContent>
        <PortfolioHeading></PortfolioHeading>
        <ClientContainer>
          <ClientLogo />
          <ClientName></ClientName>
        </ClientContainer>
        <PortfolioText></PortfolioText>
      </PortfolioContent>
    </PortfolioContainer>
  );
}

export default Portfolio;
