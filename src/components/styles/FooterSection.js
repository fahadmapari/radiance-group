import styled from "styled-components";

export const Footer = styled.footer``;

export const FooterContentContainer = styled.div`
  position: relative;
  background: #3a3a3a;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 2rem ${({ theme }) => theme.paddings.sides};
`;

export const FooterContent = styled.div`
  margin: 2rem 0rem;
`;

export const FooterHeading = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

export const FooterList = styled.ul`
  list-style: none;
`;

export const FooterItem = styled.li`
  margin: 1rem 0rem;

  & a {
    font-size: 2rem;
    cursor: pointer;
    transition: all 100ms ease-out;
  }

  & a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterSocials = styled.div``;

export const FooterSocial = styled.img`
  width: 8rem;
  margin: 0.5rem;
  margin-left: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FooterImage = styled.img`
  position: absolute;
  right: 5%;
  bottom: 0%;
  opacity: 0.3;
  width: 30%;
  z-index: 1;
  pointer-events: none;
`;

export const BottomFooter = styled.div`
  background: #343434;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem ${({ theme }) => theme.margins.sides};
`;

export const FooterLogo = styled.img`
  width: 8rem;
`;

export const FooterText = styled.p`
  color: white;
  font-size: 2rem;
`;

export const FooterCerts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterCert = styled.img`
  width: 8rem;
`;
