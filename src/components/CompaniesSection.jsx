import CompanyCard from "./CompanyCard";
import radianceLogo from "../assets/icons/logo-icon.png";
import unicornLogo from "../assets/icons/unicorn-logo.png";
import {
  CardList,
  CompaniesSectionCoatiner,
  Heading,
} from "./styles/CompaniesSection";

function CompaniesSection() {
  return (
    <CompaniesSectionCoatiner>
      <Heading>Radiance Group Companies</Heading>
      <CardList>
        <CompanyCard
          name="Radiance Consultant"
          logo={radianceLogo}
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, inventore!"
        />
        <CompanyCard
          name="Unicorn Enterprises"
          logo={unicornLogo}
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, inventore!"
        />
        <CompanyCard
          name="Radiance Interiors"
          logo={radianceLogo}
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, inventore!"
        />
      </CardList>
    </CompaniesSectionCoatiner>
  );
}

export default CompaniesSection;
