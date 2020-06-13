import "./admin-panel.scss";
import "react-tabs/style/react-tabs.css";

import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DataTable from "react-data-table-component";
import Request from "../request/request";
import EditUserModal from '../../modals/edit-user-modal';
import requestService from "../../../services/request-service";
import userService from "../../../services/user-service";

const AdminPanel = () => {
  let [requests, setRequests] = useState([]);
  let [users, setUsers] = useState([]);
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
    {
      name: "Състояние",
      selector: "condition",
      sortable: true,
    },
    {
      name: "Статус",
      selector: "status",
      sortable: true,
      className: "status",
    },
  ];

  const userColumns = [
    {
      name: "Име",
      selector: "name",
      sortable: true,
    },
    {
      name: "Имейл",
      selector: "email",
      sortable: true,
    },
    {
      name: "Телефон",
      selector: "phone",
      sortable: true,
    },
    {
      name: "",
      cell: ({ data }) => (
        <EditUserModal {...data}/>
      ),
    },
  ];

  const conditionalRowStyles = [
    {
      when: (row) => row.status === "Изчакване",
      style: {
        backgroundColor: "rgba(240,219,8,0.2)",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      when: (row) => row.status === "Одобрена",
      style: {
        backgroundColor: "rgba(8, 240, 53, 0.2)",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      when: (row) => row.status === "Отхвърлена",
      style: {
        backgroundColor: "rgba(240, 8, 45, 0.2)",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      when: (row) => row.status === "Завършена",
      style: {
        backgroundColor: "rgba(8, 159, 240, 0.2)",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  ];

  const ExpanableRequestRow = ({ data }) => {
    return <Request {...data} />;
  };

  useEffect(() => {
    requestService.getRequest("all").then((res) => {
      setRequests(res);
    });
    userService.getUser("all").then((res) => {
      setUsers(res);
    });
  }, []);

  return (
    <div className="admin-panel">
      <Tabs>
        <TabList>
          <Tab>Заявки</Tab>
          <Tab>Потребители</Tab>
        </TabList>

        <TabPanel>
          {requests.length > 0 ? (
            <DataTable
              columns={requestColumns}
              data={requests}
              responsive
              defaultSortField
              pagination
              paginationRowsPerPageOptions={[2, 5, 10, 15, 20, 25, 30]}
              pointerOnHover
              expandableRows
              expandableRowDisabled={(row) => row.disabled}
              expandableRowsComponent={<ExpanableRequestRow />}
              conditionalRowStyles={conditionalRowStyles}
            />
          ) : (
            "Няма текущи заявки"
          )}
        </TabPanel>
        <TabPanel>
          {users.length > 0 ? (
            <DataTable
              columns={userColumns}
              data={users}
              responsive
              defaultSortField
              pagination
              paginationRowsPerPageOptions={[2, 5, 10, 15, 20, 25, 30]}
              pointerOnHover
            />
          ) : (
            "Няма регистрирани потребители"
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AdminPanel;
