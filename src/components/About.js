import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import './About.scss';

const aboutIcon = require('../assets/images/david.png');

function About({ intl }) {
  return (
    <div className="about">
      <h4>David Übelacker</h4>
      <div className="about-wrapper">
        <div className="about-teaser">
          <p>{intl.formatMessage({ id: 'about.content_1' })}</p>
          <p>{intl.formatMessage({ id: 'about.content_2' })}</p>
        </div>
        <div className="about-image">
          <img
            alt={intl.formatMessage({ id: 'about.photo_alt' })}
            src={aboutIcon}
            style={{ width: '100px', height: '100px' }}
          />
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
};

export default injectIntl(About);
