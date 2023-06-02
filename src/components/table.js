import React, { useContext } from 'react';
import tableContext from '../context/TableContext';

function Table() {
  const { tableData } = useContext(tableContext);
  // console.log(tableData);

  if (tableData.length === 0) {
    return <span>Carregando...</span>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
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
