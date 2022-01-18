import React from 'react';
import { Parallax } from 'react-parallax';
import { useIntl } from 'react-intl';

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

function Home() {
  const intl = useIntl();
  return (
    <Main className="presentation">
      <Header>
        <Navigation>
          <NavigationItem id="navigation-item-apps" target="apps" offset={-94}>{intl.formatMessage({ id: 'home.apps_title' })}</NavigationItem>
          <NavigationItem id="navigation-item-about" target="about" offset={-88}>{intl.formatMessage({ id: 'about.title' })}</NavigationItem>
          <NavigationItem id="navigation-item-contact" target="contact" offset={-94}>{intl.formatMessage({ id: 'contact.title' })}</NavigationItem>
        </Navigation>
      </Header>
      <Parallax
        bgImage="/images/bg-6.webp"
        strength={500}
      >
        <ApplicationCarousel>
          <ApplicationHero
            image="/images/letter_carousel.webp"
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
      >
        <Application
          title={intl.formatMessage({ id: 'letter.title' })}
          teaser={intl.formatMessage({ id: 'letter.teaser' })}
          link={intl.formatMessage({ id: 'letter.link' })}
          image="/images/letter_icon.svg"
        />
      </Section>
      <Parallax
        bgImage="/images/bg-5.webp"
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
      <Section
        id="contact"
        title={intl.formatMessage({ id: 'contact.title' })}
        subtitle={intl.formatMessage({ id: 'contact.subtitle' })}
      >
        <ContactForm />
      </Section>
    </Main>
  );
}

export default Home;
