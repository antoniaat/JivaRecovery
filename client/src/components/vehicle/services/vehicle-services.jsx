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
    description: 'Мобилна автосервизна дейност за оказване на пътна помощ на хора, попаднали в бедствия, пътно произшествие или авария по време на пътуване с автомобил или друго пътно превозно средство. Специализираното ремонтно превозно средство (мобилна работилница) трябва да има възможност да: репатрира повреден автомобил чрез специално приспособление, лебедка, кран, колесен подемник (за превоз на превозно средство с повредена ходова част или липсващи колела или гуми), платформено ремарке, теглене от камион с кука на макара, доставяне на консумативи, авточасти, ремонт на ППС на място, доставка на провизии, издърпване от канавки, снежни преспи и други. ',
    benefits: ['Репатриране на МПС', 'Подаване на ток', 'Смяна на гуми', 'Превоз на МПС до КАТ', 'Доставка на части', 'Автосервиз'],
    image: autoReparingIcon,
    alt: 'auto-repairing',
  }, {
    key: 'transmissionChekup',
    title: 'Пdjwidjiwdjiwътна помощ',
    description: 'Мобилна автосервизна дейност за оказване на пътна помощ на хора, попаднали в бедствия, пътно произшествие или авария по време на пътуване с автомобил или друго пътно превозно средство. Специализираното ремонтно превозно средство (мобилна работилница) трябва да има възможност да: репатрира повреден автомобил чрез специално приспособление, лебедка, кран, колесен подемник (за превоз на превозно средство с повредена ходова част или липсващи колела или гуми), платформено ремарке, теглене от камион с кука на макара, доставяне на консумативи, авточасти, ремонт на ППС на място, доставка на провизии, издърпване от канавки, снежни преспи и други. ',
    benefits: ['Репатриране на МПС', 'Подаване на ток', 'Смяна на гуми', 'Превоз на МПС до КАТ', 'Доставка на части', 'Автосервиз'],
    image: transmissionChekupIcon,
    alt: 'transmission-checkup',
  }, {
    key: 'vehicleInspection',
    title: 'Пъsdkjwidjwiтна помощ',
    description: 'Мобилна автосервизна дейност за оказване на пътна помощ на хора, попаднали в бедствия, пътно произшествие или авария по време на пътуване с автомобил или друго пътно превозно средство. Специализираното ремонтно превозно средство (мобилна работилница) трябва да има възможност да: репатрира повреден автомобил чрез специално приспособление, лебедка, кран, колесен подемник (за превоз на превозно средство с повредена ходова част или липсващи колела или гуми), платформено ремарке, теглене от камион с кука на макара, доставяне на консумативи, авточасти, ремонт на ППС на място, доставка на провизии, издърпване от канавки, снежни преспи и други. ',
    benefits: ['Репатриране на МПС', 'Подаване на ток', 'Смяна на гуми', 'Превоз на МПС до КАТ', 'Доставка на части', 'Автосервиз'],
    image: vehicleInspectionIcon,
    alt: 'vehicle-inspection',
  },
];

const Services = () => (
  <section className="vehicle-services">
    <VehicleServicesHeader title="Пътна помощ" text="Най-добрите услуги в страната" />

    <article className="vehicle-services-tabs-wrapper">
      <Tabs
        vertical
        defaultTab="autoReparing"
      >
        <TabList>
          <Tab tabFor="autoReparing">
            <img className="vehicle-services-tabs-img" src={autoReparingIcon} alt="auto-repairing" />
            <p>Auto Repairing</p>
          </Tab>
          <Tab tabFor="transmissionChekup">
            <img className="vehicle-services-tabs-img" src={transmissionChekupIcon} alt="transmission-checkup" />
            <p>Transmission Checkup</p>
          </Tab>
          <Tab tabFor="vehicleInspection">
            <img className="vehicle-services-tabs-img" src={vehicleInspectionIcon} alt="vehicle-inspection" />
            <p>Vehicle Inspection</p>
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
