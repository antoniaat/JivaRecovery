import truckImg from "assets/icons/mover-truck.png";

import "./form-header.scss";

import React from "react";
import Slide from "react-reveal/Slide";

const FormHeader = ({ title, subtitle }) => (
  <section className="form-header">
    <Slide left>
      <div className="form-header-image-wrapper">
        <img src={truckImg} alt="logo" />
      </div>
    </Slide>
    <h1>{title}</h1>
    <p>
      <span>-</span> {subtitle} <span>-</span>
    </p>
  </section>
);

export default FormHeader;
