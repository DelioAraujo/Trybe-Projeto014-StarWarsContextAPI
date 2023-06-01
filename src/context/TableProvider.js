// aqui vamos criar o "estado global"
import PropTypes from 'prop-types';
import tableContext from './TableContext';
import useTableFetch from '../hooks/useTableFetch';

function TableProvider({ children }) {
  const { tableData } = useTableFetch();
  // console.log(tableData);
  // const values = { tableData };

  return (
    <tableContext.Provider value={ tableData }>
      { children }
    </tableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default TableProvider;
