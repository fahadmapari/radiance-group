import styled from "styled-components";

export const ServiceSectionConatiner = styled.div`
  background: #f9f9f9;
  margin-top: 15rem;
  position: relative;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  margin: 3rem auto;
  padding-top: 5rem;
`;

export const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  justify-items: center;
  padding: 10rem ${({ theme }) => theme.margins.sides};
  grid-gap: 5rem;
`;

export const Service = styled.div`
  max-width: 45rem;
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: all 150ms ease-in-out;

  &:hover {
    transform: translateY(-2%);
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 28rem;
  object-fit: cover;
`;

export const ServiceLabel = styled.p`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  margin-top: -5px;
`;

export const ServiceElementLeft = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

export const ServiceElementRight = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: scaleX(-1);
`;
