import LandingNavbar from "../components/LandingNavbar";
import navLogo from "../assets/icons/logo-icon.png";
import {
  AboutCardLogo,
  AboutCardOne,
  AboutCards,
  AboutCardThree,
  AboutCardTwo,
  AboutHeading,
  AboutPageTopSection,
  AboutText,
} from "../components/styles/AboutPage";

import radianceLogo from "../assets/icons/logo-icon.png";
import unicornLogo from "../assets/icons/unicorn-logo.png";
import { useRef } from "react";

function AboutPage() {

  const cardOneRef = useRef(null);
  const cardTwoRef = useRef(null);
  const cardThreeRef = useRef(null);


  const hoverCardAnimation = (element) => {
    if(element === "cardOne"){
      cardOneRef.current.style.transform = "translateY(-10%)";
      cardTwoRef.current.style.transform = "rotateZ(10deg)";
      cardThreeRef.current.style.transform = "rotateZ(10deg)";
      return;
    }

    if(element === "cardTwo"){
      cardTwoRef.current.style.transform = "translateY(-10%)";
      cardOneRef.current.style.transform = "rotateZ(-10deg)";
      cardThreeRef.current.style.transform = "rotateZ(10deg)";
    }

    if(element === "cardThree"){
      cardThreeRef.current.style.transform = "translateY(-20%)";
      cardOneRef.current.style.transform = "rotateZ(-10deg)";
      cardTwoRef.current.style.transform = "rotateZ(-10deg)";
    }
  }

  return (
    <>
      <LandingNavbar navLogo={navLogo} top={true} />
      <AboutPageTopSection>
        <div>
          <AboutHeading>About us</AboutHeading>
          <AboutText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ornare dui vitae vulputate eleifend. Nunc sit amet arcu euismod,
            aliquam magna a, rutrum nisl. Etiam tempus rutrum ipsum, non
            interdum dui finibus at. Vivamus eget lorem elit. Sed eu fringilla
            urna. In sed blandit lectus, sit amet bibendum risus. Maecenas
            pretium imperdiet efficitur. Nunc congue arcu non luctus maximus.{" "}
          </AboutText>
        </div>
        <AboutCards>
          <AboutCardOne onMouseEnter={(e) => hoverCardAnimation("cardOne")} ref={cardOneRef}>
            <AboutCardLogo src={radianceLogo} />
          </AboutCardOne>
          <AboutCardTwo onMouseEnter={(e) => hoverCardAnimation("cardTwo")} ref={cardTwoRef}>
            <AboutCardLogo src={unicornLogo} />
          </AboutCardTwo>
          <AboutCardThree onMouseEnter={(e) => hoverCardAnimation("cardThree")} ref={cardThreeRef}>
            <AboutCardLogo src={radianceLogo} />
          </AboutCardThree>
        </AboutCards>
      </AboutPageTopSection>
    </>
  );
}

export default AboutPage;
