import { useState, useEffect } from 'react';

function DataTable() {
  const [data, setData] = useState();
  const status = [
    'Pendente de confirmação',
    'Pedido confirmado',
    'Não reconhece o pedido',
    'Mercadoria não recebida',
    'Recebida com avaria',
    'Devolvida',
    'Recebida com devolução parcial',
    'Recebida e confirmada',
    'Pagamento Autorizado',
  ];

  const getData = async () => {
    const res = await fetch('http://localhost:3001/rota');
    const dados = await res.json();
    setData(dados);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
        </tr>
      </thead>

      <tbody>
        {data &&
          data.map((item, key) => (
            <tr key={key}>
              <td>{item.nNf}</td>
              <td>{item.buyerId}</td>
              <td>{item.providerId}</td>
              <td>{item.emissionDate}</td>
              <td>{item.value}</td>
              <td>{status[item.orderStatusBuyer]}</td>
              <td>
                <button>Dados do cedente</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default DataTable;
