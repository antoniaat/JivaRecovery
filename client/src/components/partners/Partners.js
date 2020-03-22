import React from "react";
import brands from "../../assets/images/brands.png";

import "./Partners.scss";

function Partners() {
  return (
    <div className="partners">
      <h2>Партньори</h2>
      <span>-</span>
      <p>КОМПАНИИТЕ, КОИТО НИ СЕ ДОВЕРИХА</p>
      <span>-</span>
      <img src={brands} alt="brand-img"></img>
    </div>
  );
}

export default Partners;
