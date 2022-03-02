import navLogo from "../assets/icons/logo-icon.png";
import LandingNavbar from "../components/LandingNavbar";
import PageBanner from "../components/PageBanner";

import pageBannerImage from "../assets/images/testi-background.png";
import FilterBox from "../components/FilterBox";

function TestimonialsPage() {
  return (
    <>
      <LandingNavbar navLogo={navLogo} top={true} />
      <PageBanner
        bannnerHeading="TESTIMONIALS"
        bannerSubHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        background={pageBannerImage}
      />
      <FilterBox />
    </>
  );
}

export default TestimonialsPage;
