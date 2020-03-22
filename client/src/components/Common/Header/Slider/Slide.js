import React from "react";

const Slide = ({ title, img, text }) => {
  return (
    <div>
      <img src={img} alt="slide-img"></img>
      <div className="header-slider-center">
        <h1>{title}</h1>
        <p className="header-slider-text">{text}</p>
      </div>
    </div>
  );
};

export default Slide;
