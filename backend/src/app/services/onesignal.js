const OneSignal = require('onesignal-node');

class OneSignalService {
  static async sendBasicNotification(reminder) {
    const client = new OneSignal.Client(
      '617fafd7-c41f-4fe7-ad01-5f67db6d2886',
      'Y2MwOTZhOGEtMjUyMS00Y2QwLWFkMDYtYmY3YmVjNWIxODM2'
    );
    const notification = {
      contents: {
        pt: reminder.description,
        en: reminder.description,
      },
      headings: {
        pt: reminder.title,
        end: reminder.title,
      },
      included_segments: ['Active Users'],
    };
    try {
      await client.createNotification(notification);
    } catch (e) {
      if (e instanceof OneSignal.HTTPError) {
        console.log(e.statusCode);
        console.log(e.body);
      }
    }
  }
}

module.exports = OneSignalService;
