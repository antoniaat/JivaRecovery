import React, { useEffect, useState, useContext } from "react";

import FullRequest from "components/profile/full-request";
import { AuthContext } from "../../ContextWrapper";
import requestService from "../../services/request-service";

const RequestPanel = () => {
  const { auth } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const userRequests = requests.filter((req) => req.userId === auth);

  const noUserRequestsPanel = (
    <div>
      <h6>Нямате изпратени заявки.</h6>
    </div>
  );

  useEffect(() => {
    requestService.getRequest("all").then((res) => {
      setRequests(res);
    });
  }, []);

  return (
    <article className="profile-request-panel">
      {userRequests.length > 0
        ? userRequests.map((data) => <FullRequest {...data} />)
        : noUserRequestsPanel}
    </article>
  );
};

export default RequestPanel;
