import React, { Component } from "react";

import vehiclesData from "./vehicleOffersData.json";

import Vehicle from "../Vehicle.js";
import "./VehicleOffers.scss";

import tlogo from "../../../assets/tlogo.png";

class VehicleOffers extends Component {
  constructor(props) {
    super(props);

    this.state = vehiclesData;
  }

  render() {
    return (
      <div className="VehicleOffers">
        <section>
          <img src={tlogo} alt="logo"></img>
          <h1>Best Vehicle Offers</h1>
        </section>
        <section>
          {this.state.map((object, i) => (
            <Vehicle key={i} vehicle={object}></Vehicle>
          ))}
        </section>
        <button className="light-button">BROWSE ALL</button>
      </div>
    );
  }
}

export default VehicleOffers;
