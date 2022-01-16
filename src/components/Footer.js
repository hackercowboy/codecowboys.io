import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { injectIntl } from 'react-intl';

import Section from './Section';

import './Footer.scss';

const background = require('../assets/images/bg-7.jpg');

function Footer({ intl }) {
  return (
    <footer>
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
          <div className="footer">
            <div className="footer-copyright">
              ©
              {new Date().getFullYear()}
              {' '}
              David Übelacker
            </div>
            <div className="footer-item">
            &nbsp;
              <a id="imprint-link" href={intl.formatMessage({ id: 'footer.imprint_link' })}>{intl.formatMessage({ id: 'footer.imprint' })}</a>
              &nbsp;
              |
              &nbsp;
              <a id="privacy-link" href={intl.formatMessage({ id: 'footer.privacy_link' })}>{intl.formatMessage({ id: 'footer.privacy' })}</a>
            </div>
            <div className="footer-item">
              <a id="language-switch-en" href="/en">English</a>
              {' '}
              |
              <a id="language-switch-de" href="/de">Deutsch</a>
            </div>
          </div>
        </Section>
      </Parallax>
    </footer>
  );
}

Footer.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
};

export default injectIntl(Footer);
