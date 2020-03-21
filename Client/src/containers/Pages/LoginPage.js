import React, { Fragment } from "react";
import LoginForm from "../../components/forms/login/LoginForm.js";

const LoginPage = ({ history }) => {
  return (
    <Fragment>
      <LoginForm history={history} />
    </Fragment>
  );
};

export default LoginPage;
