import React, { useState } from 'react';
import PropTypes from 'prop-types';
import filterContext from './FilterContext';

function FilterProvider({ children }) {
  const [planetTyped, setPlanetTyped] = useState('');
  const [filterState, setFilterState] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const [activeFiltersState, setActiveFiltersState] = useState({
    column: '',
    comparison: '',
    value: undefined,
  });

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
