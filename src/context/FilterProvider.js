import React, { useState } from 'react';
import PropTypes from 'prop-types';
import filterContext from './FilterContext';

function FilterProvider({ children }) {
  const [planetTyped, setPlanetTyped] = useState('');

  return (
    <filterContext.Provider value={ { planetTyped, setPlanetTyped } }>
      { children }
    </filterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default FilterProvider;
