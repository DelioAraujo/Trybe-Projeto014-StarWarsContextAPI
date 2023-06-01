import React from 'react';
import './App.css';
import TableProvider from './context/TableProvider';
import FilterProvider from './context/FilterProvider';
import Table from './components/table';
import Filters from './components/filters';

function App() {
  return (
    <div>
      <FilterProvider>
        <TableProvider>
          <Filters />
          <Table />
        </TableProvider>
      </FilterProvider>
    </div>
  );
}

export default App;
