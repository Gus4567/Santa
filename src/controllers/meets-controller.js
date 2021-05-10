const Meetmodel = require("../models/meets");

const getTemp = require("../utils/weather");
const howmany = require("../utils/beers");
const parseDate = require("../utils/parsedate");

//required beers function
const beers = require("../utils/beers");

const meetsController = async (req, res) => {
  const { name } = req.query;

  try {
    const meet = await Meetmodel.find({ name });

    if (meet.length > 0) {
      const amountPeople = meet[0].people;
      const date = meet[0].date;
      const dateEpoch = await parseDate.newDate(date);
      const temp = await getTemp.getWeather(dateEpoch);

      const howMany = howmany.howmany(amountPeople, temp);
      console.log(howMany);
      res.status(200).send(meet);
    } else {
      res.status(400).send({ message: `not meets find with name ${name}` });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

module.exports = {
  meetsController,
};
