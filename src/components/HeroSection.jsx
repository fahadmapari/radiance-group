import Navbar from "./Navbar";
import {
  FragDiv,
  HeroButton,
  HeroContainer,
  HeroContentConatiner,
  HeroHeading,
  HeroSubHeading,
} from "./styles/HeroSection";

function HeroSection() {
  return (
    <FragDiv>
      <Navbar />
      <HeroContainer>
        <HeroContentConatiner>
          <HeroHeading>Radiance Group</HeroHeading>
          <HeroSubHeading>Enlightening Your Dreams</HeroSubHeading>
          <HeroButton>Radiance Consultant</HeroButton>
          <HeroButton>Unicorn Enterprises</HeroButton>
          <HeroButton>Radiance Interiors</HeroButton>
        </HeroContentConatiner>
      </HeroContainer>
    </FragDiv>
  );
}

export default HeroSection;
