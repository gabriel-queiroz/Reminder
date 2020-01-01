const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("reminder", ReminderSchema);
