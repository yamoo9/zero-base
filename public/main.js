import { RandomCountUp } from './components/RandomCountUp.js';
import { reloadBrowser } from './helpers/reloadBrowser.js';
import { getRandomCount } from './helpers/getRandomCount.js';
var FPS = 30;
var MIN = 30;
var MAX = 60;
var TARGET_COUNT = getRandomCount(MIN, MAX);
var count = 0;
document.title = "(" + TARGET_COUNT + ") " + document.title;
var container = document.getElementById('root');
var ReactDomRoot = ReactDOM.createRoot(container);
reloadBrowser(document.querySelector('.reloadButton'));

function render(count, isComplete) {
  ReactDomRoot.render(React.createElement(React.StrictMode, null, React.createElement(RandomCountUp, {
    count: count,
    isComplete: isComplete
  })));
}

function animate() {
  count += 1;
  var isComplete = count >= TARGET_COUNT;
  render(count, isComplete);

  if (isComplete) {
    clearInterval(clearIntervalId);
    console.log('animation completed');
  }
}

var clearIntervalId = setInterval(animate, 1000 / FPS);
//# sourceMappingURL=main.js.map