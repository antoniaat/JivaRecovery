import React, { Component } from 'react';

import Vehicle from '../Vehicle.js'
import './VehicleOffers.scss';

import vehiclesData from './data.json';
import tlogo from '../../../assets/tlogo.png'

class VehicleOffers extends Component {
    constructor(props) {
        super(props);

        this.state = vehiclesData;
    }

    render() {
        return (
            <div className='VehicleOffers'>
                <section>
                    <img src={tlogo}></img>
                    <h1>Best Vehicle Offers</h1>
                </section>
                <section>
                    {this.state.map(c => <Vehicle vehicle={c}></Vehicle>)}
                </section>
                <button className='light-button'>BROWSE ALL</button>
            </div>
        );
    }
}

export default VehicleOffers;