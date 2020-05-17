import "./admin-panel.scss";
import "react-tabs/style/react-tabs.css";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const AdminPanel = () => (
  <div className="admin-panel">
    <Tabs>
      <TabList>
        <Tab>Requests</Tab>
        <Tab>Users</Tab>
        <Tab>Feedbacks</Tab>
      </TabList>

      <TabPanel>
        <p>Requests</p>
      </TabPanel>
      <TabPanel>
        <p>Users</p>
      </TabPanel>
      <TabPanel>
        <p>Feedbacks</p>
      </TabPanel>
    </Tabs>
  </div>
);

export default AdminPanel;
