import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Section from './Section';
import InputText from './InputText';
import Textarea from './Textarea';

const ContactForm = ({ intl }) => {
  const ContactSchema = Yup.object().shape({
    email: Yup.string()
      .email(intl.formatMessage({ id: 'contact.email_error' }))
      .required(intl.formatMessage({ id: 'contact.email_error' })),
    subject: Yup.string()
      .required(intl.formatMessage({ id: 'contact.subject_error' })),
    message: Yup.string()
      .required(intl.formatMessage({ id: 'contact.message_error' })),
    captcha: Yup.string()
      .required(intl.formatMessage({ id: 'contact.captcha_error' })),
    privacy: Yup.boolean()
      .required(intl.formatMessage({ id: 'contact.privacy_error' })),
  });

  return (
    <Section
      id="contact"
      title={intl.formatMessage({ id: 'contact.title' })}
      teaser={intl.formatMessage({ id: 'contact.subtitle' })}
    >
      <Formik
        initialValues={{}}
        validationSchema={ContactSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputText
              name="email"
              placeholder={intl.formatMessage({ id: 'contact.email_placeholder' })}
            />
            <InputText
              name="subject"
              placeholder={intl.formatMessage({ id: 'contact.subject_placeholder' })}
            />
            <Textarea
              name="message"
              placeholder={intl.formatMessage({ id: 'contact.message_placeholder' })}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

ContactForm.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }).isRequired,
};

export default injectIntl(ContactForm);
