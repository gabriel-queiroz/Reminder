const Reminder = require("../models/reminder");
const moment = require("moment");
const OneSignalService = require("../services/onesignal");

class ReminderController {
  static async store(req, res) {
    let { body: reminder } = req;
    const date = moment(reminder.date);
    if (date.isValid) {
      reminder = await Reminder.create({ ...reminder, date });
      OneSignalService.sendBasicNotification();
      return res.send(reminder);
    }
    return res.status(400).send({
      error: "Date invalid"
    });
  }
  static async index(req, res) {
    const reminders = await Reminder.find({});
    return res.send(reminders);
  }
}

module.exports = ReminderController;
