import React from 'react';

import HeaderSlider from '../../components/Common/Header/Slider/HeaderSlider.js'
import VehicleSearch from '../../components/Vehicle/Vehicle-Search/VehicleSearch.js';
import Advantages from '../../components/Common/Advantages/Advantages.js';
import VehicleServices from '../../components/Vehicle/Vehicle-Services/VehicleServices.js';
import VehicleOffers from '../../components/Vehicle/Vehicle-Offers/VehicleOffers.js';
import Brands from '../../components/Common/Brands/Brands.js';
import VehicleTypes from '../../components/Vehicle/Vehicle-Types/VehicleTypes.js';
import About from '../../components/Common/About/About.js';
import ContactForm from '../../components/Forms/Contact/ContactForm.js';

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