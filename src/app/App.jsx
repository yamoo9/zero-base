import './App.scss';
import { number } from 'prop-types';
import { BinaryCalculator } from '@/components';
import { ThemeProvider } from '@/contexts/theme';

function App({ numberOfButtons }) {
  return (
    <ThemeProvider>
      <div className="App">
        <BinaryCalculator numberOfButtons={numberOfButtons} />
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {
  numberOfButtons: number.isRequired,
};

export default App;
