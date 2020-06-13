import "react-notifications/lib/notifications.css";
import "./request-form.scss";

import React, { useState, useContext } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import requestService from "../../../services/request-service";
import { AuthContext } from "../../../ContextWrapper";
import FormHeader from "../form-header/form-header";
import userService from "services/user-service";

const RequestForm = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2000);
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [condition, setCondition] = useState("");
  const { auth } = useContext(AuthContext);

  function handleFormSubmit(e) {
    e.preventDefault();

    const request = {
      brand,
      model,
      year,
      pickupLocation,
      deliveryLocation,
      pickupDate,
      deliveryDate,
      condition,
      userId: auth,
    };

    requestService.add(request).then((data) => {
      const requestId = data._id;
      userService.getUser(auth).then((userData) => {
        const userWithRequest = userData;
        userWithRequest.requests.push(request);
        userService.edit(auth, userWithRequest);
      });

      return (
        NotificationManager.success(
          "Заявката Ви беше успешно изпратена и ще бъде разгледана от администратор!",
          "Поздравления!",
          9000
        )
      )
    });
  }

  return (
    <div className="request-form">
      <NotificationContainer />
      <FormHeader
        title="Нова заявка"
        subtitle="Изпратете заявка за превоз на Вашето превозно средство"
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
