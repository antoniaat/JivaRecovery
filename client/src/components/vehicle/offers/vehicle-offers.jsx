import "./vehicle-offers.scss";

import React from "react";
import vehicles from "./vehicle-offers-data";

import PageContentWrapper from "components/common/page-content-wrapper/page-content-wrapper";
import Vehicle from "../vehicle";

const VehicleOffers = () => (
  <PageContentWrapper>
    <div className="vehicle-offers">
      <section className="vehicle-offers-header">
        <h1>Най-добрите доставчици на едно място</h1>
      </section>
      <section className="vehicle-offers-content">
        {vehicles.map(
          ({ name, price, year, mileage, transmission, isNew, img }) => (
            <Vehicle
              name={name}
              price={price}
              year={year}
              mileage={mileage}
              vehicleTransmission={transmission}
              isNew={isNew}
              img={img}
            />
          )
        )}
      </section>
      <button type="button" className="light-button">
        РАЗГЛЕДАЙ ВСИЧКИ
      </button>
    </div>
  </PageContentWrapper>
);

export default VehicleOffers;
