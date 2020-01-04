import mongoose from 'mongoose';

const ReminderSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ReminderModel = mongoose.model('reminder', ReminderSchema);

export default ReminderModel;
