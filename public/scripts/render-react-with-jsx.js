import { Headline } from './scripts/components/Headline.js';
import { ReactLogo } from './scripts/components/ReactLogo.js';

const App = () => (
  <div className="App">
    <Headline>React</Headline>
    <Headline>Vue</Headline>
    <Headline>Svelte</Headline>
    <Headline>Solid</Headline>
    <ReactLogo>React Logo</ReactLogo>
  </div>
);

const container = document.getElementById('react-root');
const ReactDomRoot = ReactDOM.createRoot(container);

ReactDomRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
