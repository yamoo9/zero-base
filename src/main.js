import App from './app/App.js';
import { STATUS } from './components/index.js';

const { StrictMode } = React;
const { createRoot } = ReactDOM;

const container = document.getElementById('root');
const reactDomRoot = createRoot(container);

function render(status) {
  reactDomRoot.render(
    <StrictMode>
      <App status={status} />
    </StrictMode>
  );
}

const TIMEOUT = 2400;
const statusList = Object.values(STATUS);

let statusIndex = 0;
let { length } = statusList;

function animate() {
  let status = statusList[statusIndex];
  statusIndex = ++statusIndex % length;
  render(status);
  setTimeout(animate, TIMEOUT);
}

animate();
