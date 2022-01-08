import Mailgun from 'mailgun.js';
import FormData from 'form-data';
import axios from 'axios';
import * as Yup from 'yup';

const mailgun = new Mailgun(FormData);

Yup.addMethod(Yup.string, 'captcha', function captcha() {
  return this.test('captcha', 'Captcha validation failed', (value) => new Promise((resolve, reject) => {
    const data = new FormData();
    data.append('secret', process.env.RECAPTCHA_SECRET);
    data.append('response', value);
    axios.post('https://www.google.com/recaptcha/api/siteverify', data, {
      headers: data.getHeaders(),
    }).then((response) => {
      resolve(response.data.success);
    }).catch((error) => {
      console.error(error);
      reject(error);
    });
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
      await mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY })
        .messages.create('mg.codecowboys.io', {
          from: message.email,
          to: ['support@codecowboys.io'],
          subject: message.subject,
          text: message.message,
        });
      response.status(204).send();
    } catch (error) {
      console.error(error);
      if (error.errors) {
        response.status(400).send(JSON.stringify({ error: 'validation failed', causes: error.errors }));
      } else {
        response.status(400).send(JSON.stringify({ error: 'unknown error' }));
      }
    }
  },
};
