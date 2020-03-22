import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormHeader from "../form-header/FormHeader";
import TermsAndConditions from "../terms-and-conditions/TermsAndConditions";
import userService from "../../../services/user-service";
import "./RegisterForm.scss";

const RegisterForm = ({ history }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  function handleFormSubmit() {
    const user = { email, firstName, lastName, password };
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
            onChange={ev => setEmail(ev.target.value)}
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
            name="firstName"
            onChange={ev => setFirstName(ev.target.value)}
            value={firstName}
            placeholder="Име"
          />
        </label>

        <label>
          <input
            type="text"
            name="lastName"
            onChange={ev => setLastName(ev.target.value)}
            value={lastName}
            placeholder="Фамилия"
          />
        </label>

        <label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            placeholder="Парола"
          />
        </label>

        <label>
          <input
            type="password"
            name="rePassword"
            onChange={ev => setRePassword(ev.target.value)}
            value={rePassword}
            placeholder="Повторете паролата"
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
