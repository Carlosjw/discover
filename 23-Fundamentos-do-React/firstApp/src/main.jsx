import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.css';

import { Home } from './pages/Home';
/* Não há necessidade de dizer que o arquivo importado é o 'index.jsx' porque ele já vai procurar um arquivo com esse nome dentro da pasta 'Home'*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
