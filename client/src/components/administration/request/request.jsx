import React from "react";

const Request = ({
  brand,
  model,
  year,
  pickupLocation,
  deliveryLocation,
  pickupDate,
  deliveryDate,
  condition,
}) => (
  <div className="request">
    <div className="request-brand">{brand}</div>
    <div className="request-model">{model}</div>
    <div className="request-year">{year}</div>
    <div className="request-pickup-location">{pickupLocation}</div>
    <div className="request-delivery-location">{deliveryLocation}</div>
    <div className="request-pickup-date">{pickupDate}</div>
    <div className="request-delivery-date">{deliveryDate}</div>
    <div className="request-condition">{condition}</div>
  </div>
);

export default Request;
