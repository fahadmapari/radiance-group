import React from "react";
import {
  Heading,
  ServiceElementLeft,
  ServiceElementRight,
  ServiceList,
  ServiceSectionConatiner,
} from "./styles/ServicesSection";

import serviceLeftElement from "../assets/icons/service-element.png";

import structArch from "../assets/images/struct-arch.png";
import structAudit from "../assets/images/struct-audit.png";
import projManCon from "../assets/images/project-management-consultant.png";
import buildRepair from "../assets/images/building-repair.png";
import costEstimate from "../assets/images/cost-estimate.png";
import drainage from "../assets/images/drainage.png";

import ServiceElement from "./ServiceElement";

function ServicesSection() {
  return (
    <ServiceSectionConatiner>
      <Heading>SERVICES WE OFFER</Heading>

      <ServiceList>
        <ServiceElement
          image={structArch}
          label="Structural Design & Architectural Designing"
        />
        <ServiceElement image={structAudit} label="Structural Audit" />
        <ServiceElement
          image={projManCon}
          label="Project Management Consultant"
        />
        <ServiceElement
          image={buildRepair}
          label="Building repair consultant."
        />
        <ServiceElement
          image={costEstimate}
          label="Cost Estimators for Construction Projects"
        />
        <ServiceElement image={drainage} label="Drainage Plumbing Consultant" />
      </ServiceList>

      <ServiceElementLeft src={serviceLeftElement} />
      <ServiceElementRight src={serviceLeftElement} />
    </ServiceSectionConatiner>
  );
}

export default ServicesSection;
