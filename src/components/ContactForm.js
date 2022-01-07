import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

import Section from './Section';
import Form from './Form';
import InputText from './InputText';
import Textarea from './Textarea';
import Checkbox from './Checkbox';

import Button from './Button';

import './ContactForm.scss';

function ContactForm({ intl }) {
  const [state, setState] = useState('initial');
  const [captcha, setCaptcha] = useState('captchainitial');

  const ContactSchema = Yup.object().shape({
    email: Yup.string()
      .email(intl.formatMessage({ id: 'contact.email_error' }))
      .required(intl.formatMessage({ id: 'contact.email_error' })),
    subject: Yup.string()
      .required(intl.formatMessage({ id: 'contact.subject_error' })),
    message: Yup.string()
      .required(intl.formatMessage({ id: 'contact.message_error' })),
    privacy: Yup.bool().oneOf([true], intl.formatMessage({ id: 'contact.privacy_error' })),
  });

  const handleOnCaptchaVeriry = useCallback((token) => {
    console.log(token);
    setCaptcha(token);
  }, []);

  const handleOnSubmit = async (values) => {
    try {
      await axios.post('/api/contact', { ...values, captcha });
      setState('submitted');
    } catch (error) {
      console.error(error);
      setState('error');
    }
  };

  return (
    <Section
      id="contact"
      title={intl.formatMessage({ id: 'contact.title' })}
      subtitle={intl.formatMessage({ id: 'contact.subtitle' })}
    >
      <GoogleReCaptcha onVerify={handleOnCaptchaVeriry} />
      { state === 'initial' && (
      <Formik
        initialValues={{
          email: '', subject: '', message: '', captcha: '', privacy: false,
        }}
        validationSchema={ContactSchema}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputText
              name="email"
              placeholder={intl.formatMessage({ id: 'contact.email_placeholder' })}
              disabled={isSubmitting || !captcha}
            />
            <InputText
              name="subject"
              placeholder={intl.formatMessage({ id: 'contact.subject_placeholder' })}
              disabled={isSubmitting || !captcha}
            />
            <Textarea
              name="message"
              placeholder={intl.formatMessage({ id: 'contact.message_placeholder' })}
              disabled={isSubmitting || !captcha}
            />
            <Checkbox
              name="privacy"
              disabled={isSubmitting || !captcha}
            >
              <FormattedMessage id="contact.privacy_1" />
              {' '}
              <a href={intl.formatMessage({ id: 'contact.privacy_link' })}>
                <FormattedMessage id="contact.privacy_2" />
              </a>
            </Checkbox>
            <Button type="submit" disabled={isSubmitting || !captcha}>
              <FormattedMessage id="contact.submit" />
            </Button>
          </Form>
        )}
      </Formik>
      )}
      { state === 'submitted' && (
        <p className="contact-form-success">{intl.formatMessage({ id: 'contact.success' })}</p>
      )}
      { state === 'error' && (
        <p className="contact-form-error">{intl.formatMessage({ id: 'contact.error' })}</p>
      )}
    </Section>
  );
}

ContactForm.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }).isRequired,
};

export default injectIntl(ContactForm);
