import {
  BrandName,
  Logo,
  LogoContainer,
  NavbarContainer,
  Navlink,
  NavlinkConatiner,
  Navlinks,
} from "./styles/Navbar";

import logoIcon from "../assets/icons/radiance-logo-hori.png";

function Navbar() {
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
          <Navlink>Companies</Navlink>
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

export default Navbar;
