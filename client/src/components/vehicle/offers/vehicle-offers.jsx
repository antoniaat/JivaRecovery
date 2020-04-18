import React, { Component } from 'react';
import vehiclesData from './vehicle-offers-data.json';

import Vehicle from '../vehicle.jsx';
import './vehicle-offers.scss';

import tlogo from 'assets/images/tlogo.png';

class VehicleOffers extends Component {
  constructor(props) {
    super(props);

    this.state = vehiclesData;
  }

  render() {
    return (
      <div className="VehicleOffers">
        <section>
          <img src={tlogo} alt="logo" />
          <h1>Best Vehicle Offers</h1>
        </section>
        <section>
          {this.state.map((object, i) => (
            <Vehicle key={i} vehicle={object} />
          ))}
        </section>
        <button className="light-button">BROWSE ALL</button>
      </div>
    );
  }
}

export default VehicleOffers;
