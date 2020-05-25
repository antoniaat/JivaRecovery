import "bootstrap/dist/css/bootstrap.min.css";
import "./edit-user-modal.scss";

import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import userService from "services/user-service";

const EditUserModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [show, setShow] = useState(false);
  const handleShow = (data) => {
    setShow(true)
  };
  const handleClose = () => setShow(false);
  const handleDelete = () => {
    setShow(false);
    // userService.delete(requestId);
  };
  const handleSave = () => {
    setShow(false);
    const updatedUser = {
      name,
      email,
      password,
      phone,
    };

    // userService.edit(requestId, updatedUser);
  };

  useEffect(() => {
    // userService.getUser(userId).then((data) => {
    //   const { name, email, password, phone } = data;

    //   setName(name);
    //   setEmail(email);
    //   setPassword(password);
    //   setPhone(phone);
    // });
  }, []);

  return (
    <>
      <button
        className="button button-primary request-btn"
        onClick={handleShow}
      >
        Редактирай
      </button>
      <Modal show={show} onHide={handleClose} className="edit-user-modal">
        <Modal.Header closeButton>
          <Modal.Title>Редактиране</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="user-form edit-user-form">
            <form>
              <label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Име"
                />
              </label>
              <label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="Имейл"
                />
              </label>
              <label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="Парола"
                />
              </label>
              <label>
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Телефон"
                />
              </label>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="button button-danger" onClick={handleDelete}>
            Изтриване
          </button>
          <button className="button button-primary" onClick={handleClose}>
            Затвори
          </button>
          <button className="button button-success" onClick={handleSave}>
            Запази
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditUserModal;
