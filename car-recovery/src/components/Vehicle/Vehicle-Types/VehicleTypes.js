import React, { Component } from 'react';

import './VehicleTypes.scss';
import VehicleModel from './../VehicleModel.js'
import vehiclesTypesData from './vehicleTypesData.json';

class VehicleTypes extends Component {
    constructor(props) {
        super(props);

        this.state = { cars: vehiclesTypesData };
    }

    render() {
        return (
            <div className='VehicleTypes'>
                <h1>Types of Vehicles</h1>
                <p><span>-</span> THE AUTOS WE DEALS IN <span>-</span></p>

                <div className='vehicle-types'>
                    {this.state.cars.map(c => <VehicleModel vehicleModel={c}></VehicleModel>)}
                </div>
            </div>
        );
    }
}

export default VehicleTypes;