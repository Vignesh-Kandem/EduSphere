const express = require("express");
const Roadmap = require("../models/Roadmap");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const roadmaps = await Roadmap.find();
    res.json(roadmaps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const roadmap = new Roadmap(req.body);
    await roadmap.save();
    res.status(201).json(roadmap);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
