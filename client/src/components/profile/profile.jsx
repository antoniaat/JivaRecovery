import "./profile.scss";

import React, { useContext, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
        </TabList>
        <TabPanel>
          <div>{name}</div>
          <div>{email}</div>
          <div>{phone}</div>
          <div>{requests}</div>
          <div>{feedback}</div>
        </TabPanel>
        <TabPanel>haha</TabPanel>
      </Tabs>
    </section>
  );
};

export default Profile;
