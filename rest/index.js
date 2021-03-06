const config = require("./config/config");
const dbConnection = require("./config/database");

const app = require("express")();

dbConnection()
  .then(() => {
    require("./config/express")(app);

    require("./config/routes")(app);

    app.use(function (err, req, res, next) {
      if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        console.error(err);
        return res.sendStatus(400); // Bad request
      }

      next();
    });

    app.listen(config.port, console.log(`Listening on port ${config.port}!`));
  })
  .catch(console.error);
