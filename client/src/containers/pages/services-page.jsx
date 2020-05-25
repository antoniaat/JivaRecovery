import React from "react";
import Vehicle from "../../components/vehicle/vehicle";
import PageHeader from "../../components/common/page-header/page-header";
import vehicles from "../../components/vehicle/offers/vehicle-offers-data";
import VehicleSidebar from "../../components/vehicle/services/sidebar/vehicle-sidebar";
import VehicleTopbar from "../../components/vehicle/services/topbar/vehicle-topbar";
import TopBar from "components/common/header/topbar/top-bar";
import Navbar from "components/common/header/navigation/navbar";
import Footer from "components/common/footer/footer";

const ServicesPage = () => (
  <>
    <TopBar />
    <Navbar />
    <div className="services-page">
      <PageHeader
        title="Доставчици"
        subtitle="Пътна помощ и транспортни услуги за цялата страна"
      />
      <div className="services-page-wrapper">
        <section className="services-page-vehicles">
          <VehicleTopbar />
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
        <VehicleSidebar />
      </div>
    </div>
    <Footer />
  </>
);

export default ServicesPage;
