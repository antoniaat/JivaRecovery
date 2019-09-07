const express = require("express");
const Vehicle = require("../models/Vehicle");
const User = require("../models/User");

const router = new express.Router();

router.get("/", (req, res) => {
  User.count({}).then(users => {
    Vehicle.count({}).then(products => {
      res.status(200).json({
        products,
        users
      });
    });
  });
});

module.exports = router;
