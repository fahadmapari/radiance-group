import styled from "styled-components";
import uspElement from "../../assets/icons/usp-element.png";

export const USPSectionContainer = styled.div`
  margin: 15rem ${({ theme }) => theme.margins.sides};
  position: relative;
  background-image: ${uspElement};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const USPImage = styled.img`
  position: absolute;
  width: 70rem;
  opacity: 0.2;
  z-index: -1;
  left: 15%;
  bottom: -260px;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  margin: 3rem auto;
`;

export const USPContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const USPBox = styled.div`
  text-align: center;
  margin: 3rem;
`;

export const USPIcon = styled.img`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const USPLabel = styled.p`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  margin: 1rem 0rem;
`;
