import {
  BrandName,
  Logo,
  LogoContainer,
  NavbarContainer,
  Navlink,
  NavlinkConatiner,
  Navlinks,
} from "./styles/LandingNavbar";

function LandingNavbar({ navLogo, top }) {
  return (
    <NavbarContainer top={top}>
      <LogoContainer>
        <Logo src={navLogo} />
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
