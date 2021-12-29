import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { Media } from 'reactstrap';
import { injectIntl } from 'react-intl';

import Content from '../components/Content';
import Navigation from '../components/Navigation';
import NavigationItem from '../components/NavigationItem';

import ApplicationCarousel from '../components/ApplicationCarousel';
import ApplicationHero from '../components/ApplicationHero';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import About from '../components/About';

const letterCarouselImage = require('../assets/images/letter_carousel.png');
const heroBackground = require('../assets/images/bg-6.jpg');
const letterIcon = require('../assets/images/letter_icon.svg');

const Home = ({ intl }) => (
  <Content>
    <Navigation>
      <NavigationItem to="apps" offset={-85}>{intl.formatMessage({ id: 'home.apps_title' })}</NavigationItem>
      <NavigationItem to="about" offset={-5}>{intl.formatMessage({ id: 'about.title' })}</NavigationItem>
      <NavigationItem to="contact" offset={-85}>{intl.formatMessage({ id: 'contact.title' })}</NavigationItem>
    </Navigation>
    <Parallax
      bgImage={heroBackground}
      strength={500}
    >
      <ApplicationCarousel>
        <ApplicationHero
          image={letterCarouselImage}
          title={intl.formatMessage({ id: 'letter.title' })}
          link={intl.formatMessage({ id: 'letter.link' })}
          appStoreLink="http://itunes.apple.com/app/letter/id498506154"
          description={intl.formatMessage({ id: 'letter.teaser' })}
        />
      </ApplicationCarousel>
    </Parallax>
    <Section
      id="apps"
      title={intl.formatMessage({ id: 'home.apps_title' })}
      subtitle={intl.formatMessage({ id: 'home.apps_subtitle' })}
    >
      <Media>
        <Media body>
          <h4>{intl.formatMessage({ id: 'letter.title' })}</h4>
          <p>
            {intl.formatMessage({ id: 'letter.teaser' })}
            {' '}
            <a href={intl.formatMessage({ id: 'letter.link' })}>
              {intl.formatMessage({ id: 'common.more' })}
              ...
            </a>
          </p>
        </Media>
        <Media right className="ml-3">
          <a href={intl.formatMessage({ id: 'letter.link' })}><img src={letterIcon} style={{ width: '100px', height: '100px' }} alt={intl.formatMessage({ id: 'letter.title' })} /></a>
        </Media>
      </Media>
    </Section>
    <About />
    <ContactForm />
  </Content>
);

Home.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
};

export default injectIntl(Home);
