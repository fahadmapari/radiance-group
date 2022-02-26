import React from "react";
import {
  BottomFooter,
  Footer,
  FooterCert,
  FooterCerts,
  FooterContent,
  FooterContentContainer,
  FooterHeading,
  FooterImage,
  FooterItem,
  FooterList,
  FooterLogo,
  FooterSocial,
  FooterSocials,
  FooterText,
} from "../components/styles/FooterSection";
import footerImage from "../assets/icons/footer-element.svg";
import logo from "../assets/icons/logo-icon.png";
import iaf from "../assets/icons/iaf.png";
import iso from "../assets/icons/iso.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import twitter from "../assets/icons/twitter.png";
import facebook from "../assets/icons/facebook.png";

function FooterSection() {
  return (
    <Footer>
      <FooterContentContainer>
        <FooterContent>
          <FooterHeading>Radiance Group</FooterHeading>
          <FooterList>
            <FooterItem>
              <a> Home</a>
            </FooterItem>
            <FooterItem>
              <a> About</a>
            </FooterItem>
            <FooterItem>
              <a> Porfolio</a>
            </FooterItem>
            <FooterItem>
              <a>Testimonials</a>
            </FooterItem>
            <FooterItem>
              <a> Contact </a>
            </FooterItem>
          </FooterList>
        </FooterContent>

        <FooterContent>
          <FooterHeading>Radiance Consultant</FooterHeading>
          <FooterList>
            <FooterItem>
              <a>Home</a>
            </FooterItem>
            <FooterItem>
              <a>Services</a>
            </FooterItem>
            <FooterItem>
              <a>About</a>
            </FooterItem>
            <FooterItem>
              <a>Porfolio</a>
            </FooterItem>
            <FooterItem>
              <a>Testimonials</a>
            </FooterItem>
            <FooterItem>
              <a>Contact</a>
            </FooterItem>
          </FooterList>
        </FooterContent>

        <FooterContent>
          <FooterHeading>Unicorn Enterprises</FooterHeading>
          <FooterList>
            <FooterItem>
              <a>Home</a>
            </FooterItem>
            <FooterItem>
              <a>Services</a>
            </FooterItem>
            <FooterItem>
              <a>About</a>
            </FooterItem>
            <FooterItem>
              <a>Porfolio</a>
            </FooterItem>
            <FooterItem>
              <a>Testimonials</a>
            </FooterItem>
            <FooterItem>
              <a>Contact</a>
            </FooterItem>
          </FooterList>
        </FooterContent>

        <FooterContent>
          <FooterHeading>Radiance Interiors</FooterHeading>
          <FooterList>
            <FooterItem>
              <a>Home</a>
            </FooterItem>
            <FooterItem>
              <a>Services</a>
            </FooterItem>
            <FooterItem>
              <a>About</a>
            </FooterItem>
            <FooterItem>
              <a>Porfolio</a>
            </FooterItem>
            <FooterItem>
              <a>Testimonials</a>
            </FooterItem>
            <FooterItem>
              <a>Contact</a>
            </FooterItem>
          </FooterList>
        </FooterContent>

        <FooterContent>
          <FooterHeading>Our Socials</FooterHeading>
          <FooterSocials>
            <FooterSocial src={instagram} />
            <FooterSocial src={linkedin} />
          </FooterSocials>
          <FooterSocials>
            <FooterSocial src={facebook} />
            <FooterSocial src={twitter} />
          </FooterSocials>
        </FooterContent>

        <FooterImage src={footerImage} />
      </FooterContentContainer>

      <BottomFooter>
        <FooterLogo src={logo} />
        <FooterText>
          Copyright © 2021 Radiance Group. All Rights Reserved
        </FooterText>
        <FooterCerts>
          <FooterCert src={iaf} />
          <FooterCert src={iso} />
        </FooterCerts>
      </BottomFooter>
    </Footer>
  );
}

export default FooterSection;
