const express = require("express");
const parseDate = require("../utils/parsedate");
const router = express.Router();
const Meetmodel = require("../models/meets");
const Usermodel = require("../models/users");
const getTemp = require("../utils/weather");
const howmany= require('../utils/beers')

//required beers function
const beers = require("../utils/beers");

router.get("/how-many-beers", async (req, res) => {
  const { name, meet_name } = req.query
  console.log(name, meet_name)
  
  try {
    const meet = await Meetmodel.find({ name });
    const user= await Usermodel.find({isadmin}) 

    if (meet.length > 0 && user.isadmin) {
      const amountPeople = meet[0].people;
      const date = meet[0].date;
      const dateEpoch = await parseDate.newDate(date);
      const temp = await getTemp.getWeather(dateEpoch);
      
      const howMany= howmany.howmany(amountPeople, temp)
      console.log(howMany)
      res.status(200).send(meet);
    } else {
      res.status(400).send({ message: `not meets find with name ${name}` });
    }
  } catch (e) {
    console.log(e)
    res.status(500).send();
  }
});

module.exports = router;
