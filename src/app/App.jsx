import './App.scss';
import { number } from 'prop-types';
import { BinaryCalculator } from '../components';

function App({ numberOfButtons }) {
  return (
    <div className="App">
      <BinaryCalculator numberOfButtons={numberOfButtons} />
    </div>
  );
}

App.propTypes = {
  numberOfButtons: number.isRequired,
};

export default App;
