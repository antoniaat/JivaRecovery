import './vehicle-services-header.scss';

import React from 'react';
import { string } from 'prop-types';

const VehicleServicesHeader = ({ title, text }) => (
  <article className="vehicle-services-header">
    <h2 className="vehicle-services-header-title">{title}</h2>
    <span className="vehicle-services-header-line">-</span>
    <p className="vehicle-services-header-text">{text}</p>
  </article>
);

VehicleServicesHeader.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
};

export default VehicleServicesHeader;
