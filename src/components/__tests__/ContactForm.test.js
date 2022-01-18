import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import ContactForm from '../ContactForm';

jest.mock('axios');

describe('<ContactForm/>', () => {
  it('should render', () => {
    const wrapper = shallow(<ContactForm />);
    expect(wrapper.shallow().debug()).toMatchSnapshot();
    expect(wrapper.shallow().find('Formik').shallow().debug()).toMatchSnapshot();
  });

  it('should handle on captcha verify', () => {
    const wrapper = shallow(<ContactForm />);
    wrapper.shallow().find('#recaptcha-verify').props().onVerify();
  });

  it('should submit data', async () => {
    axios.post = jest.fn();

    const wrapper = shallow(<ContactForm />).shallow();
    expect(wrapper.find('Formik').length).toBe(1);
    expect(wrapper.find('.contact-form-success').length).toBe(0);

    const form = wrapper.find('Formik');
    await form.props().onSubmit({
      email: 'test@example.com', subject: 'test', message: 'test', privacy: true,
    });

    expect(axios.post).toBeCalledWith('/api/contact', {
      captcha: undefined,
      email: 'test@example.com',
      message: 'test',
      privacy: true,
      subject: 'test',
    });
    expect(wrapper.find('Formik').length).toBe(0);
    expect(wrapper.find('.contact-form-success').length).toBe(1);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should error during submit data', async () => {
    axios.post = jest.fn();
    axios.post.mockImplementation(() => { throw new Error(); });

    const wrapper = shallow(<ContactForm />).shallow();
    expect(wrapper.find('Formik').length).toBe(1);
    expect(wrapper.find('.contact-form-success').length).toBe(0);

    const form = wrapper.find('Formik');
    await form.props().onSubmit({ email: 'test@example.com' });

    expect(wrapper.find('Formik').length).toBe(0);
    expect(wrapper.find('.contact-form-error').length).toBe(1);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
