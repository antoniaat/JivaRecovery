import autoReparingIcon from 'assets/icons/icon-repair.png';
import transmissionChekupIcon from 'assets/icons/icon-tabs02.png';
import vehicleInspectionIcon from 'assets/icons/icon-tabs03.png';

import './vehicle-services.scss';

import React from 'react';
import {
  Tabs, Tab, TabPanel, TabList,
} from 'react-web-tabs';
import VehicleService from './vehicle-service/vehicle-service';
import VehicleServicesHeader from './header/vehicle-services-header';

const servicesData = [
  {
    key: 'autoReparing',
    title: 'Пътна помощ',
    description: 'Пътна помощ за хора, попаднали в бедствия, пътно произшествие или авария по време на пътуване с автомобил или друго пътно превозно средство. Специализираното ремонтно превозно средство има възможност да: репатрира повреден автомобил, колесен подемник (за превоз на превозно средство с повредена ходова част или липсващи колела или гуми), теглене от камион, доставка на провизии, издърпване от канавки, снежни преспи и други. ',
    benefits: ['Репатриране на МПС', 'Подаване на ток', 'Смяна на гуми', 'Превоз на МПС до КАТ', 'Доставка на части', 'Автосервиз'],
  }, {
    key: 'transmissionChekup',
    title: 'Репартиране',
    description: 'Специализираното ремонтно превозно средство (мобилна работилница) има възможност да: репатрира повреден автомобил чрез специално приспособление, лебедка, кран, колесен подемник (за превоз на превозно средство с повредена ходова част или липсващи колела или гуми), платформено ремарке, теглене от камион с кука на макара, доставяне на консумативи, авточасти, ремонт на ППС на място, доставка на провизии, издърпване от канавки, снежни преспи и други.',
    benefits: ['Репатриране на МПС', 'Подаване на ток', 'Смяна на гуми', 'Превоз на МПС до КАТ', 'Доставка на части', 'Автосервиз'],
  }, {
    key: 'vehicleInspection',
    title: 'Автосервизи',
    description: 'Мобилна автосервизна дейност за оказване на пътна помощ на хора, попаднали в бедствия, пътно произшествие или авария по време на пътуване с автомобил или друго пътно превозно средство. Специализираното ремонтно превозно средство (мобилна работилница) трябва да има възможност да: репатрира повреден автомобил чрез специално приспособление, лебедка, кран, колесен подемник (за превоз на превозно средство с повредена ходова част или липсващи колела или гуми), платформено ремарке, теглене от камион с кука на макара, доставяне на консумативи, авточасти, ремонт на ППС на място, доставка на провизии, издърпване от канавки, снежни преспи и други. ',
    benefits: ['Репатриране на МПС', 'Подаване на ток', 'Смяна на гуми', 'Превоз на МПС до КАТ', 'Доставка на части', 'Автосервиз'],
  },
];

const Services = () => (
  <section className="vehicle-services">
    <VehicleServicesHeader title="Помощ на пътя" text="Най-добрите услуги в страната" />

    <article className="vehicle-services-tabs-wrapper">
      <Tabs
        vertical
        defaultTab="autoReparing"
      >
        <TabList>
          <Tab tabFor="autoReparing">
            <img className="vehicle-services-tabs-img" src={autoReparingIcon} alt="auto-repairing" />
            <p className="vehicle-services-tablist-title">Пътна помощ</p>
          </Tab>
          <Tab tabFor="transmissionChekup">
            <img className="vehicle-services-tabs-img" src={transmissionChekupIcon} alt="transmission-checkup" />
            <p className="vehicle-services-tablist-title">Доставка на части</p>
          </Tab>
          <Tab tabFor="vehicleInspection">
            <img className="vehicle-services-tabs-img" src={vehicleInspectionIcon} alt="vehicle-inspection" />
            <p className="vehicle-services-tablist-title">Автосервизи</p>
          </Tab>
        </TabList>

        {servicesData.map(({
          key, title, description, benefits,
        }) => (
          <TabPanel tabId={key}>
            <VehicleService title={title} description={description} benefits={benefits} />
          </TabPanel>
        ))}
      </Tabs>
    </article>
  </section>
);

export default Services;
