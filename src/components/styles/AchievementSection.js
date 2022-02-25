import styled from "styled-components";
import acheivementBackground from "../../assets/images/acheivement-background.png";

export const AchievementSectionContainer = styled.div`
  position: relative;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  margin: 3rem auto;
  margin-top: 5rem;
`;

export const AcheivementList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 5rem; */
`;

export const AcheivementContainer = styled.div`
  width: 15rem;
  text-align: center;
  margin: 5rem;
`;

export const AcheivementIcon = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`;

export const AcheivementNumber = styled.p`
  font-size: 3rem;
  font-weight: 600;
  line-height: 0.6;
`;

export const AcheivementName = styled.p`
  font-size: 3.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const AcheivementBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${acheivementBackground});
  z-index: -1;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.15;
  /* background-position-y: 50px; */
`;
