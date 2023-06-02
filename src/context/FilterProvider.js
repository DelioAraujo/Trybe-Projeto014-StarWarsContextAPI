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

  const [activeFiltersState, setActiveFiltersState] = useState([]);
  // -------------------------------------------------------------------------------------
  return (
    <filterContext.Provider
      value={ {
        planetTyped,
        setPlanetTyped,
        filterState,
        setFilterState,
        activeFiltersState,
        setActiveFiltersState,
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
