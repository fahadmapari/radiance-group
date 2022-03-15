import React from "react";
import { Link } from "react-router-dom";
import {
  Filter,
  FilterContainer,
  FilterHeading,
  FilterList,
} from "./styles/FilterBox";

function FilterBox({ path, activeCompany = "none" }) {
  return (
    <FilterContainer>
      <FilterHeading>Filter by company</FilterHeading>
      <FilterList>
        <Link to={`/${path}?company=unicorn-enterprises`}>
          <Filter
            active={activeCompany === "unicorn-enterprises" ? true : false}
          >
            Unicorn Enterprises
          </Filter>
        </Link>
        <Link to={`/${path}?company=radiance-consultant`}>
          <Filter
            active={activeCompany === "radiance-consultant" ? true : false}
          >
            Radiance Consultant
          </Filter>
        </Link>
        <Link to={`/${path}?company=radiance-interiors`}>
          <Filter
            active={activeCompany === "radiance-interiors" ? true : false}
          >
            Radiance Interiors
          </Filter>
        </Link>
      </FilterList>
    </FilterContainer>
  );
}

export default FilterBox;
