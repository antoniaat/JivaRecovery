import "./profile.scss";

import React, { useContext, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import EditUserModal from "components/modals/edit-user-modal";
import userService from "../../services/user-service";
import { AuthContext } from "../../ContextWrapper";
import ProfileInfo from "./profile-info";

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
          <ProfileInfo name={name} email={email} phone={phone} />
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
