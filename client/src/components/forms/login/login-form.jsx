import "./login-form.scss";

import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import FormHeader from "../form-header/form-header";
import AdditionalLinks from "../additional-links";
import userService from "../../../services/user-service";
import { AuthContext } from "../../../ContextWrapper";

const additionalLinks = [
  {
    link: "/register",
    text: "НОВИ СТЕ ТУК?",
  },
];

const LoginForm = ({ history }) => {
  const { auth, setAuth } = useContext(AuthContext);
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();

    const email = state.email;
    const password = state.password;
    const user = { email, password };

    userService.login(user).then((res) => {
      setAuth(res._id);
      localStorage.setItem("auth", res._id);
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
      <FormHeader title="Вход" subtitle="Изпратете заявка за пътна помощ" />

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
        <input type="submit" value="ВХОД" />
        <AdditionalLinks links={additionalLinks} />
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
