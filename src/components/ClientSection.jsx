import {
  ClientContainer,
  ClientLogo,
  ClientLogoContainer,
  ClientSectionContainer,
  Heading,
  SubHeading,
} from "./styles/ClientSection";
import Carousel from "react-elastic-carousel";

import clientLogo from "../assets/icons/client-logo.png";
import SliderArrow from "./SliderArrow";

const clients = [clientLogo, clientLogo, clientLogo, clientLogo];

function ClientSection() {
  return (
    <ClientSectionContainer>
      <Heading>Our Happy Clients</Heading>
      <SubHeading>We Build Relations Not Just Clients</SubHeading>

      <ClientContainer>
        <Carousel
          itemsToShow={3}
          showArrows
          showEmptySlots={true}
          renderArrow={SliderArrow}
          pagination={false}
        >
          <ClientLogo src={clientLogo} />
          <ClientLogo src={clientLogo} />
          <ClientLogo src={clientLogo} />
          <ClientLogo src={clientLogo} />
          <ClientLogo src={clientLogo} />
        </Carousel>
      </ClientContainer>
    </ClientSectionContainer>
  );
}

export default ClientSection;
