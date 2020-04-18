import './vehicle-service.scss';

import React from 'react';
import PropTypes, { string } from 'prop-types';
import { checkCircle } from 'components/icons/font-awesome-icons';

const VehicleService = ({
  title, description, benefits,
}) => (
  <section className="vehicle-service">
    <article className="tab-left-article">
      <h2 className="vehicle-service-title">{title}</h2>
      <p className="vehicle-service-description">
        {description}
      </p>
    </article>

    <article className="tab-right-article">
      <ul>
        {benefits.map((benefit) => (
          <li className="vehicle-service-benefit">
            <span className="vehicle-service-benefit-icon">{checkCircle}</span>
            <p className="vehicle-service-benefit-text">{benefit}</p>
          </li>
        ))}
      </ul>
    </article>
  </section>
);

VehicleService.defaultProps = {
  benefits: [],
};

VehicleService.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  benefits: PropTypes.instanceOf(Array),
};

export default VehicleService;
