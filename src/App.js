import React from 'react';
import './App.css';
import TableProvider from './context/TableProvider';
import Table from './components/table';

function App() {
  return (
    <div>
      <TableProvider>
        <Table />
      </TableProvider>
    </div>
  );
}

export default App;
