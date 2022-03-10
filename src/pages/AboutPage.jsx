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

function AboutPage() {
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
          <AboutCardOne>
            <AboutCardLogo src={radianceLogo} />
          </AboutCardOne>
          <AboutCardTwo>
            <AboutCardLogo src={unicornLogo} />
          </AboutCardTwo>
          <AboutCardThree>
            <AboutCardLogo src={radianceLogo} />
          </AboutCardThree>
        </AboutCards>
      </AboutPageTopSection>
    </>
  );
}

export default AboutPage;
