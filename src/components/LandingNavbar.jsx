import { Link } from "react-router-dom";
import {
  BrandName,
  Logo,
  LogoContainer,
  NavbarContainer,
  Navlink,
  NavlinkConatiner,
  Navlinks,
} from "./styles/LandingNavbar";

const defaultNavLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Testimonials",
    link: "/testimonials",
  },
  {
    name: "About",
    link: "/about-us",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

function LandingNavbar({ navLogo, top, links = defaultNavLinks }) {
  return (
    <NavbarContainer top={top}>
      <LogoContainer>
        <Logo src={navLogo} />
      </LogoContainer>

      <Navlinks>
        {links.map((link) => (
          <NavlinkConatiner key={link.name}>
            <Navlink to={link.link}>{link.name}</Navlink>
          </NavlinkConatiner>
        ))}
      </Navlinks>
    </NavbarContainer>
  );
}

export default LandingNavbar;
