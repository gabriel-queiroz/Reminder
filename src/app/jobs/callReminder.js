import kue from 'kue';
import Reminder from '../models/reminder';
const Queue = kue.createQueue();

class CallReminder {
  static async jobReminderNotification({ date, reminder }) {
    const job = Queue.create('reminder', { reminderId: reminder.id })
      .attempts(3)
      .delay(date.toDate())
      .save(async error => {
        if (!error) {
          try {
            const redisJobId = job.id;
            await Reminder.findByIdAndUpdate(
              reminder.id,
              { redisJobId },
              { useFindAndModify: false }
            );
          } catch (error) {
            console.log(error);
          }
        }
      });
  }
}

export default CallReminder;
