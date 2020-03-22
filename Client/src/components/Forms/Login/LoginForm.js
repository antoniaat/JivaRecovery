import React, { useState } from "react";
import FormHeader from "../form-header/FormHeader";
import userService from "../../../services/user-service";
import "./LoginForm.scss";

const LoginForm = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit() {
    const user = { email, password };
    userService.login(user);
    history.push("/home");
  }

  return (
    <div className="login-form">
      <FormHeader
        title="Вход"
        subtitle="Добавете Вашите транспортни услуги в платформата"
      />

      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            onChange={ev => setEmail(ev.target.value)}
            value={email}
            name="email"
            type="text"
            placeholder="Имейл"
          />
        </label>

        <label>
          <input
            onChange={ev => setPassword(ev.target.value)}
            value={password}
            name="password"
            type="password"
            placeholder="Парола"
          />
        </label>
        <input type="submit" value="ВХОД" />
        <label className="additional-links">
          <span>
            <a href="/home">ЗАБРАВЕНА ПАРОЛА?</a>
          </span>
          <span>
            <a href="/register">НОВИ СТЕ ТУК?</a>
          </span>
        </label>
      </form>
    </div>
  );
};

export default LoginForm;
