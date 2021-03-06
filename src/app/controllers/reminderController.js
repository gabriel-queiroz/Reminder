import Reminder from '../models/reminder';
import moment from 'moment';
import CallReminderJob from '../jobs/callReminder';

class ReminderController {
  static async store(req, res) {
    let { body: reminder } = req;
    const date = moment(reminder.date);
    if (date.isValid) {
      reminder = await Reminder.create({ date, ...reminder });
      CallReminderJob.jobReminderNotification({
        date,
        reminder,
      });
      return res.send(reminder);
    }
    return res.status(400).send({
      error: 'Date invalid',
    });
  }

  static async index(req, res) {
    const reminders = await Reminder.find({});
    return res.send(reminders);
  }

  static async update(req, res) {
    return res.send({ message: 'vc vai fazer um update' });
  }
}

export default ReminderController;
