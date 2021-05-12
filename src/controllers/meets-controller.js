const Meetmodel = require("../models/meets");

//required utils functions
const getTemp = require("../utils/weather");
const howmany = require("../utils/beers");
const parseDate = require("../utils/parsedate");

const meetsController = async (req, res) => {
  const { id } = req.query;

  try {
    const meet = await Meetmodel.findById(id);
    console.log(meet);
    if (meet) {
      const amountPeople = meet.people;
      const date = meet.date;
      const dateEpoch = parseDate.newDate(date);
      const temp = getTemp.getWeather(dateEpoch);

      const howMany = howmany.howmany(amountPeople, temp);
      console.log(howMany);
      res.status(200).send({ quantity: howMany });
    } else {
      res.status(404).send({ message: "not meets finded" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

module.exports = {
  meetsController,
};
