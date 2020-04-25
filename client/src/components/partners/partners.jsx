import brands from 'assets/images/brands.png';

import './partners.scss';

import React from 'react';

const Partners = () => (
  <div className="partners">
    <h2 className="partners-title">Партньори</h2>
    <span className="partners-line">-</span>
    <p className="partners-subtitle">КОМПАНИИТЕ, КОИТО НИ СЕ ДОВЕРИХА</p>
    <span className="partners-line">-</span>
    <img src={brands} alt="brand-img" />
  </div>
);

export default Partners;
