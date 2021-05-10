const mongoose = require("mongoose");

const MeetSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
  },
  people: {
    type: Number,
  },
});

module.exports = mongoose.model("meet", MeetSchema);
