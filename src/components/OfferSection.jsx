import React from "react";
import {
  OfferBtn,
  OfferContainer,
  OfferDesc,
  OfferTitle,
} from "./styles/OfferSection";

import sale from "../assets/images/sale.png";

function OfferSection({ offerTitle, offerDesc }) {
  return (
    <OfferContainer background={sale}>
      <OfferTitle>{offerTitle}</OfferTitle>
      <OfferDesc>{offerDesc}</OfferDesc>
      <OfferBtn>GET OFFER</OfferBtn>
    </OfferContainer>
  );
}

export default OfferSection;
