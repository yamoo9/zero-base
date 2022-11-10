import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import 'styles/global.css';
import { StrictMode } from 'react';
import App from 'app/App';

import('react-dom/client').then(({ createRoot }) => {
  createRoot(document.getElementById('root')).render(<App />);
});

if (process.env.NODE_ENV.includes('production')) {
  import('./reportWebVitals').then(({ default: reportWebVitals }) =>
    reportWebVitals(console.table)
  );
}
