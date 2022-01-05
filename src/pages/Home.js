import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { injectIntl } from 'react-intl';

import Main from '../components/Main';
import Header from '../components/Header';

import Navigation from '../components/Navigation';
import NavigationItem from '../components/NavigationItem';

import ApplicationCarousel from '../components/ApplicationCarousel';
import ApplicationHero from '../components/ApplicationHero';
import Application from '../components/Application';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import About from '../components/About';

import ScrollButton from '../components/ScrollButton';

const letterCarouselImage = require('../assets/images/letter_carousel.png');
const heroBackground = require('../assets/images/bg-6.jpg');
const letterIcon = require('../assets/images/letter_icon.svg');
const aboutBackground = require('../assets/images/bg-5.jpg');

function Home({ intl }) {
  return (
    <Main className="presentation">
      <Header>
        <Navigation>
          <NavigationItem target="apps" offset={-76}>{intl.formatMessage({ id: 'home.apps_title' })}</NavigationItem>
          <NavigationItem target="about" offset={-5}>{intl.formatMessage({ id: 'about.title' })}</NavigationItem>
          <NavigationItem target="contact" offset={-76}>{intl.formatMessage({ id: 'contact.title' })}</NavigationItem>
        </Navigation>
      </Header>
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
        <ScrollButton target="apps" />
      </Parallax>
      <Section
        id="apps"
        title={intl.formatMessage({ id: 'home.apps_title' })}
        subtitle={intl.formatMessage({ id: 'home.apps_subtitle' })}
        offset={-76}
      >
        <Application
          title={intl.formatMessage({ id: 'letter.title' })}
          teaser={intl.formatMessage({ id: 'letter.teaser' })}
          link={intl.formatMessage({ id: 'letter.link' })}
          image={letterIcon}
        />
      </Section>
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
          <About />
        </Section>
      </Parallax>
      <ContactForm />
    </Main>
  );
}

Home.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
};

export default injectIntl(Home);
