import { BannerHeading, BannerSubHeading, PageBannerContainer } from "./styles/PageBanner";


function PageBanner({bannnerHeading, bannerSubHeading, background}) {
  return <PageBannerContainer background={background}>
    <BannerHeading>{bannnerHeading}</BannerHeading>
    <BannerSubHeading>{bannerSubHeading}</BannerSubHeading>
  </PageBannerContainer>;
}

export default PageBanner;
