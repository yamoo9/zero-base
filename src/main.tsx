import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './app/App';

const container = document.getElementById('root');

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
