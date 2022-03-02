import styled from "styled-components";

export const PortfolioList = styled.div`
  margin: 8rem auto;
`;

export const ControlButtons = styled.div`
  width: 90%;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15rem;
`;

export const ControlButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  font-size: 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 500;
  margin: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background: lightgray;
    color: gray;
  }
`;
