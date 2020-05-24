import "./admin-panel.scss";
import "react-tabs/style/react-tabs.css";

import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DataTable from "react-data-table-component";
import Request from "../request/request";
import requestService from "../../../services/request-service";

const AdminPanel = () => {
  let [requests, setRequests] = useState([]);
  const requestColumns = [
    {
      name: "Марка",
      selector: "brand",
      sortable: true,
    },
    {
      name: "Модел",
      selector: "model",
      sortable: true,
    },
    {
      name: "Година",
      selector: "year",
      sortable: true,
    },
    // {
    //   name: "Взимане",
    //   selector: "pickupLocation",
    //   sortable: true,
    // },
    // {
    //   name: "Доставяне",
    //   selector: "deliveryLocation",
    //   sortable: true,
    // },
    // {
    //   name: "Дата - Взимане",
    //   selector: "pickupDate",
    //   sortable: true,
    // },
    // {
    //   name: "Дата - Доставяне",
    //   selector: "deliveryDate",
    //   sortable: true,
    // },
    {
      name: "Състояние",
      selector: "condition",
      sortable: true,
    },
  ];

  const ExpanableRow = ({ data }) => {
    const { pickupLocation, deliveryLocation, pickupDate, deliveryDate } = data;

    return (
      <Request
        pickupLocation={pickupLocation}
        deliveryLocation={deliveryLocation}
        pickupDate={pickupDate}
        deliveryDate={deliveryDate}
      />
    );
  };

  // const requestData = requests.map(
  //   ({
  //     brand,
  //     model,
  //     year,
  //     pickupLocation,
  //     deliveryLocation,
  //     pickupDate,
  //     deliveryDate,
  //     condition,
  //   }) => {
  //     return (
  //       <Request
  //         brand={brand}
  //         model={model}
  //         year={year}
  //         pickupLocation={pickupLocation}
  //         deliveryLocation={deliveryLocation}
  //         pickupDate={pickupDate}
  //         deliveryDate={deliveryDate}
  //         condition={condition}
  //       />
  //     );
  //   }
  // );

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
          {requests.length > 0 ? (
            <DataTable
              title="Requests"
              columns={requestColumns}
              data={requests}
              expandableRows
              expandableRowDisabled={(row) => row.disabled}
              expandableRowsComponent={<ExpanableRow />}
            />
          ) : (
            "Няма текущи заявки"
          )}
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
