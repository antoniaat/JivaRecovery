import React, { useEffect, useContext } from "react";

import EditUserModal from "components/modals/edit-user-modal";
import { AuthContext } from "../../ContextWrapper";
import userService from "../../services/user-service";

const ProfileInfo = () => {
  const { auth } = useContext(AuthContext);
  const [state, setState] = React.useState({
    name: "",
    email: "",
    phone: "",
  });
  const { name, email, phone } = state;

  useEffect(() => {
    userService.getUser(auth).then((res) => {
      const { name, email, phone } = res;

      setState({
        name: name,
        email: email,
        phone: phone,
      });
    });
  }, []);

  return (
    <>
      <div className="profile-info-wrapper">
        <strong>Име:</strong>
        <span>{name}</span>
      </div>
      <div className="profile-info-wrapper">
        <strong>Имейл:</strong>
        <span>{email}</span>
      </div>
      <div className="profile-info-wrapper">
        <strong>Телефон:</strong>
        <span>{phone}</span>
      </div>
      <EditUserModal />
    </>
  );
};

export default ProfileInfo;
