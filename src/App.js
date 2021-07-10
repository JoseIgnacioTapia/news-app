import { useState } from 'react';
import Nav from './components/Nav';
import Message from './components/Message';
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
      {countrySelected === '' ? (
        <Message msg="You must enter a country" bgColor="#dc3545" />
      ) : null}
    </div>
  );
}

export default App;
