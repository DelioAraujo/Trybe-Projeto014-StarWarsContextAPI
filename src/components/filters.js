import React, { useContext } from 'react';
import filterContext from '../context/FilterContext';

function Filters() {
  const { planetTyped, setPlanetTyped } = useContext(filterContext);

  const handleInputChange = (event) => {
    setPlanetTyped(event.target.value);
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
    </form>
  );
}

export default Filters;
