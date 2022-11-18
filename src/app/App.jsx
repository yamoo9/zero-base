import './App.scss';
import { useState } from 'react';
import { number } from 'prop-types';
import { BinaryCalculator } from '@/components';
import { ThemeContext, lightTheme /* darkTheme */ } from '@/contexts/theme';

function App({ numberOfButtons }) {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme: setTheme,
      }}
    >
      <div className="App">
        <BinaryCalculator numberOfButtons={numberOfButtons} />
      </div>
    </ThemeContext.Provider>
  );
}

App.propTypes = {
  numberOfButtons: number.isRequired,
};

export default App;
