import {
  BrandName,
  CompanyNavlinkConatiner,
  Logo,
  LogoContainer,
  NavbarContainer,
  NavCompaines,
  NavCompany,
  Navlink,
  NavlinkConatiner,
  Navlinks,
} from "./styles/Navbar";

import logoIcon from "../assets/icons/radiance-logo-hori.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo src={logoIcon} />
      </LogoContainer>

      <Navlinks>
        <NavlinkConatiner>
          <Navlink to="/">Home</Navlink>
        </NavlinkConatiner>
        <CompanyNavlinkConatiner>
          <Navlink to="#">Companies</Navlink>
          <NavCompaines>
            <NavCompany to="/radiance-consultant">
              Radiance Consultant
            </NavCompany>
            <NavCompany to="/unicorn-enterprises">
              Unicorn Enterprises
            </NavCompany>
            <NavCompany to="/">Radiance Interiors</NavCompany>
          </NavCompaines>
        </CompanyNavlinkConatiner>
        <NavlinkConatiner>
          <Navlink to="/portfolio">Portfolio</Navlink>
        </NavlinkConatiner>
        <NavlinkConatiner>
          <Navlink to="/testimonials">Testimonials</Navlink>
        </NavlinkConatiner>
        <NavlinkConatiner>
          <Navlink to="/about-us">About us</Navlink>
        </NavlinkConatiner>
        <NavlinkConatiner>
          <Navlink to="/contact">Contact</Navlink>
        </NavlinkConatiner>
      </Navlinks>
    </NavbarContainer>
  );
}

export default Navbar;
