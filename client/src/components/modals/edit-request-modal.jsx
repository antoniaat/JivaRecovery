import "bootstrap/dist/css/bootstrap.min.css";
import "./edit-request-modal.scss";

import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import requestService from "../../services/request-service";

const EditRequestModal = ({ requestId }) => {
  const [state, setState] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    setShow(false);

    requestService.edit(requestId, state).then(() => {
      console.log(state);
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setState((prevState) => {
      return {
        ...prevState,
        name: value,
      };
    });
  };

  useEffect(() => {
    requestService.getRequest(requestId).then((data) => {
      setState((prevState) => ({
        ...data,
      }));
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
                  value={state.brand}
                  onChange={(e) => {handleChange(e)}}
                  placeholder="Марка"
                  required
                />
              </label>
              <label>
                <input
                  onChange={handleChange}
                  value={state.model}
                  type="text"
                  name="model"
                  placeholder="Модел"
                  required
                />
              </label>
              <label>
                <input
                  onChange={handleChange}
                  value={state.year}
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
                  onChange={handleChange}
                  value={state.pickupLocation}
                  placeholder="Местоположение за взимане"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="deliveryLocation"
                  onChange={handleChange}
                  value={state.deliveryLocation}
                  placeholder="Местоположение за доставяне"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="pickupDate"
                  onChange={handleChange}
                  value={state.pickupDate}
                  placeholder="Дата за взимане"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="deliveryDate"
                  onChange={handleChange}
                  value={state.deliveryDate}
                  placeholder="Дата за доставяне"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="condition"
                  onChange={handleChange}
                  value={state.condition}
                  placeholder="Състояние на МПС"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="status"
                  onChange={handleChange}
                  value={state.status}
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
