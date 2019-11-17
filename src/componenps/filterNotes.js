import React from "react";

const FilterNote = ({ filter, onFilterChange }) => (
  <>
    <span>Filter: </span>
    <input type="text" value={filter} onChange={onFilterChange} />
  </>
);

export default FilterNote;
