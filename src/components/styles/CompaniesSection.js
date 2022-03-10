import styled from "styled-components";

export const CompaniesSectionCoatiner = styled.div`
  background: ${({ theme }) => theme.colors.lightBackground};
  overflow: auto;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  margin: 3rem auto;
`;

export const CardList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  flex-wrap: wrap;
`;

export const InfoBox = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  transition: all 100ms ease-in;
  transform: translateY(100%);
`;

export const Info = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
`;

export const MoreInfo = styled.a`
  font-size: 1.8rem;
  text-decoration: underline;
  font-weight: 500;
  transition: all 150ms ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Card = styled.div`
  width: 35rem;
  background: white;
  box-shadow: 0px 9px 27px -15px rgba(0, 0, 0, 0.86);
  -webkit-box-shadow: 0px 9px 27px -15px rgba(0, 0, 0, 0.86);
  -moz-box-shadow: 0px 9px 27px -15px rgba(0, 0, 0, 0.86);
  padding: 2rem 4rem;
  margin: 5rem;
  border-radius: 25px;
  position: relative;
  overflow: hidden;

  &:hover ${InfoBox} {
    transform: translateY(0);
  }
`;

export const LogoContainer = styled.div`
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2rem;
  width: 100%;
`;

export const Logo = styled.img`
  width: 100%;
  padding: 5rem;
`;

export const CompanyName = styled.h2`
  font-weight: 700;
  font-size: 2.3rem;
  text-align: center;
  display: block;
`;
