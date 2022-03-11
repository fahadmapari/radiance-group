import LandingNavbar from "../components/LandingNavbar";
import navLogo from "../assets/icons/logo-icon.png";
import {
  AboutCardLogo,
  AboutCardOne,
  AboutCards,
  AboutCardThree,
  AboutCardTwo,
  AboutFeatureCard1,
  AboutFeatureCard2,
  AboutFeatureCard3,
  AboutFeatureCardHead,
  AboutFeatureCards,
  AboutFeatureCardText,
  AboutFeatureElement,
  AboutFeatureHeading,
  AboutFeaturesSection,
  AboutFeatureSubHeading,
  AboutHeading,
  AboutPageTopSection,
  AboutText,
  TeamCard,
  TeamCards,
  TeamHeading,
  TeamImage,
  TeamInfoContainer,
  TeamName,
  TeamPosition,
  TeamSection,
} from "../components/styles/AboutPage";

import radianceLogo from "../assets/icons/logo-icon.png";
import unicornLogo from "../assets/icons/unicorn-logo.png";
import { useRef } from "react";

import featureElement from "../assets/images/about-feature-element.png";
import person from "../assets/images/person.jpg";

import FooterSection from "../components/FooterSection";

function AboutPage() {
  const cardOneRef = useRef(null);
  const cardTwoRef = useRef(null);
  const cardThreeRef = useRef(null);

  const hoverCardAnimation = (element) => {
    if (element === "cardOne") {
      cardOneRef.current.style.transform = "translateY(-10%)";
      cardTwoRef.current.style.transform = "translatex(40%)";
      return;
    }

    if (element === "cardTwo") {
      cardTwoRef.current.style.transform = "translateY(-10%)";
      cardOneRef.current.style.transform = "rotateZ(-10deg)";
      cardThreeRef.current.style.transform = "rotateZ(10deg)";
      return;
    }

    if (element === "cardThree") {
      cardThreeRef.current.style.transform = "translateY(-10%)";
      cardTwoRef.current.style.transform = "translateX(-40%)";
    }
    return;
  };

  const hoverCardAnimationExit = (element) => {
    if (element === "cardOne") {
      cardOneRef.current.style.transform = "translateY(0%)";
      cardTwoRef.current.style.transform = "translatex(0%)";
      return;
    }

    if (element === "cardTwo") {
      cardTwoRef.current.style.transform = "translateY(0%)";
      cardOneRef.current.style.transform = "rotateZ(0deg)";
      cardThreeRef.current.style.transform = "rotateZ(0deg)";
      return;
    }

    if (element === "cardThree") {
      cardThreeRef.current.style.transform = "translateY(0%)";
      cardTwoRef.current.style.transform = "translateX(0%)";
    }
    return;
  };

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
          <AboutCardOne
            onMouseEnter={(e) => hoverCardAnimation("cardOne")}
            onMouseLeave={(e) => hoverCardAnimationExit("cardOne")}
            ref={cardOneRef}
          >
            <AboutCardLogo src={radianceLogo} />
          </AboutCardOne>
          <AboutCardTwo
            onMouseEnter={(e) => hoverCardAnimation("cardTwo")}
            onMouseLeave={(e) => hoverCardAnimationExit("cardTwo")}
            ref={cardTwoRef}
          >
            <AboutCardLogo src={unicornLogo} />
          </AboutCardTwo>
          <AboutCardThree
            onMouseEnter={(e) => hoverCardAnimation("cardThree")}
            onMouseLeave={(e) => hoverCardAnimationExit("cardThree")}
            ref={cardThreeRef}
          >
            <AboutCardLogo src={radianceLogo} />
          </AboutCardThree>
        </AboutCards>
      </AboutPageTopSection>

      <AboutFeaturesSection>
        <AboutFeatureHeading>
          WE ARE EXPERIENCED IN THE BUSINESS
        </AboutFeatureHeading>
        <AboutFeatureSubHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Nullam mollis fermentum scelerisque.
        </AboutFeatureSubHeading>
        <AboutFeatureCards>
          <AboutFeatureCard1>
            <AboutFeatureCardHead>OUR MISSION</AboutFeatureCardHead>
            <AboutFeatureCardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AboutFeatureCardText>
          </AboutFeatureCard1>

          <AboutFeatureCard2>
            <AboutFeatureCardHead>OUR VISION</AboutFeatureCardHead>
            <AboutFeatureCardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AboutFeatureCardText>
          </AboutFeatureCard2>

          <AboutFeatureCard3>
            <AboutFeatureCardHead>OUR VALUES</AboutFeatureCardHead>
            <AboutFeatureCardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AboutFeatureCardText>
          </AboutFeatureCard3>
        </AboutFeatureCards>

        <AboutFeatureElement src={featureElement} />
      </AboutFeaturesSection>

      <TeamSection>
        <TeamHeading>MEET THE TEAM AT RADIANCE</TeamHeading>

        <TeamCards>
          <TeamCard>
            <TeamImage src={person} />

            <TeamInfoContainer>
              <TeamName>John Doe</TeamName>
              <TeamPosition>Founder</TeamPosition>
            </TeamInfoContainer>
          </TeamCard>

          <TeamCard>
            <TeamImage src={person} />

            <TeamInfoContainer>
              <TeamName>John Doe</TeamName>
              <TeamPosition>Founder</TeamPosition>
            </TeamInfoContainer>
          </TeamCard>

          <TeamCard>
            <TeamImage src={person} />

            <TeamInfoContainer>
              <TeamName>John Doe</TeamName>
              <TeamPosition>Founder</TeamPosition>
            </TeamInfoContainer>
          </TeamCard>

          <TeamCard>
            <TeamImage src={person} />

            <TeamInfoContainer>
              <TeamName>John Doe</TeamName>
              <TeamPosition>Founder</TeamPosition>
            </TeamInfoContainer>
          </TeamCard>
        </TeamCards>
      </TeamSection>

      <FooterSection />
    </>
  );
}

export default AboutPage;
