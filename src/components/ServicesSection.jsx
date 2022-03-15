import React from "react";
import {
  Heading,
  ServiceElementLeft,
  ServiceElementRight,
  ServiceList,
  ServiceSectionConatiner,
} from "./styles/ServicesSection";

import serviceLeftElement from "../assets/icons/service-element.png";

import ServiceElement from "./ServiceElement";

function ServicesSection({ serviceList }) {
  return (
    <ServiceSectionConatiner id="services">
      <Heading>SERVICES WE OFFER</Heading>

      <ServiceList>
        {serviceList.map((service) => (
          <ServiceElement
            image={service.serviceImage}
            label={service.serviceName}
            key={service.serviceName}
          />
        ))}
      </ServiceList>

      <ServiceElementLeft src={serviceLeftElement} />
      <ServiceElementRight src={serviceLeftElement} />
    </ServiceSectionConatiner>
  );
}

export default ServicesSection;
