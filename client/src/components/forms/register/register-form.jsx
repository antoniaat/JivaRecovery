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
    <div className="register-form">
      <FormHeader
        title="Регистрация"
        subtitle="Добавете Вашите транспортни услуги в платформата"
      />

      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            name="name"
            onChange={(ev) => setName(ev.target.value)}
            value={name}
            placeholder="Име"
          />
        </label>
        <label>
          <input
            onChange={(ev) => setEmail(ev.target.value)}
            value={email}
            type="text"
            name="email"
            id="email"
            placeholder="Имейл"
          />
        </label>

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

        <TermsAndConditions />
        <input type="submit" value="РЕГИСТРАЦИЯ" />
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
