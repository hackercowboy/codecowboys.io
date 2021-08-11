import Recaptcha from 'recaptcha-verify';
import utils from 'lodash';
import validator from 'validator';
import mailgun from 'mailgun.js';

const recaptcha = new Recaptcha({
  secret: process.env.RECAPTCHA_SECRET,
});

export default {
  post: (request, response) => {
    const message = request.body;
    if (!utils.isEmpty(message.email)
    && validator.isEmail(message.email)
    && !utils.isEmpty(message.subject)
    && !utils.isEmpty(message.message)
    && message.privacy) {
      recaptcha.checkResponse(message.captcha, (recaptchaError, recaptchaResponse) => {
        if (recaptchaError || !recaptchaResponse.success) {
          console.error(recaptchaError);
          response.status(400).send();
        } else {
          console.log(process.env.MAILGUN_API_KEY);
          console.log(process.env.MAILGUN_ACCOUNT);
          mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY }).messages.create('mg.codecowboys.io', {
            from: message.email,
            to: ['support@codecowboys.io'],
            subject: message.subject,
            text: message.message,
          }).then(() => response.status(204).send())
            .catch((error) => {
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
