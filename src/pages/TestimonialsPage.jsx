import navLogo from "../assets/icons/logo-icon.png";
import LandingNavbar from "../components/LandingNavbar";
import PageBanner from "../components/PageBanner";

import pageBannerImage from "../assets/images/testi-background.png";
import FilterBox from "../components/FilterBox";
import {
  Testimonial,
  TestimonialClientCompany,
  TestimonialClientImage,
  TestimonialClientInfo,
  TestimonialClientName,
  TestimonialClientPosition,
  TestimonialContent,
  TestimonialsPageSection,
} from "../components/styles/TestimonialsPage";

import person from "../assets/images/person.jpg";

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

      <TestimonialsPageSection>
        <Testimonial>
          <TestimonialContent></TestimonialContent>
          <TestimonialClientInfo>
            <TestimonialClientImage src={person} />
            <div>
              <TestimonialClientName>John Doe</TestimonialClientName>
              <TestimonialClientPosition>CEO</TestimonialClientPosition>
              <span>, </span>
              <TestimonialClientCompany>Company</TestimonialClientCompany>
            </div>
          </TestimonialClientInfo>
        </Testimonial>

        <Testimonial>
          <TestimonialContent></TestimonialContent>
          <TestimonialClientInfo>
            <TestimonialClientImage src={person} />
            <div>
              <TestimonialClientName>John Doe</TestimonialClientName>
              <TestimonialClientPosition>CEO</TestimonialClientPosition>
              <span>, </span>
              <TestimonialClientCompany>Company</TestimonialClientCompany>
            </div>
          </TestimonialClientInfo>
        </Testimonial>

        <Testimonial>
          <TestimonialContent></TestimonialContent>
          <TestimonialClientInfo>
            <TestimonialClientImage src={person} />
            <div>
              <TestimonialClientName>John Doe</TestimonialClientName>
              <TestimonialClientPosition>CEO</TestimonialClientPosition>
              <span>, </span>
              <TestimonialClientCompany>Company</TestimonialClientCompany>
            </div>
          </TestimonialClientInfo>
        </Testimonial>

        <Testimonial>
          <TestimonialContent></TestimonialContent>
          <TestimonialClientInfo>
            <TestimonialClientImage src={person} />
            <div>
              <TestimonialClientName>John Doe</TestimonialClientName>
              <TestimonialClientPosition>CEO, </TestimonialClientPosition>
              <TestimonialClientCompany>Company</TestimonialClientCompany>
            </div>
          </TestimonialClientInfo>
        </Testimonial>
      </TestimonialsPageSection>
    </>
  );
}

export default TestimonialsPage;
