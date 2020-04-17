import brands from '../../assets/images/brands.png';

import './partners.scss';

import React from 'react';

function Partners() {
  return (
    <div className="partners">
      <h2>Партньори</h2>
      <span>-</span>
      <p>КОМПАНИИТЕ, КОИТО НИ СЕ ДОВЕРИХА</p>
      <span>-</span>
      <img src={brands} alt="brand-img" />
    </div>
  );
}

export default Partners;
