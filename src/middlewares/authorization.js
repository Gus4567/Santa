const Usermodel = require("../models/users");

const authorization = (rolesAllowed) => {
  return async (req, res, next) => {
    const { username } = req.headers;
    const user = await Usermodel.find({ name: username });
    if (user.length > 0) {
      const { role } = user[0];
      if (rolesAllowed.includes(role)){
        next();
      } else {
        res.status(403).send({ message: "Access denied, you are not admin" });
      }
    } else {
      res.status(404).send({ message: "user not found" });
    }
  };
};

module.exports= {
  authorization
}