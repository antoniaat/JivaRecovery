import React, { Component } from 'react';

import './VehicleTypes.scss';
import VehicleModel from './../VehicleModel.js'

// import vehiclesTypesData from './vehicleTypesData.json';

class VehicleTypes extends Component {
    constructor(props) {
        super(props);
        // this.state = vehiclesTypesData;

        this.state = [{
            name: 'Sedan',
            offersCount: 4,
            lowestPriceOffer: 42000
        }];
    }

    render() {
        return (
            <div className='VehicleTypes'>
                <VehicleModel></VehicleModel>
                {this.state.map(c => <VehicleModel vehicleModel={c}></VehicleModel>)}
            </div>
        );
    }
}

export default VehicleTypes;