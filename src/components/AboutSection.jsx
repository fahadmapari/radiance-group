import {
  AboutContent,
  AboutLogo,
  AboutSectionConatiner,
  AboutText,
  Line1,
  Line2,
  ReadMore,
  ReadMoreContainer,
} from "./styles/AboutSection";
import logo from "../assets/icons/logo-icon.png";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <AboutSectionConatiner>
      <AboutLogo src={logo} />

      <AboutContent>
        <AboutText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          sequi enim laborum adipisci nihil aspernatur quas, fugiat ipsam fugit
          ea quos eius porro impedit modi unde numquam laboriosam nulla dolore
          at. Fugit iste quo ipsum tempore voluptatum aut obcaecati sed impedit
          aliquam alias sequi, veritatis, culpa doloremque doloribus ab
          asperiores.
        </AboutText>
        <ReadMoreContainer>
          <ReadMore to="/about-us">Know More</ReadMore>

          <Line1 />
          <Line2 />
        </ReadMoreContainer>
      </AboutContent>
    </AboutSectionConatiner>
  );
}

export default AboutSection;
