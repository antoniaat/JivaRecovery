const config = require("../config/config");
const models = require("../models");
const jwt = require("./jwt");

module.exports = {
  forbidGuests: async (req, res, next) => {
    try {
      const accessToken = req.cookies[config.authCookieName] || "";
      const data = await jwt.verifyToken(accessToken);
      const user = await models.User.findOne({ _id: data.id });
      req.user = user;
      next();
    } catch (err) {
      res.status(403).send({ msg: "Unauthorized user!" });
    }
  },
  permitAdminOnly: async (req, res, next) => {
    try {
      const accessToken = req.cookies[config.authCookieName] || "";
      const data = await jwt.verifyToken(accessToken);
      const user = await models.User.findOne({ _id: data.id });

      if (user.role !== "admin") {
        throw new Error("User does not have admin rights!");
      }

      req.admin = user;
      next();
    } catch (err) {
      res.status(403).send({ msg: "Unauthorized user!" });
    }
  }
};
