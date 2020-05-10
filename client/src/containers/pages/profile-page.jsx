import React, { useContext, useState } from "react";
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

  return (
    <>
      <div>Profile</div>
      <div>{state.name}</div>
      <div>{state.email}</div>
      <div>{state.phone}</div>
      <div>{state.requests}</div>
      <div>{state.feedback}</div>
    </>
  );
};

export default ProfilePage;
