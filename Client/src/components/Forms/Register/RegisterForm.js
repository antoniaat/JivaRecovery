import React, { useState, useCallback } from "react";
import * as yup from "yup";

import tlogo from "../../../assets/tlogo.png";
import { Link } from "react-router-dom";

// Services
import userService from "../../../services/user-service.js";
import redirectWithNotification from "../../../utils/redirect-with-notification.js";
import handleErrors from "../../../utils/handle-errors.js";

// Styles
import "./RegisterForm.scss";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required!")
    .email("Email is not valid!"),
  username: yup
    .string()
    .required("Username is required!")
    .min(4, "Username must be atleast 4 symbols!")
    .max(12, "Username must not exceed 12 symbols!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(8, "Password must be atleast 8 symbols!")
    .max(12, "Password must not exceed 12 symbols!"),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match!")
    .required("Repeat password is required!")
});

const RegisterForm = ({ history }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleFormSubmit = useCallback(
    async ev => {
      ev.preventDefault();

      try {
        await schema.validate(
          { email, username, password, rePassword },
          { abortEarly: false }
        );
        await userService.register({ email, username, password, rePassword });
        redirectWithNotification(
          history,
          "/user/login",
          "success",
          "Registered successfully!"
        );
      } catch (err) {
        handleErrors(err);
      }
    },
    [email, history, password, rePassword, username]
  );

  return (
    <div className="RegisterForm">
      <img src={tlogo}></img>
      <h1>Register</h1>
      <p>
        <span>-</span> Explore all avaliable vehicles <span>-</span>
      </p>

      <form onSubmit={handleFormSubmit}>
        {/* Email */}
        <label htmlFor="email">
          <input
            onChange={ev => setEmail(ev.target.value)}
            value={email}
            className="form-control"
            type="text"
            id="email"
            placeholder="EMAIL"
          />
        </label>

        {/* Username */}
        <label htmlFor="username">
          <input
            onChange={ev => setUsername(ev.target.value)}
            value={username}
            className="form-control"
            type="text"
            id="username"
            placeholder="USERNAME"
          />
        </label>

        {/* First name */}
        <label>
          <input
            type="text"
            name="firstName"
            // value={this.state.firstName}
            // onChange={this.hadleInputChange}
            placeholder="FIRST NAME"
          />
        </label>

        {/* Last name */}
        <label>
          <input
            type="text"
            name="lastName"
            // value={this.state.lastName}
            // onChange={this.handleInputChange}
            placeholder="LAST NAME"
          />
        </label>

        {/* Password */}
        <label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            value={password}
            placeholder="PASSWORD"
          />
        </label>

        {/* Confirm password */}
        <label>
          <input
            type="password"
            name="rePassword"
            value={rePassword}
            onChange={ev => setRePassword(ev.target.value)}
            value={rePassword}
            placeholder="CONFIRM PASSWORD"
          />
        </label>
        <label className="terms-and-conditions">
          <span>
            I accept to the <a href="#">Terms and Privacy Policy</a>
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
