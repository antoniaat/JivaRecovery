import React from "react";
import vehicles from "./vehicle-offers-data";

import Vehicle from "../vehicle";
import "./vehicle-offers.scss";
import PageContentWrapper from "components/common/page-content-wrapper/page-content-wrapper";

const VehicleOffers = () => (
  <PageContentWrapper>
    <div className="vehicle-offers">
      <section className="vehicle-offers-header">
        <h1>Най-добрите услуги на едно място</h1>
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
