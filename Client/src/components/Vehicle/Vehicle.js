import React from "react";
import "./Vehicle.scss";
import icons from "../icons/FontAwesomeIcons";

const Vehicle = ({ vehicle }) => {
  const { rental, img, price, name, year, mileage, transmission } = vehicle;

  return (
    <div className="vehicle">
      <div className={rental ? "vehicle-rental" : "hidden"}>RENTAL</div>
      <img src={img} alt="vehicle-img"></img>
      <p className="vehicle-price">{price}</p>
      <h5 className="vehicle-name">{name}</h5>
      <div className="vehicle-specifications">
        <div>
          <span>{icons.calendar}</span>
          {year}
        </div>
        <div>
          <span>{icons.road}</span>
          {mileage}
        </div>
        <div>
          <span>{icons.transmission}</span>
          {transmission}
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
