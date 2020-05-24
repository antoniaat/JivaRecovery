import "bootstrap/dist/css/bootstrap.min.css";
import "./request.scss";

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import EditRequestForm from "../../forms/request/edit/edit-request-form";

const Request = ({
  _id,
  pickupLocation,
  deliveryLocation,
  pickupDate,
  deliveryDate,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
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
      <button
        className="button button-primary request-btn"
        onClick={handleShow}
      >
        Редактирай
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Редактиране</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditRequestForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Затвори
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Запази
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Request;
