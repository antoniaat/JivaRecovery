const apparelService = {
  loadAll: async (apparel, limit) => {
    let url = limit
      ? `http://localhost:8080/api/apparel/${apparel}?limit=${limit}`
      : `http://localhost:8080/api/apparel/${apparel}`;

    const res = await fetch(url);
    return res.json();
  },
  loadOne: async (apparel, id) => {
    const res = await fetch(
      `http://localhost:8080/api/apparel/${apparel}/${id}`
    );
    return res.json();
  },
  create: async (apparel, data) => {
    const res = await fetch(
      `http://localhost:8080/api/apparel/${apparel.toLowerCase()}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        method: "POST",
        body: JSON.stringify(data)
      }
    );
    return res.json();
  },
  delete: async (apparel, id) => {
    const res = await fetch(
      `http://localhost:8080/api/apparel/${apparel.toLowerCase()}/${id}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        method: "DELETE"
      }
    );
    return res.json();
  },
  edit: async (apparel, id, data) => {
    const res = await fetch(
      `http://localhost:8080/api/apparel/${apparel.toLowerCase()}/${id}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        method: "PUT",
        body: JSON.stringify(data)
      }
    );
    return res.json();
  }
};

export default apparelService;
