import './vehicle-specification.scss';

import React from 'react';
import { string } from 'prop-types';

const VehicleSpecification = ({ icon, text }) => (
  <div className="vehicle-specification">
    <span className="vehicle-specification-icon">{icon}</span>
    {text}
  </div>
);

VehicleSpecification.propTypes = {
  icon: string.isRequired,
  text: string.isRequired,
};

export default VehicleSpecification;
