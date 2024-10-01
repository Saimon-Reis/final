import React from 'react';

function Item({ content, deleteItem }) {
  return (
    <li className="item">
      {content.title}  {/* Aqui renderizamos apenas o campo title */}
      <button onClick={() => deleteItem(content.id)}>Excluir</button>
    </li>
  );
}

export default Item;