const orderService = {
  loadAll: async () => {
    const res = await fetch('http://localhost:8080/api/orders', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      credentials: 'include',
    });
    return res.json();
  },
  changeStatus: async (newStatus, id) => {
    const res = await fetch(`http://localhost:8080/api/orders/status/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify({ status: newStatus })
    });
    return res.json();
  }
};

export default orderService; 