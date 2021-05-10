const Usermodel = require("../models/users");
const ADMIN_ALLOWED_ROUTES = ["/meet/beers", "/meet/temp"];
const USERS_ALLOWED_ROUTES = ["/meet/temp"];

//verify if the user is admin 
const isRouteAllowed = (url, role) => {
  let found = false;
  if (role === "admin") {
    ADMIN_ALLOWED_ROUTES.forEach((route) => {
      if (url.includes(route)) {
        found = true;
      }
    });
  } else if (role === "user") {
    ADMIN_ALLOWED_ROUTES.forEach((route) => {
      if (url.includes(route)) {
        found = true;
      }
    });
  }
  return found;
};
module.exports = async (req, res, next) => {
  const { username } = req.headers;
  const user = await Usermodel.find({ name: username });
  if (user.length > 0) {
    const { role } = user[0];
    if (isRouteAllowed(req.originalUrl, role)) {
      next();
    } else {
      res.status(403).send({ message: "Access denied, you are not admin" });
    }
  } else {
    res.status(404).send({ message: "user not found" });
  }
};
