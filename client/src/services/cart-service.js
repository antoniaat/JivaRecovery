const cartService = {
  loadAll: async () => {
    const res = await fetch("http://localhost:8080/api/cart-items", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET",
      credentials: "include"
    });
    return res.json();
  },
  addToCart: async data => {
    const res = await fetch("http://localhost:8080/api/cart-items", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data)
    });
    return res.json();
  },
  deleteFromCart: async id => {
    const res = await fetch(`http://localhost:8080/api/cart-items/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE",
      credentials: "include"
    });
    return res.json();
  },
  checkout: async cartItems => {
    const res = await fetch("http://localhost:8080/api/cart-items/checkout", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      credentials: "include",
      body: JSON.stringify(cartItems)
    });
    return res.json();
  }
};

export default cartService;
