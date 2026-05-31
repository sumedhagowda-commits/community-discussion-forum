const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdBy: String,
  messages: [
    {
      user: String,
      text: String,
      time: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model("Discussion", discussionSchema);