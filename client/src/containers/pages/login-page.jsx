import React from "react";
import LoginForm from "components/forms/login/login-form";
import TopBar from "components/common/header/topbar/top-bar";
import Navbar from "components/common/header/navigation/navbar";
import Footer from "components/common/footer/footer";

const LoginPage = ({ history }) => (
  <>
    <TopBar />
    <Navbar />
    <LoginForm history={history} />
    <Footer />
  </>
);

export default LoginPage;
