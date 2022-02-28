import React from "react";
import {
  Heading,
  USPBox,
  USPContainer,
  USPIcon,
  USPImage,
  USPLabel,
  USPSectionContainer,
} from "./styles/USPSection";

import uspElement from "../assets/icons/usp-element.png";
import uspIcon from "../assets/icons/usp-icon.png";

function USPSection() {
  return (
    <USPSectionContainer background={uspElement}>
      <Heading>WHY CHOOSE US</Heading>

      <USPContainer>
        <USPBox>
          <USPIcon src={uspIcon} />
          <USPLabel>USP</USPLabel>
        </USPBox>

        <USPBox>
          <USPIcon src={uspIcon} />
          <USPLabel>USP</USPLabel>
        </USPBox>

        <USPBox>
          <USPIcon src={uspIcon} />
          <USPLabel>USP</USPLabel>
        </USPBox>

        <USPBox>
          <USPIcon src={uspIcon} />
          <USPLabel>USP</USPLabel>
        </USPBox>

        <USPBox>
          <USPIcon src={uspIcon} />
          <USPLabel>USP</USPLabel>
        </USPBox>
      </USPContainer>
      <USPImage src={uspElement} />
    </USPSectionContainer>
  );
}

export default USPSection;
