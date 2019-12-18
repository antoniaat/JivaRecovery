import React from "react";

import "./Vehicle.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faRoad } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";

const Vehicle = props => {
  const calendarIcon = <FontAwesomeIcon icon={faCalendar} />;
  const roadIcon = <FontAwesomeIcon icon={faRoad} />;
  const transmissionIcon = <FontAwesomeIcon icon={faCar} />;

  return (
    <div className="Vehicle">
      <div className={props.vehicle.rental ? "vehicle-rental" : "hidden"}>
        RENTAL
      </div>
      <img src={props.vehicle.img} alt="vehicle-img"></img>
      <p className="vehicle-price">{props.vehicle.price}</p>
      <h5 className="vehicle-name">{props.vehicle.name}</h5>
      <div className="vehicle-specifications">
        <div>
          <span>{calendarIcon}</span>
          {props.vehicle.year}
        </div>
        <div>
          <span>{roadIcon}</span>
          {props.vehicle.mileage}
        </div>
        <div>
          <span>{transmissionIcon}</span>
          {props.vehicle.transmission}
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
