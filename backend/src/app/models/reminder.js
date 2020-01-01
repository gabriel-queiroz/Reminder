const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema({
  description: String,
  date: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("reminder", ReminderSchema);
