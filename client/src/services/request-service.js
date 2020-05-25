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

  edit: function (id, data) {
    return fetch(`http://localhost:9999/api/request/edit/${id}`, {
      body: JSON.stringify(data),
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
    }).then(handleResponse);
  },

  delete: function (id) {
    return fetch(`http://localhost:9999/api/request/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then(handleResponse);
  },
};

export default requestService;
