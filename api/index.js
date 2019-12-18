const express = require("express");
const config = require("./config/config");
const dbConnection = require("./config/database");

const app = express();

(async () => {
  await dbConnection;
  console.log("Database Ready!");

  require("./config/express")(app);
  require("./config/routes")(app);

  app.use(function(err, req, res, next) {
    if (err.name === "ValidationError") {
      res.status(422).send({ msg: err.message });
      return;
    }

    if (err.name === "CastError") {
      res.status(400).send({ msg: "Invalid object id!" });
      return;
    }

    if (err.name === "MongoError" && err.code === 11000) {
      const errKey = Object.keys(err.keyValue)[0];
      res.status(422).send({ msg: `${errKey} is already taken!` });
      return;
    }

    console.log(err);
    res.status(500).send(err.message);
  });

  app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}!`);
  });
})();
