import React, { useEffect, useState, useContext } from "react";

import FullRequest from "components/profile/full-request";
import { AuthContext } from "../../ContextWrapper";
import requestService from "../../services/request-service";

const RequestPanel = () => {
  const { auth } = useContext(AuthContext);
  let [requests, setRequests] = useState([]);
  const userRequests = requests.filter((req) => req.userId === auth);

  useEffect(() => {
    requestService.getRequest("all").then((res) => {
      setRequests(res);
    });
  }, []);

  return (
    <article className="profile-request-panel">
      {userRequests.map((data) => {
        return <FullRequest {...data} />;
      })}
    </article>
  );
};

export default RequestPanel;
