import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import filterContext from './FilterContext';
import tableContext from './TableContext';
import useTableFetch from '../hooks/useTableFetch';

function TableProvider({ children }) {
  // tableData é o retorno da API com TODOS os planetas.
  const { tableData } = useTableFetch();
  // planetType é a string capturada ao se digitar no imput Planet da barra de filtros.
  const { planetTyped } = useContext(filterContext);
  let filteredData = tableData;
  // se for digitado ago, tableData é filtrado e mostrará apenas as chaves com nome que contenham o que foi digitado. mesmo que parcialmente.
  if (planetTyped !== '') {
    const planetTypedLowerCase = planetTyped.toLowerCase();
    filteredData = tableData.filter((item) => item
      .name.toLowerCase()
      .includes(planetTypedLowerCase));
  }

  return (
    // se filteredData existir, tableData terá o valor de filteredData, se não, tableData terá o valor original.
    <tableContext.Provider value={ { tableData: filteredData } }>
      { children }
    </tableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default TableProvider;
