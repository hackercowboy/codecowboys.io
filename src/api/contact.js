import Recaptcha from 'recaptcha-verify';
import validator from 'validator';
import mailgun from 'mailgun.js';
import { isEmpty } from '../utils';

export default {
  post: (request, response) => {
    const recaptcha = new Recaptcha({
      secret: process.env.RECAPTCHA_SECRET,
    });

    const message = request.body;
    if (!isEmpty(message.email)
    && validator.isEmail(message.email)
    && !isEmpty(message.subject)
    && !isEmpty(message.message)
    && message.privacy) {
      console.log('fdsa');
      recaptcha.checkResponse(message.captcha, (recaptchaError, recaptchaResponse) => {
        if (recaptchaError || !recaptchaResponse.success) {
          console.log('Captcha invalid :-(');
          console.error(recaptchaError);
          response.status(400).send();
        } else {
          console.log('Captcha valid ... will send');
          mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY }).messages.create('mg.codecowboys.io', {
            from: message.email,
            to: ['support@codecowboys.io'],
            subject: message.subject,
            text: message.message,
          }).then(() => response.status(204).send())
            .catch((error) => {
              console.log('Mailgun error :-(');
              console.error(error);
              response.status(400).send();
            });
        }
      });
    } else {
      response.status(400).send();
    }
  },
};
