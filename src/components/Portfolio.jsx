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

function Portfolio({image,title ,clientLogo, clientName, text}) {
  return (
    <PortfolioContainer>
      <ImageContainer>
        <PortfolioImage src={image} />
      </ImageContainer>

      <PortfolioContent>
        <PortfolioHeading>{title}</PortfolioHeading>
        <ClientContainer>
          <ClientLogo src={clientLogo} />
          <ClientName>{clientName}</ClientName>
        </ClientContainer>
        <PortfolioText>{text}</PortfolioText>
      </PortfolioContent>
    </PortfolioContainer>
  );
}

export default Portfolio;
