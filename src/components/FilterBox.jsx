import React from "react";
import {
  Filter,
  FilterContainer,
  FilterHeading,
  FilterList,
} from "./styles/FilterBox";

function FilterBox({activeCompany = "none"}) {


  return (
    <FilterContainer>
      <FilterHeading>Filter by company</FilterHeading>
      <FilterList>
        <Filter active={activeCompany === "unicorn-enterprises" ? true :  false}>Unicorn Enterprises</Filter>
        <Filter active={activeCompany === "radiance-consultant" ? true :  false}>Radiance Consultant</Filter>
        <Filter active={activeCompany === "radiance-interiors" ? true :  false}>Radiance Interiors</Filter>
      </FilterList>
    </FilterContainer>
  );
}

export default FilterBox;
