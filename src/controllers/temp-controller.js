const Meetmodel = require("../models/meets");
const parseDate = require("../utils/parsedate");
const getTemp = require("../utils/weather");

const tempsController = async (req, res) => {
  const { id } = req.query;

  try {
    const meet = await Meetmodel.findById(id);

    if (meet) {
      const date = meet.date;
      const dateEpoch = await parseDate.newDate(date);
      const temp = await getTemp.getWeather(dateEpoch);
      res.status(200).send({temp});
    } else {
      res.status(400).send({ message: "not meets finded" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

module.exports = {
  tempsController,
};
