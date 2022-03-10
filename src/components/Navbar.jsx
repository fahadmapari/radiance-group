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
          <Navlink>Home</Navlink>
        </NavlinkConatiner>
        <CompanyNavlinkConatiner>
          <Navlink>Companies</Navlink>
          <NavCompaines>
            <NavCompany>
              <Link to="/radiance-consultant">Radiance Consultant</Link>
            </NavCompany>
            <NavCompany>
              <Link to="/unicorn-enterprises">Unicorn Enterprises</Link>
            </NavCompany>
            <NavCompany>Radiance Interiors</NavCompany>
          </NavCompaines>
        </CompanyNavlinkConatiner>
        <NavlinkConatiner>
          <Link to="/portfolio">
            <Navlink>Portfolio</Navlink>
          </Link>
        </NavlinkConatiner>
        <NavlinkConatiner>
          <Link to="/testimonials">
            <Navlink>Testimonials</Navlink>
          </Link>
        </NavlinkConatiner>
        <NavlinkConatiner>
          <Navlink>About us</Navlink>
        </NavlinkConatiner>
        <NavlinkConatiner>
          <Link to="/contact">
            <Navlink>Contact</Navlink>
          </Link>
        </NavlinkConatiner>
      </Navlinks>
    </NavbarContainer>
  );
}

export default Navbar;
