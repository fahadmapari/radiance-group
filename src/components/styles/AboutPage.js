import styled from "styled-components";

export const AboutPageTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 10rem auto;
`;

export const AboutHeading = styled.h3`
  font-size: 4rem;
`;

export const AboutText = styled.p`
  font-size: 2rem;
`;

export const AboutCards = styled.div`
  display: flex;
`;

export const AboutCardOne = styled.div`
  width: 30rem;
  height: 45rem;
  background: ${({ theme }) => theme.colors.secondary};
  margin: 0rem 1rem;
  border-radius: 35px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  transition: all 150ms ease;
`;

export const AboutCardTwo = styled(AboutCardOne)`
  margin-left: -10rem;
  z-index: 2;
`;

export const AboutCardThree = styled(AboutCardOne)`
  margin-left: -12rem;
  z-index: 1;
`;

export const AboutCardLogo = styled.img`
  width: 100%;
  padding: 3rem;
`;
