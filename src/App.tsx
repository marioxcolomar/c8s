import React from 'react';
import './App.css';
import C8Icon from './components/c8-icon';

const App: React.FC = () => {
  return (
    <div className="App">
      <C8Icon from='cm' to='inches' />
      <C8Icon from='kmh' to='mph' />
    </div>
  );
}

export default App;
