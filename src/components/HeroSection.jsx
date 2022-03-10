import { Link } from "react-router-dom";
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
          <Link to="/radiance-consultant">
            <HeroButton>Radiance Consultant</HeroButton>
          </Link>
          <Link to="/unicorn-enterprises">
            <HeroButton>Unicorn Enterprises</HeroButton>
          </Link>
          <Link to="/">
            <HeroButton>Radiance Interiors</HeroButton>
          </Link>
        </HeroContentConatiner>
      </HeroContainer>
    </FragDiv>
  );
}

export default HeroSection;
