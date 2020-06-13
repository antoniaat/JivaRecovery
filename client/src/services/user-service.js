import handleResponse from "../utils/handle-response";

const userService = {
  getUser: function (id) {
    return fetch(`http://localhost:9999/api/user/${id}`, {
      method: "GET",
      credentials: "include",
    }).then(handleResponse);
  },

  register: function (data) {
    return fetch(`http://localhost:9999/api/user/register`, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    }).then(handleResponse);
  },

  login: function (data) {
    return fetch(`http://localhost:9999/api/user/login`, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    }).then(handleResponse);
  },

  logout: function () {
    return fetch(`http://localhost:9999/api/user/logout`, {
      method: "POST",
      credentials: "include",
    }).then(handleResponse);
  },

  edit: function (id, data) {
    return fetch(`http://localhost:9999/api/user/edit/${id}`, {
      body: JSON.stringify(data),
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
    }).then(handleResponse);
  },
};

export default userService;
