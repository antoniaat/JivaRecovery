import React from "react";
import RegisterForm from "components/forms/register/register-form";
import TopBar from "components/common/header/topbar/top-bar";
import Navbar from "components/common/header/navigation/navbar";
import Footer from "components/common/footer/footer";

const RegisterPage = ({ history }) => (
  <>
    <TopBar />
    <Navbar />
    <RegisterForm history={history} />
    <Footer />
  </>
);

export default RegisterPage;
