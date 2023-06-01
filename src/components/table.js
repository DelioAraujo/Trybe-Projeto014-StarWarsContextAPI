import React, { useContext } from 'react';
import tableContext from '../context/TableContext';

function Table() {
  const { tableData } = useContext(tableContext);
  //   console.log(tableData);

  if (tableData.length === 0) {
    return <span>Carregando...</span>;
  }

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(tableData[0]).map((key) => (
            <th key={ key }>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData, index) => (
          <tr key={ index }>
            {Object.values(rowData).map((value, index2) => (
              <td key={ index2 }>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
