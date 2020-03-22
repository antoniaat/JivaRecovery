import React from "react";
import LoginForm from "../../components/forms/login/LoginForm.js";

const LoginPage = ({ history }) => {
  return (
    <>
      <LoginForm history={history} />
    </>
  );
};

export default LoginPage;
