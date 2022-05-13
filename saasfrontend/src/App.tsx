import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header />
      <p>Loaded</p>
    </div>
  );
}

export default App;
