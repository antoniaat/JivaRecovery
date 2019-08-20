import React from 'react';
import TopBar from './components/Common/Header/Top-Bar/TopBar.js'
import Navbar from './components/Common/Header/Navigation/Navbar.js'
import HeaderSlider from './components/Common/Header/Slider/HeaderSlider'
import VehicleSearch from './components/Vehicle/Vehicle-Search/VehicleSearch.js';
import Advantages from './components/Home/Advantages/Advantages.js';
import Services from './components/Vehicle/Vehicle-Search/VehicleSearch.js';
import VehicleOffers from './components/Vehicle/Vehicle-Offers/VehicleOffers.js';
import Footer from './components/Common/Footer/Footer.js';

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
        <Services> </Services>
        <VehicleOffers></VehicleOffers>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;