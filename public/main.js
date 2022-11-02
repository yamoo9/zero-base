import App from './app/App.js';
import { STATUS } from './components/index.js';
var _React = React,
    StrictMode = _React.StrictMode;
var _ReactDOM = ReactDOM,
    createRoot = _ReactDOM.createRoot;
var container = document.getElementById('root');
var reactDomRoot = createRoot(container);

function render(status) {
  reactDomRoot.render(React.createElement(StrictMode, null, React.createElement(App, {
    status: status
  })));
}

var TIMEOUT = 2400;
var statusList = Object.values(STATUS);
var statusIndex = 0;
var length = statusList.length;

function animate() {
  var status = statusList[statusIndex];
  statusIndex = ++statusIndex % length;
  render(status);
  setTimeout(animate, TIMEOUT);
}

animate();
//# sourceMappingURL=main.js.map