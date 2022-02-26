import LandingNavbar from "./LandingNavbar";
import {
  FragDiv,
  HeroButton,
  HeroContainer,
  HeroContentConatiner,
  HeroElement,
  HeroHeading,
  HeroSubHeading,
} from "./styles/LandingHeroSection";

import landingBackground from "../assets/images/landing-background.png";

import heroBackgroundElement from "../assets/icons/landing-element.png";

function LandingHeroSection({ heading, subHeading }) {
  return (
    <FragDiv>
      <LandingNavbar />
      <HeroContainer background={landingBackground}>
        <HeroContentConatiner>
          <HeroHeading>{heading}</HeroHeading>
          <HeroSubHeading>{subHeading}</HeroSubHeading>
          <HeroButton>GET QUOTE</HeroButton>
        </HeroContentConatiner>
      </HeroContainer>

      <HeroElement src={heroBackgroundElement} />
    </FragDiv>
  );
}

export default LandingHeroSection;
