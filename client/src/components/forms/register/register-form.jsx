import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormHeader from "../form-header/form-header";
import TermsAndConditions from "../terms-and-conditions";
import userService from "../../../services/user-service";
import "./register-form.scss";

const RegisterForm = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  function handleFormSubmit() {
    const user = {
      name,
      email,
      password,
      phone,
    };
    userService.register(user);
    history.push("/login");
  }

  return (
    <div className="register-form-wrapper">
      <FormHeader
        title="Регистрация"
        subtitle="Изпратете заявка за пътна помощ"
      />

      <form onSubmit={handleFormSubmit} className="register-form">
        <div className="register-form-content">
          <div className="register-form-labels-wrapper">
            <label>
              <input
                type="text"
                name="name"
                onChange={(ev) => setName(ev.target.value)}
                value={name}
                placeholder="Име"
              />
            </label>
            <label className="register-form-labels-wrapper">
              <input
                onChange={(ev) => setEmail(ev.target.value)}
                value={email}
                type="text"
                name="email"
                id="email"
                placeholder="Имейл"
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                name="phone"
                onChange={(ev) => setPhone(ev.target.value)}
                value={phone}
                placeholder="Телефон"
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                placeholder="Парола"
              />
            </label>
          </div>
        </div>

        <TermsAndConditions />
        <input
          type="submit"
          value="РЕГИСТРАЦИЯ"
          className="register-form-submit-btn"
        />
        <label className="additional-links">
          <span>
            <Link to="/login">ВЕЧЕ ИМАТЕ ПРОФИЛ?</Link>
          </span>
        </label>
      </form>
    </div>
  );
};

export default RegisterForm;
