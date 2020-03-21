import React from "react";

import "./LoginForm.scss";
import tlogo from "../../../assets/images/tlogo.png";

const LoginForm = () => {
  return (
    <div className="LoginForm">
      <img src={tlogo} alt="logo"></img>
      <h1>Login</h1>
      <p>
        <span>-</span> Explore all avaliable vehicles <span>-</span>
      </p>

      <form>
        <label htmlFor="email">
          <input
            // onChange={ev => setEmail(ev.target.value)}
            // value={email}
            name="email"
            className="form-control"
            type="text"
            id="email"
            placeholder="EMAIL"
          />
        </label>

        <label htmlFor="password">
          <input
            // onChange={ev => setPassword(ev.target.value)}
            // value={password}
            name="password"
            className="form-control"
            type="password"
            id="password"
            placeholder="PASSWORD"
          />
        </label>
        <label className="terms-and-conditions">
          <span>
            I accept to the <a href="/home">Terms & Privacy Policy</a>
          </span>
        </label>
        <input type="submit" value="LOGIN" />
        <label className="additional-links">
          <span>
            <a href="/home">FORGOT PASSWORD</a>
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
