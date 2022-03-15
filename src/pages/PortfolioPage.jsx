import LandingNavbar from "../components/LandingNavbar";
import navLogo from "../assets/icons/logo-icon.png";
import unicornLogo from "../assets/icons/unicorn-logo.png";
import PageBanner from "../components/PageBanner";

import pageBannerImage from "../assets/images/portfolio-banner.png";
import FilterBox from "../components/FilterBox";
import {
  ControlButton,
  ControlButtons,
  PortfolioList,
} from "../components/styles/Portfolio";
import Portfolio from "../components/Portfolio";
import FooterSection from "../components/FooterSection";

import portfolioImage from "../assets/images/portfolio-example.png";
import clientLogo from "../assets/icons/client-logo.png";
import { useSearchParams } from "react-router-dom";

function PortfolioPage() {
  const [searchParams] = useSearchParams();
  const currentCompany = searchParams.get("company");

  const customNavLinks = [
    {
      name: "Home",
      link: currentCompany !== null ? `/${currentCompany}` : "/",
    },
    {
      name: "Services",
      link:
        currentCompany !== null ? `/${currentCompany}#services` : "/services",
    },
    {
      name: "Portfolio",
      link:
        currentCompany !== null
          ? `/portfolio?company=${currentCompany}`
          : "/portfolio",
    },
    {
      name: "Testimonials",
      link:
        currentCompany !== null
          ? `/testimonials?company=${currentCompany}`
          : "/testimonials",
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

  return (
    <>
      <LandingNavbar
        navLogo={
          currentCompany === "unicorn-enterprises" ? unicornLogo : navLogo
        }
        top={true}
        links={customNavLinks}
      />
      <PageBanner
        bannnerHeading="OUR PORTFOLIO"
        bannerSubHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        background={pageBannerImage}
      />

      <FilterBox path="portfolio" activeCompany={currentCompany} />
      <PortfolioList>
        <Portfolio
          image={portfolioImage}
          title="Mumbra Building repair work"
          clientLogo={clientLogo}
          clientName="OYO"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vestibulum sodales, purus nec hendrerit porta, felis arcu 
          pulvinar velit, a gravida nibh nulla vel nibh."
        />

        <Portfolio
          image={portfolioImage}
          title="Mumbra Building repair work"
          clientLogo={clientLogo}
          clientName="OYO"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vestibulum sodales, purus nec hendrerit porta, felis arcu 
          pulvinar velit, a gravida nibh nulla vel nibh."
        />

        <Portfolio
          image={portfolioImage}
          title="Mumbra Building repair work"
          clientLogo={clientLogo}
          clientName="OYO"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vestibulum sodales, purus nec hendrerit porta, felis arcu 
          pulvinar velit, a gravida nibh nulla vel nibh."
        />
      </PortfolioList>
      <ControlButtons>
        <ControlButton disabled>PREV</ControlButton>
        <ControlButton>NEXT</ControlButton>
      </ControlButtons>

      <FooterSection />
    </>
  );
}

export default PortfolioPage;
