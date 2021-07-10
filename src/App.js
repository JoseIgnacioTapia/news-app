import { useState } from 'react';
import Nav from './components/Nav';
import './App.css';

function App() {
  const [countrySelected, saveCountrySelected] = useState(null);
  const [optionSelected, saveOptionSelected] = useState(null);

  return (
    <div className="container">
      <Nav
        saveOptionSelected={saveOptionSelected}
        saveCountrySelected={saveCountrySelected}
      />
    </div>
  );
}

export default App;
