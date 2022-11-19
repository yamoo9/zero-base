import './App.scss';
import { BinaryCalculator } from '@/components';
import { GlobalStyles } from '@/styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BinaryCalculator numberOfButtons={5} />
    </div>
  );
}

export default App;
