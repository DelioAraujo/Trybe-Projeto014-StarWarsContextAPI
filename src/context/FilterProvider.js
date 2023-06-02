import React, { useState } from 'react';
import PropTypes from 'prop-types';
import filterContext from './FilterContext';

function FilterProvider({ children }) {
  // filtro ao digitar algo ----------------------------------------------------------------

  const [planetTyped, setPlanetTyped] = useState('');

  // filtro numérico ----------------------------------------------------------------------

  const [filterState, setFilterState] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const [activeFiltersState, setActiveFiltersState] = useState([]); // aqui são adicionados todos filtros numéricos ao clicar do botão.

  // atualição da column-------------------------------------------------------------------------------------
  const originalColum = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const columnMenuUpdatedData = activeFiltersState.length !== 0
    ? originalColum.filter((column) => !activeFiltersState
      .some((filtro) => filtro.column === column))
    : originalColum;

  return (
    <filterContext.Provider
      value={ {
        planetTyped,
        setPlanetTyped,
        filterState,
        setFilterState,
        activeFiltersState,
        setActiveFiltersState,
        columnMenuUpdatedData,
      } }
    >
      { children }
    </filterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default FilterProvider;
