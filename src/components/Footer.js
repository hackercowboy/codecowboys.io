import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { injectIntl } from 'react-intl';

import Section from './Section';

import './Footer.scss';

const background = require('../assets/images/bg-7.jpg');

const Footer = ({ intl }) => (
  <div>
    <div className="footer">
      ©
      {new Date().getFullYear()}
      {' '}
      David Übelacker,
      {intl.formatMessage({ id: 'footer.rights' })}
      &nbsp;
      |
      <a href={intl.formatMessage({ id: 'footer.imprint_link' })}>{intl.formatMessage({ id: 'footer.imprint' })}</a>
      &nbsp;
      |
      <a href={intl.formatMessage({ id: 'footer.privacy_link' })}>{intl.formatMessage({ id: 'footer.privacy' })}</a>
      <br />
      <a href="/en">English</a>
      {' '}
      |
      <a href="/de">Deutsch</a>
    </div>

    <Parallax
      bgImage={background}
      strength={500}
    >
      <Section dark>
        <div className="footer-quote">
          <i className="fas fa-angle-double-left" aria-hidden="true" />
              &nbsp;What one programmer can do in one month, two programmers can do in two months.&nbsp;
          <i className="fas fa-angle-double-right" aria-hidden="true" />
          <br />
          - Fred Brooks
        </div>
      </Section>
    </Parallax>
  </div>
);

Footer.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
};

export default injectIntl(Footer);
