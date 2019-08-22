import React, { Component } from 'react';

import './VehicleTypes.scss';
import VehicleModel from './../VehicleModel.js'
import vehiclesTypesData from './vehicleTypesData.json';

class VehicleTypes extends Component {
    constructor(props) {
        super(props);

        this.state = {cars: vehiclesTypesData};
    }

    render() {
        return (
            <div className='VehicleTypes'>
                <VehicleModel></VehicleModel>
                {/* {console.log(this.state.cars)} */}
                {this.state.cars.map(c => <VehicleModel vehicleModel={c}></VehicleModel>)}
            </div>
        );
    }
}

export default VehicleTypes;