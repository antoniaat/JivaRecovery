const authRoutes = require("../routes/auth");
const vehicleRoutes = require("../routes/vehicle");
const statsRoutes = require("../routes/stats");
const ordersRoutes = require("../routes/order");

module.exports = app => {
  app.use("/auth", authRoutes);
  app.use("/vehicle", vehicleRoutes);
  app.use("/stats", statsRoutes);
  app.use("/orders", ordersRoutes);
};
