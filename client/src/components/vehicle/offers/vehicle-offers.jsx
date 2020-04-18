import tlogo from 'assets/images/tlogo.png';

import React from 'react';
import vehicles from './vehicle-offers-data';

import Vehicle from '../vehicle';
import './vehicle-offers.scss';

const VehicleOffers = () => (
  <div className="vehicle-offers">
    <section>
      <img src={tlogo} alt="logo" />
      <h1>Най-добрите оферти на едно място</h1>
    </section>
    <section>
      {vehicles.map(({
        name, price, year, mileage, transmission, rental, img,
      }) => (
        <Vehicle name={name} price={price} year={year} mileage={mileage} vehicleTransmission={transmission} rental={rental} img={img} />
      ))}
    </section>
    <button type="button" className="light-button">BROWSE ALL</button>
  </div>
);

export default VehicleOffers;
