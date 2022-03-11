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
  font-size: 2.5rem;
  margin-right: 1rem;
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

export const AboutFeaturesSection = styled.div`
  background: ${({ theme }) => theme.colors.lightBackground};
  padding-top: 8rem;
  position: relative;
`;

export const AboutFeatureHeading = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const AboutFeatureSubHeading = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  margin-top: 1rem;
  position: relative;
  z-index: 2;
`;

export const AboutFeatureCards = styled.div`
  display: flex;
  justify-content: center;
  padding: 10rem 0rem;
  padding-bottom: 25rem;
  position: relative;
  z-index: 2;
`;

export const AboutFeatureCard1 = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: 35rem;
  border-radius: 25px;
  padding: 1rem 2rem;
  margin: 0rem 5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;
export const AboutFeatureCard2 = styled(AboutFeatureCard1)`
  transform: translateY(40%);
`;
export const AboutFeatureCard3 = styled(AboutFeatureCard1)`
  transform: translateY(80%);
`;

export const AboutFeatureCardHead = styled.h3`
  font-size: 2.5rem;
  padding: 1rem 0rem;
`;

export const AboutFeatureCardText = styled.p`
  font-size: 2rem;
  padding-bottom: 3rem;
`;

export const AboutFeatureElement = styled.img`
  position: absolute;
  bottom: 0;
  right: 1%;
  z-index: 1;
  opacity: 0.2;
`;

export const TeamSection = styled.div``;

export const TeamHeading = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
  padding-top: 10rem;
`;

export const TeamCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10rem 0rem;
`;

export const TeamCard = styled.div`
  text-align: center;
  margin: 1rem 5rem;
`;

export const TeamImage = styled.img`
  border-radius: 50%;
  width: 20rem;
  margin-bottom: -7rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const TeamInfoContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 2rem 5rem;
  padding-top: 8rem;
`;

export const TeamName = styled.h3`
  font-size: 3rem;
`;

export const TeamPosition = styled.p`
  font-size: 2rem;
`;
