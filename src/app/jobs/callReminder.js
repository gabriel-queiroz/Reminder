import kue from 'kue';

const Queue = kue.createQueue();

class CallReminder {
  static async jobReminderNotification({ date, reminder }) {
    Queue.createJob('reminder', { reminderId: reminder.id })
      .attempts()
      .delay(date.toDate())
      .save();
  }
}

export default CallReminder;
