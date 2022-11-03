import { ReactFigure } from '@/components';
import reactLogo, { ReactComponent as ReactLogo } from '@/assets/react.svg';

const App = () => (
  <div className="App">
    <ReactFigure />
    <img src={reactLogo} alt="React" />
    <ReactLogo role="img" aria-label="React" />
    <ReactLogo title="React" />
  </div>
);

export default App;
