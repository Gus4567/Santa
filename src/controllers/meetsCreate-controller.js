const Meetmodel = require("../models/meets");

const meetCreate = async (req, res) => {
  const name = req.body;
  console.log(name);
  res.send(name);
};

module.exports = {
  meetCreate
};
