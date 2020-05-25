import brands from "assets/images/brands.png";

import "./partners.scss";

import React from "react";
import Flip from "react-reveal/Flip";

const Partners = () => (
  <div className="partners">
    <h2 className="partners-title">Партньори</h2>
    <span className="partners-line">-</span>
    <p className="partners-subtitle">КОМПАНИИТЕ, КОИТО НИ СЕ ДОВЕРИХА</p>
    <span className="partners-line">-</span>
    <Flip top>
      <img src={brands} alt="brand-img" />
    </Flip>
  </div>
);

export default Partners;
