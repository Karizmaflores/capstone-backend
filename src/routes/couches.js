const express = require("express");
const router = express.Router();
const couchesController = require("../controllers/couches");

router.get("/couches", couchesController.list);
router.get("/couches/:id", couchesController.show);
router.post("/create-couch", couchesController.create);
router.put("/:id", couchesController.update);

module.exports = router;
