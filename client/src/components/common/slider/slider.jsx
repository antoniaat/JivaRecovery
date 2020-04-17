import React from 'react';
import Slider from 'react-slick';
import firstSlide from '../../../assets/images/header-slider/1.jpg';
import secondSlide from '../../../assets/images/header-slider/2.jpg';
import './slider.scss';


import Slide from './slide';

const HeaderSlider = () => {
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

  return (
    <Slider {...settings} className="header-slider">
      <Slide
        title="VehRecovery"
        img={firstSlide}
        text=" Това е платформа, която помага на всички хора нуждаещи се от пътна
            помощ или различни транспортни услуги. Тук можете да откриете
            най-добрите и надеждни доставчици на услугите от които се нуждаете."
      />
      <Slide
        title="VehRecovery"
        img={secondSlide}
        text=" Това е платформа, която помага на всички хора нуждаещи се от пътна
            помощ или различни транспортни услуги. Тук можете да откриете
            най-добрите и надеждни доставчици на услугите от които се нуждаете."
      />
      <Slide
        title="VehRecovery"
        img={firstSlide}
        text=" Това е платформа, която помага на всички хора нуждаещи се от пътна
          помощ или различни транспортни услуги. Тук можете да откриете
          най-добрите и надеждни доставчици на услугите от които се нуждаете."
      />
    </Slider>
  );
};

export default HeaderSlider;
