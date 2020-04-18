import React, { Component } from 'react';
import vehiclesTypesData from './vehicle-types-data.json';
import VehicleModel from '../vehicle-model';
import './vehicle-types.scss';

class VehicleTypes extends Component {
  constructor(props) {
    super(props);

    this.state = { cars: vehiclesTypesData };
  }

  render() {
    return (
      <div className="VehicleTypes">
        <h1>Types of Vehicles</h1>
        <p>
          <span>-</span>
          {' '}
          THE AUTOS WE DEALS IN
          {' '}
          <span>-</span>
        </p>

        <div className="vehicle-types">
          {this.state.cars.map((object, i) => (
            <VehicleModel key={i} vehicleModel={object} />
          ))}
        </div>
      </div>
    );
  }
}

export default VehicleTypes;
