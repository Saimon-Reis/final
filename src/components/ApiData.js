import React from 'react';

function ApiData({ data }) {
  return (
    <div className="api-data">
      <h2>Dados da API</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}></li>  
        ))}
      </ul>
    </div>
  );
}

export default ApiData;