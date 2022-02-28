import React from "react";
import {
  OfferBtn,
  OfferContainer,
  OfferDesc,
  OfferTitle,
} from "./styles/OfferSection";

import sale from "../assets/images/sale.png";

function OfferSection() {
  return (
    <OfferContainer background={sale}>
      <OfferTitle>NEW YEAR OFFER </OfferTitle>
      <OfferDesc>50% DISCOUNT ON CONTRACTING</OfferDesc>
      <OfferBtn>GET OFFER</OfferBtn>
    </OfferContainer>
  );
}

export default OfferSection;
