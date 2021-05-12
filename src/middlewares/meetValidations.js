module.exports = (req, res, next) => {
  const {
    body: { name, date, people },
  } = req;
  const errors = [];
  if (!name) {
    errors.push("name is required");
  }
  if (!people) {
    errors.push("people is required");
  }
  if (!date) {
    errors.push("date is required");
  }
  if (errors.length > 0) {
    res.status(400).send({message: 'errors in request body', details: errors});
  }else{
    next()
  }
};
