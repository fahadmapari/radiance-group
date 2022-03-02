import React from "react";
import {
  Filter,
  FilterContainer,
  FilterHeading,
  FilterList,
} from "./styles/FilterBox";

function FilterBox() {
  return (
    <FilterContainer>
      <FilterHeading>Filter by company</FilterHeading>
      <FilterList>
        <Filter>Unicorn Enterprises</Filter>
        <Filter active={true}>Radiance Consultant</Filter>
        <Filter>Radiance Interiors</Filter>
      </FilterList>
    </FilterContainer>
  );
}

export default FilterBox;
