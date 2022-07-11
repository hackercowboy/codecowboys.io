/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { injectIntl } from 'react-intl';
import LazyLoad from 'react-lazyload';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Section from './Section';

function Footer({ intl }) {
  const footerContent = (
    <Section dark>
      <div className="footer-quote">
        <i className="fas fa-angle-double-left" aria-hidden="true" />
                &nbsp;What one programmer can do in one month, two programmers can do in two months.&nbsp;
        <i className="fas fa-angle-double-right" aria-hidden="true" />
        <br />
        - Fred Brooks
      </div>
      <div className="footer">
        <div className="footer-item">
              &nbsp;
          <a id="imprint-link" href={intl.formatMessage({ id: 'footer.imprint_link' })}>{intl.formatMessage({ id: 'footer.imprint' })}</a>
          &nbsp;
          |
          &nbsp;
          <a id="privacy-link" href={intl.formatMessage({ id: 'footer.privacy_link' })}>{intl.formatMessage({ id: 'footer.privacy' })}</a>
          &nbsp;
          |
          &nbsp;
          <a id="language-switch-en" href="/en">English</a>
          &nbsp;
          |
          &nbsp;
          <a id="language-switch-de" href="/de">Deutsch</a>
        </div>
        <div className="footer-item social-links">
          <a id="github-link" href="https://github.com/hackercowboy"><FaGithub size="2.5em" /></a>
          <a id="linkedin-link" href="https://www.linkedin.com/in/daviduebelacker/"><FaLinkedin size="2.5em" /></a>
        </div>
        <div className="footer-copyright">
          ©
          {new Date().getFullYear()}
          {' '}
          David Übelacker
        </div>
      </div>
    </Section>
  );
  return process.browser ? /* istanbul ignore next */ (
    <LazyLoad offset={300}>
      <footer>
        <Parallax
          bgImage="/images/bg-7.webp"
          bgImageAlt={intl.formatMessage({ id: 'background.alt_7' })}
          strength={500}
        >
          {footerContent}
        </Parallax>
      </footer>
    </LazyLoad>
  ) : (
    <footer>
      {footerContent}
    </footer>
  );
}

Footer.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
};

export default injectIntl(Footer);
