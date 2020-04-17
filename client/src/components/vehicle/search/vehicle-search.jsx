import './vehicle-search.scss';

import React from 'react';
import VehicleSearchHeader from './header/vehicle-search-header';
import DropdownItem from './dropdown-item/dropdown-item';

import citiesData from './data/cities';
import servicesData from './data/services';

const VehicleSearch = () => (
  <div className="vehicle-search">
    <VehicleSearchHeader deliversCount={200} />

    <main>
      <DropdownItem
        title="Град"
        data={citiesData}
        placeholder="Изберете град"
      />
      <DropdownItem
        title="Услуга"
        data={servicesData}
        placeholder="Изберете услуга"
      />
      <article>
        <button type="button" className="button-secondary">Търсене</button>
      </article>
    </main>
  </div>
);

export default VehicleSearch;
