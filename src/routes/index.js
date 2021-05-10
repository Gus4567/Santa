const express = require("express");
const router = express.Router();
const { rolePermissions } = require("../middlewares");
const { meetsController, tempsController } = require("../controllers");
router.use(rolePermissions);
router.get("/meet/beers", meetsController);
router.get("/meet/temp", tempsController);
module.exports = router;
