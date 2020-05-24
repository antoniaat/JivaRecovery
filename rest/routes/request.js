const controllers = require("../controllers/");
const router = require("express").Router();

router.get("/:id", controllers.request.get);

router.post("/add", controllers.request.post.add);

router.put("/edit/:id", controllers.request.put);

router.delete("/:id", controllers.request.delete);

module.exports = router;
