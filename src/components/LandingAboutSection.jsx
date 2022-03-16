import React from "react";
import {
  AboutHeading,
  AboutImage,
  AboutImageContainer,
  AboutText,
  AboutTextContainer,
  LandingAboutContainer,
} from "./styles/LandingAboutSection";

import aboutImage from "../assets/images/about-image.png";

function LandingAboutSection() {
  return (
    <LandingAboutContainer id="about">
      <AboutImageContainer>
        <AboutImage src={aboutImage} />
      </AboutImageContainer>

      <AboutTextContainer>
        <AboutHeading>ABOUT US</AboutHeading>
        <AboutText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
          corrupti? Voluptatem, odit optio commodi aperiam totam numquam enim
          voluptatibus blanditiis ducimus vel culpa. Minima labore consequuntur
          obcaecati nulla similique, dolor placeat, repellendus quis quasi
          facilis consectetur, atque accusamus laudantium nesciunt.
        </AboutText>
      </AboutTextContainer>
    </LandingAboutContainer>
  );
}

export default LandingAboutSection;
