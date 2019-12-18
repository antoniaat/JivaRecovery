const routers = require("../routes");

module.exports = app => {
  // app.use("/api/apparel/men", routers.menApparel);

  // app.use("/api/apparel/women", routers.womenApparel);

  app.use("/api/user", routers.user);

  // app.use("/api/apparel/accessories", routers.accessory);

  // app.use("/api/orders", routers.order);

  // app.use("/api/cart-items", routers.cartItem);

  app.get("*", (req, res) => {
    res.send("<h1>404 Page Not Found!</h1>");
  });
};
