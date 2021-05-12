const Meetmodel = require("../models/meets");

const meetCreate = async (req, res) => {
  const {
    body: { name, date, people },
  } = req;

  let meet = new Meetmodel();
  meet.name = name;
  meet.date = date;
  meet.people = people;

  await meet.save((err, meetAdded) => {
    if (err)
      return res.status(500).send({ message: "'Can't create new meet'" });

    res.status(200).send({ meet });
  });
  console.log(meet);
};

module.exports = {
  meetCreate,
};
