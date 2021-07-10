import { useState } from 'react';
import Nav from './components/Nav';
import './App.css';

function App() {
  const [optionSelected, saveOptionSelected] = useState(null);

  return (
    <div className="container">
      <Nav saveOptionSelected={saveOptionSelected} />
    </div>
  );
}

export default App;
