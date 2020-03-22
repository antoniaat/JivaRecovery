import React from "react";
import VehicleSearchHeader from "./header/VehicleSearchHeader";
import DropdownItem from "./dropdown-item/DropdownItem";

import "./VehicleSearch.scss";

import citiesData from "./data/cities.js";
import servicesData from "./data/services";

const VehicleSearch = () => {
  return (
    <div className="vehicle-search">
      <VehicleSearchHeader />

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
          <button className="button-secondary">Търсене</button>
        </article>
      </main>
    </div>
  );
};

export default VehicleSearch;
