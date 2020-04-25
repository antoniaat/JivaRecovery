
import './vehicle-types.scss';

import React from 'react';
import VehicleModel from '../vehicle-model';
import cars from './vehicle-types-data';

const VehicleTypes = () => (
  <div className="vehicle-types">
    <h1 className="vehicle-types-title">Types of Vehicles</h1>
    <p>
      <span className="vehicle-types-line">-</span>
      {' '}
      THE AUTOS WE DEALS IN
      {' '}
      <span className="vehicle-types-line">-</span>
    </p>

    <div className="vehicle-types-container">
      {cars.map(({
        img, name, offersCount, lowestPriceOffer,
      }) => (<VehicleModel img={img} name={name} offersCount={offersCount} lowestPriceOffer={lowestPriceOffer} />)) }
    </div>
  </div>
);

export default VehicleTypes;
