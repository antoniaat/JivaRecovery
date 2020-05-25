import React, { useContext, useEffect } from "react";
import TopBar from "components/common/header/topbar/top-bar";
import Navbar from "components/common/header/navigation/navbar";
import Footer from "components/common/footer/footer";

import userService from "../../services/user-service";
import { AuthContext } from "../../ContextWrapper";

const ProfilePage = () => {
  const { auth } = useContext(AuthContext);
  const [state, setState] = React.useState({
    name: "",
    email: "",
    phone: "",
    requests: [],
    feedback: [],
  });

  useEffect(() => {
    userService.getUser(auth).then((res) => {
      const { name, email, phone, requests, feedback } = res;

      setState({
        name: name,
        email: email,
        phone: phone,
        requests: requests,
        feedback: feedback,
      });
    });
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <div>Profile</div>
      <div>{state.name}</div>
      <div>{state.email}</div>
      <div>{state.phone}</div>
      <div>{state.requests}</div>
      <div>{state.feedback}</div>
      <Footer />
    </>
  );
};

export default ProfilePage;
