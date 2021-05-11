const express = require("express");
const app= express()
const router = express.Router();
const { authorization} = require("../middlewares");
const { meetsController, tempsController, meetCreate } = require("../controllers");
app.use(express.urlencoded({
    extended:false
}))
app.use(express.json())


router.get("/meet/beers", authorization(["admin"]), meetsController);
router.get("/meet/temp", authorization(['admin', 'user']), tempsController);
router.post("/meet", authorization(["admin"]), meetCreate);
module.exports = router;
