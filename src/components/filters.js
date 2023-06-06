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
    setActiveFiltersState((prevState) => [
      ...prevState,
      filterState,
    ]);
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

        {/* <label>
          Ordenar
          <select
            data-testid="column-sort"
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

        <label htmlFor="column-sort-input-asc">
          Ordenação:
        </label>
        <label>
          <input
            type="radio"
            id="column-sort-input-asc"
            data-testid="column-sort-input-asc"
            value="ASC"
            checked={ filterState.sort === 'ASC' }
            onChange={ (event) => setFilterState((prevState) => ({
              ...prevState,
              sort: event.target.value,
            })) }
          />
          Crescente
        </label>
        <label>
          <input
            type="radio"
            id="column-sort-input-desc"
            data-testid="column-sort-input-desc"
            value="DESC"
            checked={ filterState.sort === 'DESC' }
            onChange={ (event) => setFilterState((prevState) => ({
              ...prevState,
              sort: event.target.value,
            })) }
          />
          Decrescente
        </label> */}

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
