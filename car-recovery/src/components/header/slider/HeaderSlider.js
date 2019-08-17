import React from "react";
import Slider from "react-slick";

import './HeaderSlider.css';

// Slides
import firstSlide from '../../../assets/header-slider/1.jpg'
import secondSlide from '../../../assets/header-slider/2.jpg'
import thirdSlide from '../../../assets/header-slider/3.jpg'
import fourthSlide from '../../../assets/header-slider/4.jpg'

class HeaderSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings} className='headerSlider'>
                <div>
                    <img src={firstSlide}></img>
                </div>
                <div>
                    <img src={secondSlide}></img>
                </div>
                <div>
                    <img src={thirdSlide}></img>
                </div>
                <div>
                    <img src={fourthSlide}></img>
                </div>
            </Slider>
        );
    }
}

// export default class HeaderSlider {};
export default HeaderSlider;

