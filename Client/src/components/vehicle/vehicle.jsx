import './vehicle.scss';

import React from 'react';
import { calendar, road, transmission } from '../icons/font-awesome-icons';

const Vehicle = ({
  rental, img, price, name, year, mileage, vehicleTransmission,
}) => (
  <div className="vehicle">
    <div className={rental ? 'vehicle-rental' : 'hidden'}>RENTAL</div>
    <img src={img} alt="vehicle-img" />
    <p className="vehicle-price">{price}</p>
    <h5 className="vehicle-name">{name}</h5>
    <div className="vehicle-specifications">
      <div>
        <span>{calendar}</span>
        {year}
      </div>
      <div>
        <span>{road}</span>
        {mileage}
      </div>
      <div>
        <span>{transmission}</span>
        {vehicleTransmission}
      </div>
    </div>
  </div>
);

export default Vehicle;
