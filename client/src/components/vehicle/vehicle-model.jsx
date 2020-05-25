import React from "react";
import { string, number } from "prop-types";

import "./vehicle-model.scss";

const VehicleModel = ({ img, name, offersCount, lowestPriceOffer }) => (
  <div className="vehicle-model">
    <div>
      <img src={img} alt={name} />
      <h6>{name}</h6>
      <p>
        {offersCount} оферти стартиращи от {lowestPriceOffer} лева
      </p>
    </div>
  </div>
);

VehicleModel.defaultProps = {
  name: "",
  offersCount: 0,
  lowestPriceOffer: 0,
};

VehicleModel.propTypes = {
  img: string.isRequired,
  name: string,
  offersCount: number,
  lowestPriceOffer: number,
};

export default VehicleModel;
