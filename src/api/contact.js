import Recaptcha from 'recaptcha-verify';
import mailer from 'nodemailer';
import utils from 'lodash';
import validator from 'validator';

const recaptcha = new Recaptcha({
  secret: '6LfLbVcUAAAAAE9AVk9qxstcnYYxWDCJJ2aKabzE',
});

export default {
  post: (request, response) => {
    const message = request.body;
    if (!utils.isEmpty(message.email)
    && validator.isEmail(message.email)
    && !utils.isEmpty(message.subject)
    && !utils.isEmpty(message.message)
    && message.terms) {
      recaptcha.checkResponse(message.captcha, (recaptchaError, recaptchaResponse) => {
        if (recaptchaError || !recaptchaResponse.success) {
          console.error(recaptchaError);
          response.status(400).send();
        } else {
          mailer.createTransport({ host: 'mail.codecowboys.io', port: 25 })
            .sendMail({
              from: message.email,
              to: 'support@codecowboys.io',
              subject: message.subject,
              text: message.message,
            }, (error) => {
              if (error) {
                console.error(error);
                response.status(400).send();
              } else {
                response.status(204).send();
              }
            });
        }
      });
    } else {
      response.status(400).send();
    }
  },
};
