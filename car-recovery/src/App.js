import React from 'react';
import TopBar from './components/common/header/top-bar/TopBar.js'
import Navbar from './components/common/header/navigation/Navbar.js'
import HeaderSlider from './components/common/header/slider/HeaderSlider'
import VehicleSearch from './components/main/vehicle-search/VehicleSearch.js';
import Advantages from './components/main/advantages-section/Advantages.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar></TopBar>
        <Navbar></Navbar>
        <HeaderSlider></HeaderSlider>
      </header>

      <main className='App-main'>
        <VehicleSearch></VehicleSearch>
        <Advantages> </Advantages>
      </main>
    </div>
  );
}

export default App;