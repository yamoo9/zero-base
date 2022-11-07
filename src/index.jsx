import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import { StrictMode } from 'react';
import { render } from 'react-dom';

import 'styles/global.css';
import App from 'app/App';

console.log(process.env);

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// CASE 1.
// const reportWebVitals = require('./reportWebVitals');

// CASE 2.
import('./reportWebVitals').then(({ default: reportWebVitals }) =>
  reportWebVitals(console.table)
);

// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
