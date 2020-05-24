import "./request.scss";

import React from "react";

const Request = ({
  pickupLocation,
  deliveryLocation,
  pickupDate,
  deliveryDate,
}) => (
  <>
    <div className="request">
      <section className="request-main">
        <article>
          <h3 className="request-heading">Място за взимане:</h3>
          <span className="request-content">{pickupLocation}</span>
        </article>
        <article>
          <h3 className="request-heading">Място за доставяне:</h3>
          <span className="request-content">{deliveryLocation}</span>
        </article>
        <article>
          <h3 className="request-heading">Дата за взимане:</h3>
          <span className="request-content">{pickupDate}</span>
        </article>
        <article>
          <h3 className="request-heading">Дата за доставяне:</h3>
          <span className="request-content">{deliveryDate}</span>
        </article>
      </section>
      <button className="button button-primary request-btn">Редактирай</button>
    </div>
  </>
);

export default Request;
