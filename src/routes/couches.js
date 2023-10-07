const express = require("express");
const router = express.Router();
const couchesController = require("../controllers/couches");

router.get("/couches", couchesController.list);
router.get("/couches/:id", couchesController.show);

module.exports = router;
