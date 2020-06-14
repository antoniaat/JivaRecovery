import React from "react";

import Vehicle from "components/vehicle/vehicle";
import vehicles from "components/vehicle/offers/vehicle-offers-data";
import TopBar from "components/common/header/topbar/top-bar";
import Navbar from "components/common/header/navigation/navbar";
import Footer from "components/common/footer/footer";

const ServicesPage = () => (
  <>
    <TopBar />
    <Navbar />
    <div className="services-page">
      <div className="services-page-wrapper">
        <section className="services-page-vehicles">
          {vehicles.map(
            ({ name, price, year, mileage, transmission, rental, img }) => (
              <Vehicle
                name={name}
                price={price}
                year={year}
                mileage={mileage}
                vehicleTransmission={transmission}
                rental={rental}
                img={img}
              />
            )
          )}
        </section>
      </div>
    </div>
    <Footer />
  </>
);

export default ServicesPage;
