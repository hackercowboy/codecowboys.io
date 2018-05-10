import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Form, FormGroup, Input, Label, Alert } from 'reactstrap';
import validator from 'validator';
import ReCAPTCHA from 'react-google-recaptcha';
import utils from 'lodash';
import Frisbee from 'frisbee';

import InputError from './InputError';

import './ContactForm.css';

const api = new Frisbee({
  baseURI: '/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default class ContactForm extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.handleRecaptchaChange = this.handleRecaptchaChange.bind(this);
    this.checkCaptchaState = this.checkCaptchaState.bind(this);
    this.state = { submitted: false, submissionFailed: false, captcha: undefined, error: false, captchaLoaded: false };
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
    const errors = {};

    if (utils.isEmpty(values.email)) {
      errors.email = 'Please enter your email address';
    } else if (!validator.isEmail(values.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (utils.isEmpty(values.subject)) {
      errors.subject = 'Please enter a subject';
    }

    if (utils.isEmpty(values.message)) {
      errors.message = 'Please enter a message';
    }

    if (utils.isEmpty(captcha)) {
      errors.captcha = 'Please solve this captcha';
    }

    if (!values.terms) {
      errors.terms = 'Please accept the privacy policy';
    }

    return errors;
  }

  renderForm(form) {
    const { handleChange, handleBlur, errors, touched, handleSubmit, isSubmitting } = form;
    const { captchaLoaded } = this.state;

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
    const termsError = submissionFailed && errors.terms;

    return (
      <Form className="contact-form" onSubmit={beforeHandleSubmit}>
        { error ? (
          <Alert color="danger">
            Sorry, something went wrong, please retry later...
          </Alert>
        ) : null }
        <FormGroup>
          <Input
            type="text"
            disabled={isSubmitting}
            name="email"
            placeholder="Your E-Mail Address"
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
            placeholder="Subject"
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
            placeholder="Your Message"
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
        <FormGroup id="terms" check>
          <Label check>
            <Input disabled={isSubmitting} name="terms" type="checkbox" onChange={handleChange}/>{' '}
            I agree to the the <a href="/en/privacy">privacy policy</a>.
          </Label>
          <InputError error={termsError}/>
        </FormGroup>
        <p className="mt-3">Your e-mail address and message will be stored so that I can reply to it.<br/>Your data will not be used for any other purposes.</p>
        <div className="btn-form">
          <Button disabled={isSubmitting} color="primary" size="lg">
            Submit
            { isSubmitting && (<i className="fa fa-circle-o-notch fa-spin"></i>) }
          </Button>
        </div>
      </Form>
    );
  }

  render() {
    return this.state.submitted ? (
      <div className="contact-form">
        <Alert color="success">
          Thank you for your message! i will come back to you, as soon as possible!
        </Alert>
      </div>
    ) : (
      <Formik
        onSubmit={this.onSubmit}
        validate={this.validateForm}
        render={this.renderForm}/>);
  }
}
