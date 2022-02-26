import React from "react";
import {
  ContactForm,
  ContactFormConatiner,
  ContactSectionContainer,
  Heading,
  Input,
  InputContainer,
  InputLabel,
  MessageBox,
  MessageContainer,
  Select,
  SubmutButton,
} from "./styles/ContactSection";

function ContactSection() {
  return (
    <ContactSectionContainer>
      <Heading>Send Us A Message</Heading>
      <ContactFormConatiner>
        <ContactForm>
          <InputContainer>
            <InputLabel>Name</InputLabel>
            <Input type="text" />
          </InputContainer>

          <InputContainer>
            <InputLabel>Mobile</InputLabel>
            <Input type="tel" />
          </InputContainer>

          <InputContainer>
            <InputLabel>Email</InputLabel>
            <Input type="email" />
          </InputContainer>

          <InputContainer>
            <InputLabel>Service</InputLabel>
            <Select>
              <option value="consultation" selected>
                Consultation
              </option>
              <option value="contracting">Contracting</option>
              <option value="interior">Interior</option>
              <option value="other">Other</option>
            </Select>
          </InputContainer>

          <MessageContainer>
            <InputLabel>Message</InputLabel>
            <MessageBox></MessageBox>
          </MessageContainer>

          <MessageContainer>
            <SubmutButton>SEND</SubmutButton>
          </MessageContainer>
        </ContactForm>
      </ContactFormConatiner>
    </ContactSectionContainer>
  );
}

export default ContactSection;
