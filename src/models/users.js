const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  role: {
    type: String,
  },
  namer: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("user", UserSchema);
