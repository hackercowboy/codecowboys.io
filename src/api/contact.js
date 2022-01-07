import mailgun from 'mailgun.js';
import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'captcha', function captcha() {
  return this.test('captcha', 'Captcha validation failed', (value) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(false), 5000);
  }));
});

const messageSchema = Yup.object({
  email: Yup.string().email().required(),
  subject: Yup.string().required(),
  message: Yup.string().required(),
  captcha: Yup.string().required().captcha(),
  privacy: Yup.bool().oneOf([true]),
});

export default {
  post: async (request, response) => {
    const message = request.body;
    console.log(message);

    try {
      await messageSchema.validate(message);
      response.status(204).send();
    } catch (error) {
      console.error(error);
      response.status(400).send(JSON.stringify({ error: 'validation failed', causes: error.errors }));
    }

    // if (!isEmpty(message.email)
    // && validator.isEmail(message.email)
    // && !isEmpty(message.subject)
    // && !isEmpty(message.message)
    // && message.privacy) {
    //   recaptcha.checkResponse(message.captcha, (recaptchaError, recaptchaResponse) => {
    //     if (recaptchaError || !recaptchaResponse.success) {
    //       console.log('Captcha invalid :-(');
    //       console.error(recaptchaError);
    //       response.status(400).send();
    //     } else {
    //       console.log('Captcha valid ... will send');
    //       mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY }).messages.create('mg.codecowboys.io', {
    //         from: message.email,
    //         to: ['support@codecowboys.io'],
    //         subject: message.subject,
    //         text: message.message,
    //       }).then(() => response.status(204).send())
    //         .catch((error) => {
    //           console.log('Mailgun error :-(');
    //           console.error(error);
    //           response.status(400).send();
    //         });
    //     }
    //   });
    // } else {
    //   response.status(400).send();
    // }
  },
};
