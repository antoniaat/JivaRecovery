import React from "react";
import AdminPanel from "../../components/administration/admin-panel/admin-panel";
import Navbar from "components/common/header/navigation/navbar";
import Footer from "components/common/footer/footer";

const AdministrationPage = () => (
  <>
    <Navbar />
    <AdminPanel />
    <Footer />
  </>
);

export default AdministrationPage;
