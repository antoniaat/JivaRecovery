import React, { Fragment } from "react";
import RegisterForm from "../../components/forms/register/RegisterForm.js";

const RegisterPage = ({ history }) => {
  return (
    <Fragment>
      <RegisterForm history={history} />
    </Fragment>
  );
};

export default RegisterPage;
