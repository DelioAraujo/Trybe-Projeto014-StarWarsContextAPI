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
    setActiveFiltersState((prevState) => [...prevState, filterState]);

    setFilterState((prevState) => {
      const updatedColumnMenu = columnMenuUpdatedData
        .filter((column) => column !== prevState.column);

      return {
        ...prevState,
        column: updatedColumnMenu.length > 0 ? updatedColumnMenu[0] : prevState.column,
        value: '',
      };
    });
  };

  const handleRemoveFilter = (index) => {
    setActiveFiltersState((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };

  const handleResetFilters = () => {
    setActiveFiltersState([]);
  };

  return (
    <div>
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
      <button
        type="button"
        onClick={ handleResetFilters }
        data-testid="button-remove-filters"
      >
        Reset Filters
      </button>

      <ul style={ { listStyleType: 'none' } }>
        {activeFiltersState.map((filter, index) => (
          <li key={ index } data-testid="filter">
            <span>
              {filter.column}
              {' '}
              {filter.comparison}
              {' '}
              {filter.value}
              <button
                type="button"
                onClick={ () => handleRemoveFilter(index) }
              >
                Remover
              </button>
            </span>
          </li>
        ))}
      </ul>

    </div>

  );
}

export default Filters;
