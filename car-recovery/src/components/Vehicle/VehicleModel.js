import React from 'react';

import './VehicleModel.scss';

const VehicleModel = (props) => {
    return (
        <div className='VehicleModel'>
            <div>
                <img src={props.vehicleModel.img}></img>
                <h6>{props.vehicleModel.name}</h6>
                <p>{props.vehicleModel.offersCount} offers starting from ${props.vehicleModel.lowestPriceOffer}</p>
            </div>
        </div>
    );
}

export default VehicleModel;