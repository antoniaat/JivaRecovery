const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

module.exports = app => {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true
    })
  );

  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

  app.use(express.json());

  app.use(cookieParser());
};
