import React, { useState } from "react";
import tlogo from "../../../assets/images/tlogo.png";
import { Link } from "react-router-dom";
import userService from "../../../services/user-service";
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  function handleFormSubmit() {
    const user = { email, firstName, lastName, password };
    userService.register(user);
    // history.push("/login");
  }

  return (
    <div className="RegisterForm">
      <img src={tlogo} alt="logo"></img>
      <h1>Регистрация</h1>
      <p>
        <span>-</span> Добавете Вашите транспортни услуги в платформата{" "}
        <span>-</span>
      </p>

      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            onChange={ev => setEmail(ev.target.value)}
            value={email}
            className="form-control"
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
        <label className="terms-and-conditions">
          <span>
            Приемам <a hreg="home"> правилата </a> и
            <a href="/home"> политиката за поверителност на сайта</a>.
          </span>
        </label>
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
