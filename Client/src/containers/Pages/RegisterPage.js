import React, { Fragment } from "react";
import RegisterForm from "../../components/Forms/Register/RegisterForm.js";

const RegisterPage = ({ history }) => {
  return (
    <Fragment>
      <RegisterForm history={history} />
    </Fragment>
  );
};

export default RegisterPage;
