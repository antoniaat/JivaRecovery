import "bootstrap/dist/css/bootstrap.min.css";
import "./edit-request-modal.scss";

import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import requestService from "../../services/request-service";

const EditRequestModal = ({ requestId }) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [condition, setCondition] = useState("");
  const [status, setStatus] = useState("");

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    setShow(false);
    const updatedRequest = {
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

    requestService.edit(requestId, updatedRequest);
  };

  useEffect(() => {
    requestService.getRequest(requestId).then((data) => {
      const {
        brand,
        model,
        year,
        pickupLocation,
        deliveryLocation,
        pickupDate,
        deliveryDate,
        condition,
        status,
      } = data;

      setBrand(brand);
      setModel(model);
      setYear(year);
      setPickupLocation(pickupLocation);
      setDeliveryLocation(deliveryLocation);
      setPickupDate(pickupDate);
      setDeliveryDate(deliveryDate);
      setCondition(condition);
      setStatus(status);
    });
  }, []);

  return (
    <>
      <button
        className="button button-primary request-btn"
        onClick={handleShow}
      >
        Редактирай
      </button>
      <Modal show={show} onHide={handleClose} className="edit-request-modal">
        <Modal.Header closeButton>
          <Modal.Title>Редактиране</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="request-form edit-request-form">
            <form>
              <label>
                <input
                  type="text"
                  name="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Марка"
                  required
                />
              </label>
              <label>
                <input
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  type="text"
                  name="model"
                  placeholder="Модел"
                  required
                />
              </label>
              <label>
                <input
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
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
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="Местоположение за взимане"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="deliveryLocation"
                  value={deliveryLocation}
                  onChange={(e) => setDeliveryLocation(e.target.value)}
                  placeholder="Местоположение за доставяне"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="pickupDate"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  placeholder="Дата за взимане"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="deliveryDate"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  placeholder="Дата за доставяне"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="condition"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  placeholder="Състояние на МПС"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  placeholder="Статус"
                  required
                />
              </label>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Затвори
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Запази
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditRequestModal;