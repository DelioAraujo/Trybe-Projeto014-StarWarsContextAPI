import { useEffect, useState } from 'react';

function useTableFetch() {
  const [tableData, setTableData] = useState([]); // cria o estado local

  const fetchData = async () => {
    const response = await fetch('https://swapi.dev/api/planets'); // faz a requisição
    const data = await response.json();
    const data2 = data.results.map(((objeto) => { // para cada elemento do array, é retornado o mesmo elemento sem a chave residents.
      delete objeto.residents;
      return objeto;
    }));
    setTableData(data2); // coloca o novo array dentro do estado local "tableData"
  };

  useEffect(() => {
    fetchData(); // executa a função fetchData como se fosse um componentDidMount.
  }, []);

  return {
    tableData, // retorna o estado local para que possa ser acessado em outros componentes.
  };
}

export default useTableFetch;
