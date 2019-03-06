import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Button, Form, FormGroup, Input, Label, Alert,
} from 'reactstrap';
import validator from 'validator';
import ReCAPTCHA from 'react-google-recaptcha';
import utils from 'lodash';
import Frisbee from 'frisbee';
import { withTranslation } from 'react-i18next';

import InputError from './InputError';
import Section from './Section';

import './ContactForm.css';

const api = new Frisbee({
  baseURI: '/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

class ContactForm extends Component {
  static propTypes = {
    t: PropTypes.func,
  }

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.handleRecaptchaChange = this.handleRecaptchaChange.bind(this);
    this.checkCaptchaState = this.checkCaptchaState.bind(this);
    this.state = {
      submitted: false, submissionFailed: false, captcha: undefined, error: false, captchaLoaded: false,
    };
  }

  componentDidMount() {
    this.checkCaptchaState();
  }

  checkCaptchaState() {
    if (window.grecaptcha && utils.isFunction(window.grecaptcha.render)) {
      this.setState({ captchaLoaded: true });
    } else {
      setTimeout(this.checkCaptchaState, 100);
    }
  }

  handleRecaptchaChange(captcha) {
    this.setState({ captcha });
    this.form.validateForm();
  }

  onSubmit(values, actions) {
    this.setState({ error: false });
    api.post('/contact', { body: { ...values, captcha: this.state.captcha } })
      .then((response) => {
        if (response.err) {
          this.setState({ error: true });
          actions.setSubmitting(false);
        } else {
          this.setState({ submitted: true });
        }
      });
  }

  validateForm(values) {
    const { captcha } = this.state;
    const { t } = this.props;
    const errors = {};

    if (utils.isEmpty(values.email) || !validator.isEmail(values.email)) {
      errors.email = t('contact.email_error');
    }

    if (utils.isEmpty(values.subject)) {
      errors.subject = t('contact.subject_error');
    }

    if (utils.isEmpty(values.message)) {
      errors.message = t('contact.message_error');
    }

    if (utils.isEmpty(captcha)) {
      errors.captcha = t('contact.captcha_error');
    }

    if (!values.privacy) {
      errors.privacy = t('contact.privacy_error');
    }

    return errors;
  }

  renderForm(form) {
    const {
      handleChange, handleBlur, errors, touched, handleSubmit, isSubmitting,
    } = form;
    const { captchaLoaded } = this.state;
    const { t } = this.props;

    this.form = form;
    const { submissionFailed, error } = this.state;

    const beforeHandleSubmit = (event) => {
      this.setState({ submissionFailed: true });
      handleSubmit(event);
    };

    const emailError = (submissionFailed || touched.email) && errors.email;
    const subjectError = (submissionFailed || touched.subject) && errors.subject;
    const messageError = (submissionFailed || touched.message) && errors.message;
    const captchaError = submissionFailed && errors.captcha;
    const privacyError = submissionFailed && errors.privacy;

    return (
      <Form className="contact-form" onSubmit={beforeHandleSubmit}>
        { error ? (
          <Alert color="danger">
            {t('contact.error')}
          </Alert>
        ) : null }
        <FormGroup>
          <Input
            type="text"
            disabled={isSubmitting}
            name="email"
            placeholder={t('contact.email_placeholder')}
            bsSize="lg"
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={!utils.isEmpty(emailError)}/>
          <InputError error={emailError}/>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            disabled={isSubmitting}
            name="subject"
            placeholder={t('contact.subject_placeholder')}
            bsSize="lg"
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={!utils.isEmpty(subjectError)}/>
          <InputError error={subjectError}/>
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            disabled={isSubmitting}
            name="message"
            placeholder={t('contact.message_placeholder')}
            bsSize="lg"
            maxLength={4000}
            style={{ height: '200px' }}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={!utils.isEmpty(messageError)}/>
          <InputError error={messageError}/>
        </FormGroup>
        <div className="captcha">
          { captchaLoaded && (
            <ReCAPTCHA
              sitekey="6LfLbVcUAAAAAArYaqxljRPHc7ht-QxUeznHOCgN"
              onChange={this.handleRecaptchaChange}
            />
          )}
          <InputError error={captchaError}/>
        </div>
        <FormGroup id="privacy" check>
          <Label check>
            <Input disabled={isSubmitting} name="privacy" type="checkbox" onChange={handleChange}/>{' '}
            {t('contact.privacy_1')} <a href="/en/privacy">{t('contact.privacy_2')}</a>.
          </Label>
          <InputError error={privacyError}/>
        </FormGroup>
        <p className="mt-3">{t('contact.privacy_info_1')}<br/>{t('contact.privacy_info_2')}</p>
        <div className="btn-form">
          <Button disabled={isSubmitting} color="primary" size="lg">
            {t('contact.submit')}
            { isSubmitting && (<i className="far fa-spinner fa-spin"></i>) }
          </Button>
        </div>
      </Form>
    );
  }

  render() {
    const { t } = this.props;

    return (
      <Section
        id="contact"
        title={t('contact.title')}
        teaser={t('contact.subtitle')}>
        {this.state.submitted ? (
          <div className="contact-form">
            <Alert color="success">
              {t('contact.success')}
            </Alert>
          </div>
        ) : (
          <Formik
            onSubmit={this.onSubmit}
            validate={this.validateForm}
            render={this.renderForm}/>)}
      </Section>
    );
  }
}

export default withTranslation()(ContactForm);
