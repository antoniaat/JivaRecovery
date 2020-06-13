import React from "react";
import { string } from "prop-types";

import EditUserModal from 'components/modals/edit-user-modal';

const ProfileInfo = ({ name, email, phone }) => (
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

ProfileInfo.propTypes = {
  name: string.isRequired,
  email: string.isRequired,
  phone: string.isRequired,
};

export default ProfileInfo;
