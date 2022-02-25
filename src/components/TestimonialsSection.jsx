import React, { useState } from "react";
import {
  Heading,
  MainVideo,
  PlayButton,
  TestimonialsSectionConatiner,
  Video,
  VideoGrid,
  VideoLayer,
  VideoOverlay,
  VidePlayer,
  ViewMore,
} from "./styles/TestimonialsSection";
import playButton from "../assets/icons/play-circle.png";

function TestimonialsSection() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayVideoSrc, setOverlayVideoSrc] = useState("");

  return (
    <TestimonialsSectionConatiner>
      <Heading>Testimonials</Heading>
      <VideoGrid>
        <MainVideo onClick={() => setShowOverlay(true)}>
          <VideoLayer />
          <PlayButton src={playButton} />
        </MainVideo>
        <Video>
          <VideoLayer />
          <PlayButton src={playButton} />
        </Video>
        <Video>
          <VideoLayer />
          <PlayButton src={playButton} />
        </Video>
        <Video>
          <VideoLayer />
          <PlayButton src={playButton} />
        </Video>
        <Video>
          <VideoLayer />
          <PlayButton src={playButton} />
        </Video>
      </VideoGrid>

      <ViewMore>View More</ViewMore>
      {showOverlay ? (
        <VideoOverlay onClick={() => setShowOverlay(false)}>
          <VidePlayer preload="metadata" controls>
            <source
              src="https://mazwai.com/videvo_files/video/free/2019-03/small_watermarked/190111_15_Misc_UHD_01_preview.webm#t=0.5"
              type="video/webm"
            />
          </VidePlayer>
        </VideoOverlay>
      ) : (
        ""
      )}
    </TestimonialsSectionConatiner>
  );
}

// function VideoElement() {
//   return(

//   )
// }

export default TestimonialsSection;
