import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navegacao } from './router.js';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacao />
  </React.StrictMode>
);
