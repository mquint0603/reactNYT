const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/article"
router.route("/")
    .get(articleController.findAll)
    .post(articleController.create);

// Matches with "/api/article/:id"
router
    .route("/:id")
    .delete(articleController.remove)
    .post(articleController.create);

module.exports = router;
