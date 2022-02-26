import {
  BrandName,
  Logo,
  LogoContainer,
  NavbarContainer,
  Navlink,
  NavlinkConatiner,
  Navlinks,
} from "./styles/LandingNavbar";

import logoIcon from "../assets/icons/logo-icon.png";

function LandingNavbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo src={logoIcon} />
      </LogoContainer>

      <Navlinks>
        <NavlinkConatiner>
          <Navlink>Home</Navlink>
        </NavlinkConatiner>
        <NavlinkConatiner>
          <Navlink>Services</Navlink>
        </NavlinkConatiner>
        <NavlinkConatiner>
          <Navlink>Portfolio</Navlink>
        </NavlinkConatiner>
        <NavlinkConatiner>
          <Navlink>Testimonials</Navlink>
        </NavlinkConatiner>
        <NavlinkConatiner>
          <Navlink>About us</Navlink>
        </NavlinkConatiner>
        <NavlinkConatiner>
          <Navlink>Contact</Navlink>
        </NavlinkConatiner>
      </Navlinks>
    </NavbarContainer>
  );
}

export default LandingNavbar;
