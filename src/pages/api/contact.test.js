import axios from 'axios';
import Mailgun from 'mailgun.js';
import contact from './contact.api';

jest.mock('axios');
jest.mock('mailgun.js');

describe('contact', () => {
  it('should validate input', async () => {
    const response = { status: jest.fn() };
    const send = jest.fn();
    response.status.mockImplementation(() => ({ send }));

    await contact({ method: 'POST', body: { captcha: 'test' } }, response);

    expect(response.status).toBeCalledWith(400);
    expect(send).toBeCalledWith('{"error":"validation failed","causes":["message is a required field"]}');
  });

  it('should verify captcha', async () => {
    axios.post = jest.fn();
    axios.post.mockImplementation(() => ({ data: { success: true } }));

    Mailgun.mockImplementation(() => ({ client: () => ({ messages: { create: jest.fn() } }) }));

    const response = { status: jest.fn() };
    const send = jest.fn();
    response.status.mockImplementation(() => ({ send }));

    await contact({
      method: 'POST',
      body: {
        email: 'test@example.org',
        subject: 'I have a problem!',
        message: 'Lorem Ipsum is Lore',
        captcha: 'test',
        privacy: true,
      },
    }, response);

    expect(response.status).toBeCalledWith(204);
    expect(axios.post).toBeCalled();
  });

  it('should handle unknown error', async () => {
    axios.post = jest.fn();
    axios.post.mockImplementation(() => { throw new Error('test'); });

    const response = { status: jest.fn() };
    const send = jest.fn();
    response.status.mockImplementation(() => ({ send }));

    await contact({
      method: 'POST',
      body: {
        email: 'test@example.org',
        subject: 'I have a problem!',
        message: 'Lorem Ipsum is Lore',
        captcha: 'test',
        privacy: true,
      },
    }, response);

    expect(response.status).toBeCalledWith(400);
    expect(send).toBeCalledWith('{"error":"unknown error"}');
  });

  it('should return 404 for unknown method', async () => {
    const response = { status: jest.fn() };
    await contact({
      method: 'GET',
    }, response);

    expect(response.status).toBeCalledWith(404);
  });
});
