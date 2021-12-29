import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { Media } from 'reactstrap';
import { injectIntl } from 'react-intl';

import Section from './Section';

import './About.scss';

const aboutIcon = require('../assets/images/david.png');
const aboutBackground = require('../assets/images/bg-5.jpg');

const About = ({ intl }) => (
  <Parallax
    bgImage={aboutBackground}
    strength={500}
  >
    <Section
      id="about"
      title={intl.formatMessage({ id: 'about.title' })}
      subtitle={intl.formatMessage({ id: 'about.subtitle' })}
      dark
    >
      <Media>
        <Media body>
          <h4>David Übelacker</h4>
          <p>{intl.formatMessage({ id: 'about.content_1' })}</p>
          <p>{intl.formatMessage({ id: 'about.content_2' })}</p>
        </Media>
        <Media right className="ml-3">
          <img
            alt={intl.formatMessage({ id: 'about.photo_alt' })}
            className="rounded-circle"
            src={aboutIcon}
            style={{ width: '100px', height: '100px' }}
          />
        </Media>
      </Media>

    </Section>
  </Parallax>
);

About.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
};

export default injectIntl(About);
