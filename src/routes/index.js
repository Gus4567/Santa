const express = require("express");

const app = express();
const router = express.Router();
const { authorization, validationId, validationMeet } = require("../middlewares");
const {
  meetsController,
  tempsController,
  meetCreate,
} = require("../controllers");

router.get("/meet/beers", authorization(["admin"]), validationId, meetsController);
router.get("/meet/temp", authorization(["admin", "user"]), validationId, tempsController);
router.post("/meet", authorization(["admin"]), validationMeet,  meetCreate);
module.exports = router;
