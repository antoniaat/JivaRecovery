import "./admin-panel.scss";
import "react-tabs/style/react-tabs.css";

import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import requestService from "../../../services/request-service";

const AdminPanel = () => {
  let [ requests, setRequests ] = useState([]);

  useEffect(()=> {
    requestService.getRequest("all").then((res) => {
      setRequests(res);
    });
  }, []);

  return (
    <div className="admin-panel">
      <Tabs>
        <TabList>
          <Tab>Requests</Tab>
          <Tab>Users</Tab>
          <Tab>Feedbacks</Tab>
        </TabList>

        <TabPanel>
          {requests.map(({brand, model, year, pickupLocation, deliveryLocation, pickupDate, deliveryDate, condition}) => 
          {
            return <div>{model}</div>
          })}
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
};

export default AdminPanel;
