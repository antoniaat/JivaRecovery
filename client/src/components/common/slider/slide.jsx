import React from 'react';
import { string } from 'prop-types';

const Slide = ({ title, img, text }) => (
  <>
    <img src={img} alt="slide-img" />
    <div className="header-slider-center">
      <h1>{title}</h1>
      <p className="header-slider-text">{text}</p>
    </div>
  </>
);

Slide.defaultProps = {
  title: 'VehRecovery',
  text: 'Това е платформа, която помага на всички хора нуждаещи се от пътна помощ или различни транспортни услуги. Тук можете да откриете най-добрите и надеждни доставчици на услугите от които се нуждаете.',
};

Slide.propTypes = {
  img: string.isRequired,
  title: string,
  text: string,
};

export default Slide;
