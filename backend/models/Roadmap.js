const mongoose = require("mongoose");

const roadmapSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ["course", "career"], required: true },
  structure: { type: Object, required: true }
});

module.exports = mongoose.model("Roadmap", roadmapSchema);
