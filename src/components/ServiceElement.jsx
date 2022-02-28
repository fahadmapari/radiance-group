import React from "react";
import { Service, ServiceImage, ServiceLabel } from "./styles/ServicesSection";

function ServiceElement({ image, label }) {
  return (
    <Service>
      <ServiceImage src={image} />
      <ServiceLabel>{label}</ServiceLabel>
    </Service>
  );
}

export default ServiceElement;
