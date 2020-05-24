import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import EditRequestForm from "../forms/request/edit/edit-request-form";

const EditRequestModal = ({ requestId, isShow }) => {
  const [show, setShow] = useState(isShow);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    </>
  );
};

export default EditRequestModal;
