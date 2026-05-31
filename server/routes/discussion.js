const express = require("express");
const router = express.Router();
const Discussion = require("../models/Discussion");

// create discussion
router.post("/", async (req, res) => {
  const data = await Discussion.create(req.body);
  res.json(data);
});

// get all
router.get("/", async (req, res) => {
  const data = await Discussion.find();
  res.json(data);
});

// add message
router.post("/:id/message", async (req, res) => {
  const disc = await Discussion.findById(req.params.id);
  disc.messages.push(req.body);
  await disc.save();
  res.json(disc);
});

module.exports = router;