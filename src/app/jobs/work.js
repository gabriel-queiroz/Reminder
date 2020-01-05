import kue from 'kue';
import OneSignalService from '../services/onesignal';
import Reminder from '../models/reminder';
const Queue = kue.createQueue();

Queue.process('reminder', async function(job, done) {
  const { data } = job;
  const reminder = await Reminder.findById(data.reminderId);
  OneSignalService.sendBasicNotification(reminder);
  done();
});
