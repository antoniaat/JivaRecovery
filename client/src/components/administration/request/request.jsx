import "bootstrap/dist/css/bootstrap.min.css";
import "./request.scss";

import React, {useState} from "react";
import EditRequestModal from "../../modals/edit-request-modal";

const Request = ({
  _id,
  brand,
  model,
  year,
  pickupLocation,
  deliveryLocation,
  pickupDate,
  deliveryDate,
  condition,
  status,
}) => {
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
    <div className="request">
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
      <EditRequestModal requestId={_id} updateData={setRequestData}/>
    </div>
  );
};

export default Request;
