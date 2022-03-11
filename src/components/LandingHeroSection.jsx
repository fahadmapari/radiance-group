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

import heroBackgroundElement from "../assets/icons/landing-element.png";

function LandingHeroSection({
  heading,
  subHeading,
  backgroundImage,
  navLogo,
  navLinks,
}) {
  return (
    <FragDiv>
      <LandingNavbar navLogo={navLogo} links={navLinks} />
      <HeroContainer background={backgroundImage}>
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
