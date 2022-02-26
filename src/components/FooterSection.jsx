import React from 'react'
import { Footer, FooterContent, FooterContentContainer, FooterHeading, FooterImage, FooterItem, FooterList } from '../components/styles/FooterSection';
import footerImage from "../assets/icons/footer-element.svg";

function FooterSection() {
  return (
    <Footer>
        <FooterContentContainer>
            <FooterContent>
                <FooterHeading>Radiance Group</FooterHeading>
                <FooterList>
                    <FooterItem>Home</FooterItem>
                    <FooterItem>About</FooterItem>
                    <FooterItem>Porfolio</FooterItem>
                    <FooterItem>Testimonials</FooterItem>
                    <FooterItem>Contact</FooterItem>
                </FooterList>
            </FooterContent>

            <FooterContent>
                <FooterHeading>Radiance Consultant</FooterHeading>
                <FooterList>
                    <FooterItem>Home</FooterItem>
                    <FooterItem>Services</FooterItem>
                    <FooterItem>About</FooterItem>
                    <FooterItem>Porfolio</FooterItem>
                    <FooterItem>Testimonials</FooterItem>
                    <FooterItem>Contact</FooterItem>
                </FooterList>
            </FooterContent>

            <FooterContent>
                <FooterHeading>Unicorn Enterprises</FooterHeading>
                <FooterList>
                    <FooterItem>Home</FooterItem>
                    <FooterItem>Services</FooterItem>
                    <FooterItem>About</FooterItem>
                    <FooterItem>Porfolio</FooterItem>
                    <FooterItem>Testimonials</FooterItem>
                    <FooterItem>Contact</FooterItem>
                </FooterList>
            </FooterContent>

            <FooterContent>
                <FooterHeading>Radiance Interiors</FooterHeading>
                <FooterList>
                    <FooterItem>Home</FooterItem>
                    <FooterItem>Services</FooterItem>
                    <FooterItem>About</FooterItem>
                    <FooterItem>Porfolio</FooterItem>
                    <FooterItem>Testimonials</FooterItem>
                    <FooterItem>Contact</FooterItem>
                </FooterList>
            </FooterContent>

            <FooterImage src={footerImage} />
        </FooterContentContainer>
    </Footer>
  )
}

export default FooterSection