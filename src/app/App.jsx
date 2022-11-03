import { ReactFigure } from '../components';
import reactLogo, { ReactComponent as ReactLogo } from '../assets/react.svg';

const App = () => (
  <div className="App">
    <img src={reactLogo} alt="React" />
    <ReactLogo role="img" aria-label="React" />
    <ReactLogo title="React" />
    {/* <ReactFigure /> */}
  </div>
);

export default App;
