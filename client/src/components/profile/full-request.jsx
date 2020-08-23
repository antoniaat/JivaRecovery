import "bootstrap/dist/css/bootstrap.min.css";
import "../administration/request/request.scss";
import "./full-request.scss";

import React from "react";
import EditRequestModal from "components/modals/edit-request-modal";
import { useState } from "react";

const FullRequest = ({
  _id,
  brand,
  condition,
  model,
  year,
  pickupLocation,
  deliveryLocation,
  pickupDate,
  deliveryDate,
  status
}) => {
  // const [brand, setBrand] = useState("");
  // const [model, setModel] = useState("");
  // const [year, setYear] = useState("");
  // const [pickupLocation, setPickupLocation] = useState("");
  // const [deliveryLocation, setDeliveryLocation] = useState("");
  // const [pickupDate, setPickupDate] = useState("");
  // const [deliveryDate, setDeliveryDate] = useState("");
  // const [condition, setCondition] = useState("");
  // const [status, setStatus] = useState("");

  const state = {
    brand,
    model,
    year,
    pickupLocation,
    deliveryLocation,
    pickupDate,
    deliveryDate,
    condition,
    status,
  };

  const [requestData, setRequestData] = useState(state);

  return (
    <div className="request full-request">
      <section className="request-main">
        <article>
          <h3 className="request-heading">Марка:</h3>
          <span className="request-content">{requestData.brand}</span>
        </article>
        <article>
          <h3 className="request-heading">Състояние:</h3>
          <span className="request-content">{requestData.condition}</span>
        </article>
        <article>
          <h3 className="request-heading">Модел:</h3>
          <span className="request-content">{requestData.model}</span>
        </article>
        <article>
          <h3 className="request-heading">Година:</h3>
          <span className="request-content">{requestData.year}</span>
        </article>
      </section>
      <section className="request-main">
        <article>
          <h3 className="request-heading">Място за взимане:</h3>
          <span className="request-content">{requestData.pickupLocation}</span>
        </article>
        <article>
          <h3 className="request-heading">Място за доставяне:</h3>
          <span className="request-content">{requestData.deliveryLocation}</span>
        </article>
        <article>
          <h3 className="request-heading">Дата за взимане:</h3>
          <span className="request-content">{requestData.pickupDate}</span>
        </article>
        <article>
          <h3 className="request-heading">Дата за доставяне:</h3>
          <span className="request-content">{requestData.deliveryDate}</span>
        </article>
      </section>
      <EditRequestModal requestId={_id} updateData={setRequestData} />
    </div>
  );
};

export default FullRequest;
