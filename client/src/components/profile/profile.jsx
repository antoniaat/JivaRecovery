import "./profile.scss";

import React, { useContext, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import EditUserModal from "components/modals/edit-user-modal";
import userService from "../../services/user-service";
import { AuthContext } from "../../ContextWrapper";

const Profile = () => {
  const { auth } = useContext(AuthContext);
  const [state, setState] = React.useState({
    name: "",
    email: "",
    phone: "",
    requests: [],
    feedback: [],
  });
  const { name, email, phone, requests, feedback } = state;

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
    <section className="profile">
      <Tabs>
        <TabList>
          <Tab>Информация</Tab>
          <Tab>Заявки</Tab>
          <Tab>Обратна връзка</Tab>
        </TabList>
        <TabPanel>
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
        </TabPanel>
        <TabPanel>
          <div>{requests}</div>
        </TabPanel>
        <TabPanel>
          <div>{feedback}</div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Profile;
