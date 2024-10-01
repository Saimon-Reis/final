import React from 'react';
import Item from './Item';

function ItemList({ items, deleteItem }) {
  return (
    <ul className="item-list">
      {items.map(item => (
        <Item key={item.id} content={item} deleteItem={deleteItem} />
      ))}
    </ul>
  );
}

export default ItemList;