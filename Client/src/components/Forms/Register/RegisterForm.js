import React, { useState, useCallback } from "react";
import tlogo from "../../../assets/tlogo.png";
import { Link } from "react-router-dom";
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <div className="RegisterForm">
      <img src={tlogo} alt="logo"></img>
      <h1>Register</h1>
      <p>
        <span>-</span> Explore all avaliable vehicles <span>-</span>
      </p>

      <form>
        <label htmlFor="email">
          <input
            onChange={ev => setEmail(ev.target.value)}
            value={email}
            className="form-control"
            type="text"
            name="email"
            id="email"
            placeholder="EMAIL"
          />
        </label>

        <label htmlFor="username">
          <input
            onChange={ev => setUsername(ev.target.value)}
            value={username}
            className="form-control"
            type="text"
            name="username"
            id="username"
            placeholder="USERNAME"
          />
        </label>

        <label>
          <input
            type="text"
            name="firstName"
            onChange={ev => setFirstName(ev.target.value)}
            value={firstName}
            placeholder="FIRST NAME"
          />
        </label>

        <label>
          <input
            type="text"
            name="lastName"
            onChange={ev => setLastName(ev.target.value)}
            value={lastName}
            placeholder="LAST NAME"
          />
        </label>

        <label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            placeholder="PASSWORD"
          />
        </label>

        <label>
          <input
            type="password"
            name="rePassword"
            onChange={ev => setRePassword(ev.target.value)}
            value={rePassword}
            placeholder="CONFIRM PASSWORD"
          />
        </label>
        <label className="terms-and-conditions">
          <span>
            I accept to the <a href="/home">Terms and Privacy Policy</a>
          </span>
        </label>
        <input type="submit" value="REGISTER" />
        <label className="additional-links">
          <span>
            <Link to="/login">HAVE AN ACCOUNT?</Link>
          </span>
        </label>
      </form>
    </div>
  );
};

export default RegisterForm;
