import styled from "styled-components";

export const ContactDetailContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightBackground};
  position: relative;
  padding-top: 45rem;
  padding-bottom: 15rem;
  margin-top: -355px;
  z-index: -1;
`;

export const ContactDetails = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
`;

export const AddressContainer = styled.div``;

export const AddressHeading = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
`;

export const Address = styled.p`
  font-size: 2.5rem;
  max-width: 70rem;
`;

export const ContactInfoContainer = styled.div`
  align-self: flex-end;
`;

export const ContactInfoHeading = styled.h2`
  font-size: 5rem;
  text-align: right;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
  margin-top: 0rem;
`;

export const ContactIcon = styled.img`
  width: 6rem;
  margin-right: 2rem;
`;

export const ContactText = styled.p`
  font-size: 2.5rem;
`;

export const BackgroundElement = styled.img`
  width: 35%;
  position: absolute;
  bottom: 0%;
  left: 20%;
  opacity: 0.3;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 600px;

  & iframe {
    width: 100%;
    height: 100%;
  }
`;
