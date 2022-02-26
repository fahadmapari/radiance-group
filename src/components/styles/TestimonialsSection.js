import styled from "styled-components";

export const TestimonialsSectionConatiner = styled.div`
  background: ${({ theme }) => theme.colors.lightBackground};
  overflow: auto;
  padding: 0rem ${({ theme }) => theme.margins.sides};
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  margin: 3rem auto;
`;

export const VideoGrid = styled.div`
  min-height: 400px;
  max-width: 1366px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 0rem auto;
  margin-bottom: 5rem;
`;
export const Video = styled.div`
  background: lightgray;
  position: relative;
  cursor: pointer;
`;

export const MainVideo = styled(Video)`
  grid-column: span 2;
  grid-row: span 2;
`;

export const VideoLayer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
`;

export const PlayButton = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ViewMore = styled.a`
  font-size: 3rem;
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 2rem;
  border-radius: 35px;
  display: inline-block;
  margin: 0rem auto;
  margin-bottom: 5rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.primary};
  transition: all 150ms ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export const VideoOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  /* opacity: 0.95; */
  z-index: 3;
  top: 0;
  left: 0;
`;

export const VidePlayer = styled.video`
  width: 80% !important;
  height: auto;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 1rem;
`;
