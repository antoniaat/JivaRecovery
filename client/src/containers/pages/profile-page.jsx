import React from "react";
import TopBar from "components/common/header/topbar/top-bar";
import Navbar from "components/common/header/navigation/navbar";
import Footer from "components/common/footer/footer";
import Profile from "components/profile/profile";

const ProfilePage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Profile />
      <Footer />
    </>
  );
};

export default ProfilePage;
