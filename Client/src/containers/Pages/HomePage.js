import React from "react";

import HeaderSlider from "../../components/common/header/slider/HeaderSlider";
import VehicleSearch from "../../components/vehicle/search/VehicleSearch.js";
import Advantages from "../../components/advantages/Advantages";
import VehicleServices from "../../components/vehicle/services/VehicleServices.js";
import VehicleOffers from "../../components/vehicle/offers/VehicleOffers.js";
import Brands from "../../components/brands/Brands.js";
import VehicleTypes from "../../components/vehicle/types/VehicleTypes.js";
import About from "../../components/about/About.js";
import ContactForm from "../../components/forms/contact/ContactForm.js";

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
