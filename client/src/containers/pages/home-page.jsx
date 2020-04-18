import React from 'react';

import HeaderSlider from 'components/common/slider/slider';
import VehicleSearch from 'components/vehicle/search/vehicle-search';
import Advantages from 'components/advantages/advantages';
import VehicleServices from 'components/vehicle/services/vehicle-services';
import VehicleOffers from 'components/vehicle/offers/vehicle-offers';
import Partners from 'components/partners/partners';
import VehicleTypes from 'components/vehicle/types/vehicle-types';
import About from 'components/about/about';
import ContactForm from 'components/forms/contact/contact-form';

const HomePage = () => (
  <>
    <HeaderSlider />
    <VehicleSearch />
    <Advantages />
    <VehicleServices />
    <VehicleOffers />
    <VehicleTypes />
    <About />
    <Partners />
    <ContactForm />
  </>
);

export default HomePage;