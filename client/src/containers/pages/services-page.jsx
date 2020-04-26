import React from 'react';
import Vehicle from '../../components/vehicle/vehicle';
import PageHeader from '../../components/common/page-header/page-header';
import vehicles from '../../components/vehicle/offers/vehicle-offers-data';

const ServicesPage = () => (
  <div className="services-page">
    <PageHeader title="Доставчици" subtitle="Пътна помощ и транспортни услуги за цялата страна" />
    <section className="services-page-vehicles">
      {vehicles.map(({
        name, price, year, mileage, transmission, rental, img,
      }) => (
        <Vehicle name={name} price={price} year={year} mileage={mileage} vehicleTransmission={transmission} rental={rental} img={img} />
      ))}
    </section>
  </div>
);

export default ServicesPage;
