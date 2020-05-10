import "./login-form.scss";

import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import userService from "../../../services/user-service";
import FormHeader from "../form-header/form-header";
// import Label from '../label';
import Submit from "../submit";
import AdditionalLinks from "../additional-links";

import { AuthContext } from "../../../ContextWrapper";
import { func } from "prop-types";

const additionalLinks = [
  {
    link: "/home",
    text: "ЗАБРАВЕНА ПАРОЛА?",
  },
  {
    link: "/register",
    text: "НОВИ СТЕ ТУК?",
  },
];

const LoginForm = ({ history }) => {
  const { setAuth } = useContext(AuthContext);
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();

    const email = state.email;
    const password = state.password;
    const user = { email, password };

    userService.login(user).then(() => {
      setAuth(true);
      history.push("/home");
    });
  }

  function handleChange(evt) {
    const value = evt.target.value;

    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  return (
    <div className="login-form">
      <FormHeader
        title="Вход"
        subtitle="Добавете вашите транспортни услуги в платформата"
      />

      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="ИМЕЙЛ"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="ПАРОЛА"
          />
        </label>
        {/* <Label type="email" name="email" placeholder="ИМЕЙЛ" /> */}
        {/* <Label type="password" name="password" placeholder="ПАРОЛА" /> */}
        {/* <Submit value="ВХОД" /> */}
        <input type="submit" value="ВХОД" />
        <AdditionalLinks links={additionalLinks} />
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
