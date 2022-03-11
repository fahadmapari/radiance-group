import styled from "styled-components";
import heroBackground from "../../assets/images/hero-background.jpg";

export const FragDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${heroBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.85;
  }
`;

export const HeroContentConatiner = styled.div`
  text-align: center;
  color: white;
  position: relative;
  z-index: 3;
`;

export const HeroHeading = styled.h2`
  font-weight: 200;
  font-size: calc(5rem + 2vw);
  line-height: 0.9;
`;

export const HeroSubHeading = styled.h2`
  font-weight: 500;
  font-size: calc(5rem + 1.5vw);
`;

export const HeroButton = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  border: 2px solid transparent;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  margin: 3rem;
  padding: 1rem 1.5rem;
  display: inline-block;
  border-radius: 35px;
  transition: all 150ms ease-in;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background: transparent;
  }
`;
