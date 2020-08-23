import "bootstrap/dist/css/bootstrap.min.css";
import "./edit-user-modal.scss";

import React, { useContext, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import userService from "../../services/user-service";
import { AuthContext } from "../../ContextWrapper";

const EditUserModal = ({ updateProfile, user, updateUser }) => {
  const { auth } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState(user?.password || "");
  const [phone, setPhone] = useState(user?.phone || "");

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const handleDelete = () => {
    setShow(false);
    userService.delete(auth);
  };
  const handleSave = async () => {

    setShow(false);
    const updatedUser = {
      name,
      email,
      password,
      phone,
    };

    if (!user) {
      const userProfile = await userService.edit(auth, updatedUser);

      updateProfile({
        name: userProfile.name,
        email: userProfile.email,
        phone: userProfile.phone,
      });
    } else {
      const userProfile = await userService.edit(user["_id"], updatedUser);

      updateUser(user["_id"], userProfile);
    }
  };

  useEffect(() => {
    console.log(user,"HAHAAH")
    if (!user) {
      userService.getUser(auth).then((data) => {
        setName(data.name);
        setEmail(data.email);
        setPassword(data.password);
        setPhone(data.phone);
      });
    }
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
