import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { Media } from 'reactstrap';
import { withTranslation } from 'react-i18next';

import Section from './Section';

import './About.scss';

const aboutIcon = require('../assets/images/david.png');
const aboutBackground = require('../assets/images/bg-5.jpg');

class About extends Component {
  static propTypes = {
    t: PropTypes.func,
  }

  render() {
    const { t } = this.props;

    return (
      <Parallax
        bgImage={aboutBackground}
        strength={500}>
        <Section
          id="about"
          title={t('about.title')}
          subtitle={t('about.subtitle')}
          dark
        >
          <Media>
            <Media body>
              <h4>David Übelacker</h4>
              <p>{t('about.content_1')}</p>
              <p>{t('about.content_2')}</p>
            </Media>
            <Media right className="ml-3">
              <img src={aboutIcon} style={ { width: '100px', height: '100px' } } className="rounded-circle"/>
            </Media>
          </Media>

        </Section>
      </Parallax>
    );
  }
}

export default withTranslation()(About);
