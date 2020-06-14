import "./vehicle-search.scss";

import React from "react";
import { Link } from 'react-router-dom';
import VehicleSearchHeader from "./header/vehicle-search-header";
import DropdownItem from "./dropdown-item/dropdown-item";

import citiesData from "./data/cities";
import servicesData from "./data/services";

const VehicleSearch = () => (
  <div className="vehicle-search">
    <VehicleSearchHeader deliversCount={200} />

    <main className="vehicle-search-wrapper">
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
      <article className="vehicle-search-btn-wrapper">
        <button type="button" className="button-secondary">
          <Link to="/services">Търсене</Link>
        </button>
      </article>
    </main>
  </div>
);

export default VehicleSearch;
