module.exports = (req, res, next) => {
  const { id } = req.query;
  if (!id || id.length != 24) {
    res.status(400).send({ message: "invalid id" });
  } else {
    next();
  }
};
