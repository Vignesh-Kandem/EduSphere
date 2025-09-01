const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  club: String,
  date: Date,
  mode: { type: String, enum: ["online", "offline"] },
  fee: { type: Number, default: 0 },
  registrationLink: String,
  eligibility: String
});

module.exports = mongoose.model("Event", eventSchema);
