import React, { useState } from 'react';

function Form({ addItem }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicione um item"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default Form;