import { Client } from 'onesignal-node';

class OneSignalService {
  static async sendBasicNotification(reminder) {
    const client = new Client(
      process.env.ONE_SIGNAL_APP_ID,
      process.env.ONE_SIGNAL_API_KEY
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

export default OneSignalService;
