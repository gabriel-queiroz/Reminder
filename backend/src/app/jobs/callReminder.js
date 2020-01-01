const mongoDbConfig = require("../../config/database");
const OneSignalService = require("../services/onesignal");
const Agenda = require("agenda");
const Reminder = require("../models/reminder");

class CallReminder {
  static async jobReminderNotification({ date, reminder }) {
    const agenda = new Agenda({
      db: { address: mongoDbConfig, collection: "jobs" }
    });
    agenda.define("pushNotification", async job => {
      const reminder = await Reminder.findById(job.attrs.data.reminderId);
      OneSignalService.sendBasicNotification(reminder);
    });

    agenda.on("ready", function() {
      agenda.schedule(date, "pushNotification", { reminderId: reminder.id });
      (async function() {
        await agenda.start();
      })();
    });
  }
}

module.exports = CallReminder;
