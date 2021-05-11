const Meetmodel = require("../models/meets");

//required utils functions
const getTemp = require("../utils/weather");
const howmany = require("../utils/beers");
const parseDate = require("../utils/parsedate");

const meetsController = async (req, res) => {
  const { _id } = req.query;
  console.log(_id);

  try {
    const meet = await Meetmodel.findById(_id);
    console.log(meet);
    if (meet) {
      const amountPeople = meet.people;
      const date = meet.date;
      const dateEpoch = parseDate.newDate(date);
      const temp = getTemp.getWeather(dateEpoch);

      const howMany = howmany.howmany(amountPeople, temp);
      console.log(howMany);
      res.status(200).send(meet);
    } else {
      res.status(400).send({ message: "not meets finded" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

module.exports = {
  meetsController,
};
