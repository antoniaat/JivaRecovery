import React from "react";
import Fade from "react-reveal/Fade";

import { string, number } from "prop-types";

import "./vehicle-model.scss";

const VehicleModel = ({ img, name, offersCount, lowestPriceOffer }) => (
  <Fade left>
    <div className="vehicle-model">
      <div>
        <img src={img} alt={name} />
        <h6>{name}</h6>
        <p>
          {offersCount} оферти стартиращи от {lowestPriceOffer} лева
        </p>
      </div>
    </div>
  </Fade>
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
