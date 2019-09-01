import React from "react";
import Slider from "react-slick";

import "./HeaderSlider.scss";
// import "./Animations.js";

import firstSlide from "../../../../assets/header-slider/1.jpg";
import secondSlide from "../../../../assets/header-slider/2.jpg";

class HeaderSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      lazyLoad: true,
      adaptiveHeight: true,
      fade: true,
      arrows: true,
      autoplaySpeed: 5000
    };

    return (
      <Slider {...settings} className="HeaderSlider">
        <div>
          <img src={firstSlide}></img>
          <div className="HeaderSlider-center">
            <h1>Jiva Trade UK</h1>
            <p className="HeaderSlider-text">
              Jiva Trade is dolor sit amet consectetur adipisicing elit.
              Cupiditate incidunt praesentium, rerum voluptatem in reiciendis
              officia harum repudiandae tempore suscipit ex ea, adipisci ab
              porro.
            </p>
          </div>
        </div>
        <div>
          <img src={secondSlide}></img>
          <div className="HeaderSlider-center">
            <h1>Jiva Trade UK</h1>
            <p className="HeaderSlider-text">
              Jiva Trade is dolor sit amet consectetur adipisicing elit.
              Cupiditate incidunt praesentium, rerum voluptatem in reiciendis
              officia harum repudiandae tempore suscipit ex ea, adipisci ab
              porro.
            </p>
          </div>
        </div>
        <div>
          <img src={firstSlide}></img>
          <div className="HeaderSlider-center">
            <h1>Jiva Trade UK</h1>
            <p className="HeaderSlider-text">
              Jiva Trade is dolor sit amet consectetur adipisicing elit.
              Cupiditate incidunt praesentium, rerum voluptatem in reiciendis
              officia harum repudiandae tempore suscipit ex ea, adipisci ab
              porro.
            </p>
          </div>
        </div>
      </Slider>
    );
  }
}

export default HeaderSlider;
