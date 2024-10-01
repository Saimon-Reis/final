import React from 'react';
import ReactDOM from 'react-dom/client'; // Alterado para o novo método de renderização
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Criar a raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
