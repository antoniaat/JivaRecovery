import "./request.scss";

import React from "react";

const Request = ({
  pickupLocation,
  deliveryLocation,
  pickupDate,
  deliveryDate,
}) => (
  <section className="request">
    <article className="request-pickup-location">
      <h3 className="request-heading">Място за взимане:</h3>
      <span className="request-content">{pickupLocation}</span>
    </article>
    <article className="request-delivery-location">
      <h3 className="request-heading">Място за доставяне:</h3>
      <span className="request-content">{deliveryLocation}</span>
    </article>
    <article className="request-pickup-date">
      <h3 className="request-heading">Дата за взимане:</h3>
      <span className="request-content">{pickupDate}</span>
    </article>
    <article className="request-delivery-date">
      <h3 className="request-heading">Дата за доставяне:</h3>
      <span className="request-content">{deliveryDate}</span>
    </article>
  </section>
);

export default Request;