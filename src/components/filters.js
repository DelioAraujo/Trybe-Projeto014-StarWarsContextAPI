import React, { useContext } from 'react';
import filterContext from '../context/FilterContext';

function Filters() {
  const {
    planetTyped,
    setPlanetTyped,
    filterState,
    setFilterState,
    setActiveFiltersState,
    columnMenuUpdatedData,
  } = useContext(filterContext);

  const handleInputChange = (event) => {
    setPlanetTyped(event.target.value);
  };

  const handleColumnChange = (event) => {
    setFilterState((prevState) => ({
      ...prevState,
      column: event.target.value,
    }));
  };

  const handleComparisonChange = (event) => {
    setFilterState((prevState) => ({
      ...prevState,
      comparison: event.target.value,
    }));
  };

  const handleValueChange = (event) => {
    setFilterState((prevState) => ({
      ...prevState,
      value: event.target.value,
    }));
  };

  const handleApplyFilter = () => {
    setActiveFiltersState((prevState) => [
      ...prevState,
      filterState,
    ]);
  };

  return (
    <form>

      <label>
        Planet
        <input
          type="text"
          data-testid="name-filter"
          name="search-planet-input"
          value={ planetTyped }
          onChange={ handleInputChange }
        />
      </label>

      <label>
        Column
        <select
          data-testid="column-filter"
          value={ filterState.column }
          onChange={ handleColumnChange }
        >
          {columnMenuUpdatedData.map((column, index) => (
            <option key={ index } value={ column }>
              {column}
            </option>
          ))}
        </select>
      </label>

      <label>
        Comparison
        <select
          data-testid="comparison-filter"
          value={ filterState.comparison }
          onChange={ handleComparisonChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label>
        Value
        <input
          type="number"
          data-testid="value-filter"
          value={ filterState.value }
          onChange={ handleValueChange }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleApplyFilter }
      >
        Apply Filter
      </button>
    </form>
  );
}

export default Filters;
