import './benefit.scss';

import React from 'react';
import { string } from 'prop-types';

const Benefit = ({ icon, title, subtitle }) => (
  <div className="benefit">
    <div className="benefit-icon-wrapper">
      <span>{icon}</span>
    </div>
    <div className="benefit-content-box">
      <p className="benefit-content-box-title">{title}</p>
      <p className="benefit-content-box-subtitle">{subtitle}</p>
    </div>
  </div>
);

Benefit.propTypes = {
  icon: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
};

export default Benefit;
