import styled from "styled-components";

export const PortfolioSectionContainer = styled.div`
  margin-top: 15rem;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  margin: 3rem auto;
  margin-bottom: 0rem;
`;

export const SubHeading = styled.h3`
  text-align: center;
  font-size: 5rem;
  font-weight: 300;
  margin: 0rem auto;
  /* line-height: 0.2; */
  margin-bottom: 5rem;
`;

export const PortfolioList = styled.div`
  margin: 5rem 0rem;
`;

export const PortfolioContainer = styled.div`
  width: 90%;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ImageContainer = styled.div`
  grid-column: span 1;
`;

export const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const PortfolioContent = styled.div`
  grid-column: span 2;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 1.5rem 3rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const PortfolioHeading = styled.h4`
  font-size: 3rem;
`;

export const ClientContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
`;

export const ClientLogo = styled.img`
  width: 6rem;
  border-radius: 50%;
  padding: 0.5rem;
  background: white;
  position: relative;
  z-index: 2;
`;

export const ClientName = styled.p`
  font-size: 2rem;
  background: ${({ theme }) => theme.colors.lightBackground};
  padding: 0.5rem 2.5rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-left: -8px;
`;

export const PortfolioText = styled.p`
  font-size: 2rem;
  width: 80%;
`;
