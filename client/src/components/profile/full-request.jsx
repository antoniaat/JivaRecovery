import "bootstrap/dist/css/bootstrap.min.css";
import "../administration/request/request.scss";
import "./full-request.scss";

import React from "react";
import EditRequestModal from "components/modals/edit-request-modal";

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
}) => {
  return (
    <div className="request full-request">
      <section className="request-main">
        <article>
          <h3 className="request-heading">Марка:</h3>
          <span className="request-content">{brand}</span>
        </article>
        <article>
          <h3 className="request-heading">Състояние:</h3>
          <span className="request-content">{condition}</span>
        </article>
        <article>
          <h3 className="request-heading">Модел:</h3>
          <span className="request-content">{model}</span>
        </article>
        <article>
          <h3 className="request-heading">Година:</h3>
          <span className="request-content">{year}</span>
        </article>
      </section>
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
      <EditRequestModal requestId={_id} />
    </div>
  );
};

export default FullRequest;
