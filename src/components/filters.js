import React, { useContext } from 'react';
import filterContext from '../context/FilterContext';

function Filters() {
  const {
    planetTyped,
    setPlanetTyped,
    filterState,
    setFilterState,
    activeFiltersState,
    setActiveFiltersState,
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
    setActiveFiltersState(filterState);
    console.log(filterState);
    console.log(activeFiltersState);
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
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
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
