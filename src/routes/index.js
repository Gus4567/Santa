const express = require("express");
const {rolePermissions}= require('../middlewares')
const router = express.Router();

const {meetsController}= require('../controllers')
router.use(rolePermissions)
router.get("/meet/beers", meetsController);

module.exports = router;
