import React from "react";

const Slide = ({ title, img, text }) => {
  return (
    <div>
      <img src={firstSlide} alt="slide-img"></img>
      <div className="HeaderSlider-center">
        <h1>{title}</h1>
        <p className="HeaderSlider-text">
          VehRecovery is dolor sit amet consectetur adipisicing elit. Cupiditate
          incidunt praesentium, rerum voluptatem in reiciendis officia harum
          repudiandae tempore suscipit ex ea, adipisci ab porro.
        </p>
      </div>
    </div>
  );
};

export default Slide;
