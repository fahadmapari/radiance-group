import { Link } from "react-router-dom";
import styled from "styled-components";
import heroBackground from "../../assets/images/about-background.png";

export const AboutSectionConatiner = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(${heroBackground});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center 100px;
    opacity: 0.18;
    z-index: -1;
  }
`;

export const AboutLogo = styled.img`
  max-width: 35rem;
  display: block;
`;

export const AboutContent = styled.div`
  max-width: 800px;
  margin-left: 10rem;
`;

export const AboutText = styled.p`
  font-size: 3rem;
  font-weight: 500;
`;

export const ReadMoreContainer = styled.div`
  display: inline-block;
  cursor: pointer;

  &:hover span:first-of-type {
    width: 100%;
  }
  &:hover span:last-of-type {
    width: 90%;
  }
`;

export const ReadMore = styled(Link)`
  font-size: 3rem;
  font-weight: 600;
  display: inline-block;
  margin-top: 1.5rem;
`;

export const Line1 = styled.span`
  display: inline-block;
  width: 85%;
  height: 4px;
  background: ${({ theme }) => theme.colors.primary};
  transition: all 500ms ease;
`;
export const Line2 = styled(Line1)`
  width: 70%;
`;
