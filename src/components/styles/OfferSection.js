import styled from "styled-components";

export const OfferContainer = styled.div`
  width: 90%;
  height: calc(10rem + 60vh);
  margin: 10rem auto;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50px;
  position: relative;
  color: white;
  padding: 5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50px;
    top: 0;
    left: 0;
  }
`;

export const OfferTitle = styled.h3`
  position: relative;
  z-index: 2;
  font-size: 6rem;
`;

export const OfferDesc = styled.p`
  position: relative;
  z-index: 2;
  font-weight: 400;
  font-size: 5rem;
`;

export const OfferBtn = styled.a`
  position: relative;
  z-index: 2;
  font-size: 5rem;
  font-style: 800;
  background: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1.5rem;
  border-radius: 40px;
  transition: all 100ms ease-in-out;
  display: inline-block;
  margin-top: 4rem;
  align-self: flex-start;

  &:hover {
    opacity: 0.8;
  }
`;
