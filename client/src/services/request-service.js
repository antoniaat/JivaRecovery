import handleResponse from "../utils/handle-response";

const requestService = {
  getRequest: function (id) {
    return fetch(`http://localhost:9999/api/request/${id}`, {
      method: "GET",
      credentials: "include",
    }).then(handleResponse);
  },

  add: function (data) {
    return fetch(`http://localhost:9999/api/request/add`, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    }).then(handleResponse);
  },

  edit: function (id) {
    return fetch(`http://localhost:9999/api/request/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
    }).then(handleResponse);
  },
};

export default requestService;
