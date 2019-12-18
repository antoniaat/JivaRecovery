import React from "react";
import brands from "../../../assets/brands.png";

import "./Brands.scss";

function Brands() {
  return (
    <div className="Brands">
      <h2>Our Brands</h2>
      <span>-</span>
      <p>THE AUTOS WE DEALS IN</p>
      <span>-</span>
      <img src={brands} alt="brand-img"></img>
    </div>
  );
}

export default Brands;
