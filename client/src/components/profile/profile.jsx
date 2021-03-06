import "./profile.scss";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProfileInfo from "./profile-info";
import RequestPanel from "./request-panel";

const Profile = () => {
  return (
    <section className="profile">
      <Tabs>
        <TabList>
          <Tab>Информация</Tab>
          <Tab>Заявки</Tab>
        </TabList>
        <TabPanel>
          <ProfileInfo />
        </TabPanel>
        <TabPanel>
          <RequestPanel />
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Profile;
