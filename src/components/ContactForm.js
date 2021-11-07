import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import Section from './Section';

const ContactForm = ({ intl }) => (
  <Section
    id="contact"
    title={intl.formatMessage({ id: 'contact.title' })}
    teaser={intl.formatMessage({ id: 'contact.subtitle' })}>
    <Formik
      initialValues={{}}
       validate={(values) => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="email" />
           <ErrorMessage name="email" />
           <Field type="text" name="subject" />
           <ErrorMessage name="subject" />
           <Field
            component="textarea"
            name="message"
           />
           <ErrorMessage name="message" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
  </Section>
);

ContactForm.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }).isRequired,
};

export default injectIntl(ContactForm);
