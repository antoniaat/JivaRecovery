import React, { Component } from 'react';

import './VehicleModel.scss';

const VehicleModel = (props) => {
    return (
        <div className='VehicleModel'>
            <div>
                {props.vehicleModel.name}
            </div>
        </div>
    );
}

export default VehicleModel;