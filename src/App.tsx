import React from 'react';
import './App.css';
import C8Icon from './components/c8-icon';
import Distance from './components/distance/distance';

const App: React.FC = () => {
  return (
    <div className="App">
      <C8Icon from='cm' to='inches' />
      <Distance
        trigger={
          <C8Icon from='kmh' to='mph' />
        }
      />
    </div>
  );
}

export default App;
