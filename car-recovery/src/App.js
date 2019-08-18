import React from 'react';
import Navbar from './components/common/header/navigation/Navbar.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          target="_blank">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;