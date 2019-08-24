import React from 'react';

import HeaderSlider from '../Common/Header/Slider/HeaderSlider.js'
import VehicleSearch from './../Vehicle/Vehicle-Search/VehicleSearch.js';
import Advantages from './../Home/Advantages/Advantages.js';
import VehicleServices from './../Vehicle/Vehicle-Services/VehicleServices.js';
import VehicleOffers from './../Vehicle/Vehicle-Offers/VehicleOffers.js';
import Brands from '../Home/Brands/Brands.js';
import VehicleTypes from './../Vehicle/Vehicle-Types/VehicleTypes';
import About from '../Home/About/About.js';
import ContactForm from './../Forms/Contact/ContactForm.js';

const HomePage = () => (
    <div>
        <HeaderSlider></HeaderSlider>

        <VehicleSearch></VehicleSearch>
        <Advantages> </Advantages>
        <VehicleServices> </VehicleServices>
        <VehicleOffers></VehicleOffers>
        <VehicleTypes></VehicleTypes>
        <About></About>
        <Brands></Brands>
        <ContactForm></ContactForm>
    </div>
);

export default HomePage;