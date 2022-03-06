import navLogo from "../assets/icons/logo-icon.png";
import LandingNavbar from "../components/LandingNavbar";
import PageBanner from "../components/PageBanner";

import pageBannerImage from "../assets/images/testi-background.png";
import FilterBox from "../components/FilterBox";
import {
  PlayBtn,
  Testimonial,
  TestimonialClientCompany,
  TestimonialClientImage,
  TestimonialClientInfo,
  TestimonialClientName,
  TestimonialClientPosition,
  TestimonialContent,
  TestimonialsPageSection,
  TestimonialText,
  TestimonialVideo,
} from "../components/styles/TestimonialsPage";

import person from "../assets/images/person.jpg";

import playLogo from "../assets/icons/play-circle.png";
import { ControlButton, ControlButtons } from "../components/styles/Portfolio";

import FooterSection from "../components/FooterSection";

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
          <TestimonialContent>
            <TestimonialVideo></TestimonialVideo>
            <PlayBtn src={playLogo} />
          </TestimonialContent>
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
          <TestimonialContent>
            <TestimonialText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              fuga excepturi saepe consectetur obcaecati delectus omnis aperiam
              cupiditate ea deleniti. Nostrum in quam tempore, perferendis enim
              dicta quidem quod unde. Illo, facilis totam doloremque amet
              assumenda quisquam laborum, ullam atque minima sit ratione esse
              voluptatem?
            </TestimonialText>
          </TestimonialContent>
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
      <ControlButtons>
        <ControlButton disabled>PREV</ControlButton>
        <ControlButton>NEXT </ControlButton>
      </ControlButtons>
      <FooterSection />
    </>
  );
}

export default TestimonialsPage;
