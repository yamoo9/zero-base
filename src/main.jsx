import './styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClickToComponent } from 'click-to-react-component';
import App from './app/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App numberOfButtons={7} />
    <ClickToComponent />
  </StrictMode>
);
