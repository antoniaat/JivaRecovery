import React from "react";
import RegisterForm from "../../components/forms/register/RegisterForm.js";

const RegisterPage = ({ history }) => {
  return (
    <>
      <RegisterForm history={history} />
    </>
  );
};

export default RegisterPage;
