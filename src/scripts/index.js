import 'regenerator-runtime'; /* for async await transpile */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import swRegister from './helpers/sw-register';
import '../styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

window.addEventListener('load', () => {
  swRegister();
});
