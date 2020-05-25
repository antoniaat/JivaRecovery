import React from "react";
import TopBar from "components/common/header/topbar/top-bar";
import Navbar from "components/common/header/navigation/navbar";
import Footer from "components/common/footer/footer";

const NotFoundPage = () => (
  <div className="not-found-page">
    <TopBar />
    <Navbar />
    <main>NotFoundPage</main>
    <Footer />
  </div>
);

export default NotFoundPage;
