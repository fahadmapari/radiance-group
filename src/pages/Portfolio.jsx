import LandingNavbar from "../components/LandingNavbar";
import navLogo from "../assets/icons/logo-icon.png";
import PageBanner from "../components/PageBanner";

import pageBanner from "../assets/images/portfolio-banner.png";
import FilterBox from "../components/FilterBox";

function Portfolio() {
  return (
    <>
      <LandingNavbar navLogo={navLogo} top={true} />
      <PageBanner 
        bannnerHeading="OUR PORTFOLIO" 
        bannerSubHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        background={pageBanner}
      />
      <FilterBox />
    </>
  );
}

export default Portfolio;
