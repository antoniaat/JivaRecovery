import firstSlide from 'assets/images/header-slider/1.jpg';
import secondSlide from 'assets/images/header-slider/2.jpg';

import './slider.scss';

import React from 'react';
import Slider from 'react-slick';
import Slide from './slide';

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
  autoplaySpeed: 5000,
};

const slidesData = [
  {
    img: firstSlide,
  },
  {
    img: secondSlide,
  },
  {
    img: firstSlide,
  },
];

const HeaderSlider = () => (
  <Slider {...settings} className="header-slider">
    {slidesData.map(({ title, img, text }) => (
      <Slide title={title} img={img} text={text} />
    ))}
  </Slider>
);

export default HeaderSlider;
