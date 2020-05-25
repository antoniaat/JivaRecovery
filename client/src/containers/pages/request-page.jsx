import React from "react";
import RequestForm from "../../components/forms/request/request-form";
import TopBar from "components/common/header/topbar/top-bar";
import Navbar from "components/common/header/navigation/navbar";
import Footer from "components/common/footer/footer";

const RequestPage = () => (
  <>
    <TopBar />
    <Navbar />
    <RequestForm />
    <Footer />
  </>
);

export default RequestPage;
