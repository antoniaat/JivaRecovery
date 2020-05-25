import "./vehicle.scss";

import React from "react";
import Fade from "react-reveal/Fade";
import { string, boolean, number } from "prop-types";
import { calendar, road, transmission } from "../icons/font-awesome-icons";
import VehicleSpecification from "./specification/vehicle-specification";

const Vehicle = ({
  name,
  price,
  year,
  mileage,
  vehicleTransmission,
  isNew,
  img,
}) => (
  <Fade left>
    <div className="vehicle">
      <div className={isNew ? "vehicle-rental" : "hidden"}>НОВО</div>
      <img src={img} alt="vehicle-img" />
      <p className="vehicle-price">{price}</p>
      <h5 className="vehicle-name">{name}</h5>
      <div className="vehicle-specifications">
        <VehicleSpecification icon={calendar} text={year} />
        <VehicleSpecification icon={road} text={mileage} />
        <VehicleSpecification icon={transmission} text={vehicleTransmission} />
      </div>
    </div>
  </Fade>
);

Vehicle.defaultProps = {
  vehicleTransmission: "Manual",
  rental: true,
};

Vehicle.propTypes = {
  name: string.isRequired,
  price: number.isRequired,
  year: number.isRequired,
  mileage: number.isRequired,
  img: string.isRequired,
  vehicleTransmission: string,
  rental: boolean,
};

export default Vehicle;
