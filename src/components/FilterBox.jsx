import React from 'react'
import { Filter, FilterContainer, FilterHeading, FilterList } from './styles/FilterBox'

function FilterBox() {
  return (
    <FilterContainer>
        <FilterHeading>Filter By Company</FilterHeading>
        <FilterList>
            <Filter>Unicorn Enterprises</Filter>
            <Filter>Radiance Consultant</Filter>
            <Filter>Radiance Interiors</Filter>
        </FilterList>
    </FilterContainer>
  )
}

export default FilterBox