const router = require("express").Router();
const controllers = require("../controllers");
const { auth } = require("../utils");

router.get("/", auth.forbidGuests, controllers.user.get.all);

router.get("/auth", controllers.user.get.isAuth);

router.get("/:id", auth.forbidGuests, controllers.user.get.one);

router.post("/register", controllers.user.post.register);

router.post("/login", controllers.user.post.login);

router.post("/logout", controllers.user.post.logout);

module.exports = router;
