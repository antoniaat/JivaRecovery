import React, { useState, useCallback, useContext } from "react";
import * as yup from "yup";

import { UserContext } from "../../Context-Wrapper/";
import userService from "../../../services/user-service.js";
import redirectWithNotification from "../../../utils/redirect-with-notification";
import handleErrors from "../../../utils/handle-errors";

import "./LoginForm.scss";
import tlogo from "../../../assets/tlogo.png";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required!")
    .email("Email is not valid!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(8, "Password must be atleast 8 symbols!")
    .max(12, "Password must not exceed 12 symbols!")
});

const LoginForm = ({ history }) => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = useCallback(
    async ev => {
      ev.preventDefault();

      try {
        await schema.validate({ email, password }, { abortEarly: false });
        const user = await userService.login({ email, password });
        setUser(user);
        redirectWithNotification(
          history,
          "/",
          "success",
          "Logged in successfully!"
        );
      } catch (err) {
        handleErrors(err);
      }
    },
    [email, history, password, setUser]
  );

  return (
    <div className="LoginForm">
      <img src={tlogo}></img>
      <h1>Login</h1>
      <p>
        <span>-</span> Explore all avaliable vehicles <span>-</span>
      </p>

      <form onSubmit={handleFormSubmit}>
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

        <label htmlFor="password">
          <input
            onChange={ev => setPassword(ev.target.value)}
            value={password}
            className="form-control"
            type="password"
            id="password"
            placeholder="PASSWORD"
          />
        </label>
        <label className="terms-and-conditions">
          <span>
            I accept to the <a href="#">Terms & Privacy Policy</a>
          </span>
        </label>
        <input type="submit" value="LOGIN" />
        <label className="additional-links">
          <span>
            <a href="#">FORGOT PASSWORD</a>
          </span>
          <span>
            <a href="/register">NEW TO JIVATRADE?</a>
          </span>
        </label>
      </form>
    </div>
  );
};

export default LoginForm;
