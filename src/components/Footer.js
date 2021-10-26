import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import moment from 'moment';
import { withTranslation } from 'react-i18next';

import Section from './Section';

import './Footer.css';

const background = require('../assets/images/bg-7.jpg');

class Footer extends Component {
  static propTypes = {
    t: PropTypes.func,
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <div className="footer">© {moment().year()} David Übelacker, {t('footer.rights')}&nbsp;
          | <a href={t('footer.imprint_link')}>{t('footer.imprint')}</a>&nbsp;
          | <a href={t('footer.privacy_link')}>{t('footer.privacy')}</a>
          <br/>
          <a href="/en">English</a> | <a href="/de">Deutsch</a>
        </div>

        <Parallax
          bgImage={background}
          strength={500}>
          <Section dark>
            <div className="footer-quote">
              <i className="fas fa-angle-double-left" aria-hidden="true"/>
              &nbsp;What one programmer can do in one month, two programmers can do in two months.&nbsp;
              <i className="fas fa-angle-double-right" aria-hidden="true"></i>
              <br/>- Fred Brooks
            </div>
          </Section>
        </Parallax>
      </div>
    );
  }
}

export default withTranslation()(Footer);
