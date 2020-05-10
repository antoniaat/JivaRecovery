import React, { useState } from "react";
import FormHeader from "../form-header/form-header";

const RequestForm = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2000);
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [condition, setCondition] = useState("");

  function handleFormSubmit() {
    console.log("yee");
  }

  return (
    <div className="request-form">
      <FormHeader
        title="Заявка"
        subtitle="Изпратете заявка за превоз на вашето превозно средство"
      />

      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            name="brand"
            onChange={(ev) => setBrand(ev.target.value)}
            value={brand}
            placeholder="Марка"
            required
          />
        </label>
        <label>
          <input
            onChange={(ev) => setModel(ev.target.value)}
            value={model}
            type="text"
            name="model"
            placeholder="Модел"
            required
          />
        </label>
        <label>
          <input
            onChange={(ev) => setYear(ev.target.value)}
            value={year}
            type="number"
            name="year"
            placeholder="Година на производство"
            required
          />
        </label>
        <label>
          <input
            type="text"
            name="pickupLocation"
            onChange={(ev) => setPickupLocation(ev.target.value)}
            value={pickupLocation}
            placeholder="Местоположение за взимане"
            required
          />
        </label>
        <label>
          <input
            type="text"
            name="deliveryLocation"
            onChange={(ev) => setDeliveryLocation(ev.target.value)}
            value={deliveryLocation}
            placeholder="Местоположение за доставяне"
            required
          />
        </label>
        <label>
          <input
            type="text"
            name="pickupDate"
            onChange={(ev) => setPickupDate(ev.target.value)}
            value={pickupDate}
            placeholder="Дата за взимане"
          />
        </label>
        <label>
          <input
            type="text"
            name="deliveryDate"
            onChange={(ev) => setDeliveryDate(ev.target.value)}
            value={deliveryDate}
            placeholder="Дата за доставяне"
          />
        </label>
        <label>
          <input
            type="text"
            name="condition"
            onChange={(ev) => setCondition(ev.target.value)}
            value={condition}
            placeholder="Състояние на МПС"
            required
          />
        </label>
        <input type="submit" value="ИЗПРАТИ" />
      </form>
    </div>
  );
};

export default RequestForm;
