import React from "react";
import Flip from "react-reveal/Flip";
import { string } from "prop-types";

const Slide = ({ title, img, text }) => (
  <>
    <img src={img} alt="slide-img" />
    <div className="header-slider-center">
      <Flip top cascade>
        <h1>{title}</h1>
        <p className="header-slider-text">{text}</p>
      </Flip>
    </div>
  </>
);

Slide.defaultProps = {
  title: "Jiva Recovery",
  text:
    "Това е платформа, която помага на всички хора нуждаещи се от пътна помощ или различни транспортни услуги. ",
};

Slide.propTypes = {
  img: string.isRequired,
  title: string,
  text: string,
};

export default Slide;
