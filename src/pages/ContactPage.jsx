import React from "react";
import LandingNavbar from "../components/LandingNavbar";
import navLogo from "../assets/icons/logo-icon.png";
import ContactSection from "../components/ContactSection";
import {
  Address,
  AddressContainer,
  AddressHeading,
  BackgroundElement,
  ContactDetailContainer,
  ContactDetails,
  ContactIcon,
  ContactInfo,
  ContactInfoContainer,
  ContactInfoHeading,
  ContactText,
  MapContainer,
} from "../components/styles/ContactPage";

import emailIcon from "../assets/icons/email-icon.svg";
import phoneIcon from "../assets/icons/phone-icon.svg";

import contactBackgroundElement from "../assets/images/contact-background-element.png";
import FooterSection from "../components/FooterSection";

function ContactPage() {
  return (
    <>
      <LandingNavbar navLogo={navLogo} top={true} />
      <ContactSection />
      <ContactDetailContainer>
        <ContactDetails>
          <AddressContainer>
            <AddressHeading>Address</AddressHeading>
            <Address>
              306, Sultana Apt, E wing near Firdous tower, Pintya Dada nagar,
              Amrut Nagar, Mumbra, Thane, Maharashtra 400612
            </Address>
          </AddressContainer>

          <ContactInfoContainer>
            <ContactInfoHeading>Contact</ContactInfoHeading>
            <ContactInfo>
              <ContactIcon src={phoneIcon} />
              <ContactText>+91 8104722247</ContactText>
            </ContactInfo>
            <ContactInfo>
              <ContactIcon src={emailIcon} />
              <ContactText>info@radiance.in</ContactText>
            </ContactInfo>
          </ContactInfoContainer>
        </ContactDetails>
        <BackgroundElement src={contactBackgroundElement} />
      </ContactDetailContainer>

      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30151.006053036643!2d73.0199657455223!3d19.156915063308016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfe3a9802f93%3A0x54b463a6d6f0cf50!2sRADIANCE%20-%20Civil%20Engineering%20%26%20Contracting%20Firm!5e0!3m2!1sen!2sin!4v1646593783829!5m2!1sen!2sin"
          width="1920"
          height="600"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </MapContainer>
      <FooterSection />
    </>
  );
}

export default ContactPage;
