import React from 'react';

import './vehicle-model.scss';

const VehicleModel = (props) => {
  const {
    img, name, offersCount, lowestPriceOffer,
  } = props.vehicleModel;

  return (
    <div className="vehicle-model">
      <div>
        <img src={img} alt="vehicle-img" />
        <h6>{name}</h6>
        <p>
          {offersCount}
          {' '}
          offers starting from $
          {lowestPriceOffer}
        </p>
      </div>
    </div>
  );
};

export default VehicleModel;
