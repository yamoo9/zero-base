import { RandomCountUp } from './components/RandomCountUp.js';
import { reloadBrowser } from './helpers/reloadBrowser.js';
import { getRandomCount } from './helpers/getRandomCount.js';


// FPS = Frame per Seconds
// 24~30 FPS
// 60 FPS
const FPS = 30;

const MIN = 30;
const MAX = 60;
const TARGET_COUNT = getRandomCount(MIN, MAX);

let count = 0;

document.title = `(${TARGET_COUNT}) ${document.title}`;

const container = document.getElementById('root');
const ReactDomRoot = ReactDOM.createRoot(container);

reloadBrowser(document.querySelector('.reloadButton'));

function render(count, isComplete) {
  ReactDomRoot.render(
    <React.StrictMode>
      <RandomCountUp count={count} isComplete={isComplete} />
    </React.StrictMode>
  );
}

function animate() {
  // animate 함수가 호출될 때 마다 수행해야 할 것?
  // count 값 변화
  count += 1;
  // 파생(derived) 상태
  let isComplete = count >= TARGET_COUNT;
  render(count, isComplete);
  if (isComplete) {
    clearInterval(clearIntervalId);
    console.log('animation completed');
  }
}

let clearIntervalId = setInterval(animate, 1000 / FPS);
