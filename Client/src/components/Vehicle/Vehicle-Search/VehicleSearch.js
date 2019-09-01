import React from "react";
import Dropdown from "react-dropdown";

import "react-dropdown/style.css";
import "./VehicleSearch.scss";

function VehicleSearch() {
  // Default options
  const makesOfTheVehicleDefaultOption = "All Makes";
  const modelsDefaultOption = "All Models";
  const vehicleStatusDefaultOption = "Vehicle Status";
  const fuelTypesDefaultOption = "All Fuel Types";

  // Options for dropdown menus
  const makesOfTheVehicleOptions = [
    "Volswagen",
    "Maserati",
    "Audi",
    "BMW",
    "Mercedes benz",
    "Lamborgini",
    "Lexux",
    "Ferrari",
    "Bentley",
    "Land Rover",
    "Dodge",
    "Jaguar"
  ];
  const modelsOptions = ["Model 1", "Model 2"];
  const vehicleStatusOptions = ["New", "Used"];
  const fuelTypeOptions = ["Petrol", "Diesel", "Hybrid", "Electric", "Petrol"];

  return (
    <div className="VehicleSearch">
      <section>
        <article>
          <h1>Quick Vehicle Search</h1>
        </article>
        <article>
          <span>-</span>
          <p>FROM 600+ BRAND CARS</p>
          <span>-</span>
        </article>
      </section>

      <section>
        <article>
          <h6>Makers of vehicle</h6>
          <Dropdown
            options={makesOfTheVehicleOptions}
            value={makesOfTheVehicleDefaultOption}
            placeholder="Select an option"
          />
        </article>

        <article>
          <h6>Models of the vehicle</h6>
          <Dropdown
            options={modelsOptions}
            value={modelsDefaultOption}
            placeholder="Select an option"
          />
        </article>

        <article>
          <h6>Condition</h6>
          <Dropdown
            options={vehicleStatusOptions}
            value={vehicleStatusDefaultOption}
            placeholder="Select an option"
          />
        </article>

        <article>
          <h6>Fuel Type</h6>
          <Dropdown
            options={fuelTypeOptions}
            value={fuelTypesDefaultOption}
            placeholder="Select an option"
          />
        </article>

        <article>
          <button className="button-secondary">Find it now</button>
        </article>
      </section>
    </div>
  );
}

export default VehicleSearch;
