import "./admin-panel.scss";
import "react-tabs/style/react-tabs.css";

import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Request from "../request/request";
import requestService from "../../../services/request-service";

const AdminPanel = () => {
  let [requests, setRequests] = useState([]);

  useEffect(() => {
    requestService.getRequest("all").then((res) => {
      setRequests(res);
    });
  }, []);

  return (
    <div className="admin-panel">
      <Tabs>
        <TabList>
          <Tab>Заявки</Tab>
          <Tab>Потребители</Tab>
          <Tab>Обратна връзка</Tab>
        </TabList>

        <TabPanel>
          {requests.length > 0
            ? requests.map(
              ({
                brand,
                model,
                year,
                pickupLocation,
                deliveryLocation,
                pickupDate,
                deliveryDate,
                condition,
              }) => {
                return (
                  <Request
                    brand={brand}
                    model={model}
                    year={year}
                    pickupLocation={pickupLocation}
                    deliveryLocation={deliveryLocation}
                    pickupDate={pickupDate}
                    deliveryDate={deliveryDate}
                    condition={condition}
                  />
                );
              }
            )
            : "Няма текущи заявки"}
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
