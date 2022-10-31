import { App } from './components/App.js';

const container = document.getElementById('react-root');
const ReactDomRoot = ReactDOM.createRoot(container);

ReactDomRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
