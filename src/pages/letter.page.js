import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { injectIntl } from 'react-intl';
import Head from 'next/head';

import {
  IoPrintOutline, IoCloudyOutline, IoSearchOutline, IoPeopleOutline, IoPencilOutline, IoReaderOutline,
} from 'react-icons/io5';

import ApplicationCarousel from '../components/ApplicationCarousel';
import ApplicationHero from '../components/ApplicationHero';
import ContactForm from '../components/ContactForm';
import Feature from '../components/Feature';
import FeatureGroup from '../components/FeatureGroup';
import FeatureImage from '../components/FeatureImage';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import NavigationItem from '../components/NavigationItem';
import Page from '../components/Page';
import Screenshots from '../components/Screenshots';
import ScrollButton from '../components/ScrollButton';
import Section from '../components/Section';

function Letter({ intl }) {
  const ipadImages = [1, 2, 3, 4, 5].map((index) => ({
    original: `/screenshots/letter/letter_ipad_${index}_de.webp`,
    thumbnail: `/screenshots/letter/letter_ipad_${index}_de.webp`,
  }));

  const iphoneImages = [1, 2, 3, 4, 5].map((index) => ({
    original: `/screenshots/letter/letter_iphone_${index}_de.webp`,
    thumbnail: `/screenshots/letter/letter_iphone_${index}_de.webp`,
  }));

  return (
    <Page className="presentation">
      <Head>
        <meta name="apple-itunes-app" content="app-id=id498506154" />
      </Head>
      <Header title={intl.formatMessage({ id: 'letter.title' })} description={intl.formatMessage({ id: 'letter.teaser' })}>
        <Navigation>
          <NavigationItem id="navigation-item-features" target="features" offset={-94}>{intl.formatMessage({ id: 'letter.features' })}</NavigationItem>
          <NavigationItem id="navigation-item-description" target="description" offset={-88}>{intl.formatMessage({ id: 'letter.description' })}</NavigationItem>
          <NavigationItem id="navigation-item-screenshots" target="screenshots" offset={-94}>{intl.formatMessage({ id: 'letter.screenshots' })}</NavigationItem>
          <NavigationItem id="navigation-item-contact" target="contact" offset={-94}>{intl.formatMessage({ id: 'contact.title' })}</NavigationItem>
        </Navigation>
      </Header>
      <Parallax
        bgImage="/images/bg-7.webp"
        bgImageAlt={intl.formatMessage({ id: 'background.alt_7' })}
        strength={500}
      >
        <ApplicationCarousel>
          <ApplicationHero
            image="/images/letter_carousel.webp"
            title={intl.formatMessage({ id: 'letter.title' })}
            appStoreLink="http://itunes.apple.com/app/letter/id498506154"
            description={intl.formatMessage({ id: 'letter.teaser' })}
          />
        </ApplicationCarousel>
        <ScrollButton target="features" />
      </Parallax>
      <Section
        id="features"
        title={intl.formatMessage({ id: 'letter.features' })}
        subtitle={intl.formatMessage({ id: 'letter.features_subtitle' })}
      >
        <Features>
          <FeatureGroup>
            <Feature
              title={intl.formatMessage({ id: 'letter.features_print_title' })}
              description={intl.formatMessage({ id: 'letter.features_print_description' })}
              icon={<IoPrintOutline size="3em" />}
            />
            <Feature
              title={intl.formatMessage({ id: 'letter.features_storage_title' })}
              description={intl.formatMessage({ id: 'letter.features_storage_description' })}
              icon={<IoCloudyOutline size="3em" />}
            />
            <Feature
              title={intl.formatMessage({ id: 'letter.features_search_title' })}
              description={intl.formatMessage({ id: 'letter.features_search_description' })}
              icon={<IoSearchOutline size="3em" />}
            />
          </FeatureGroup>
          <FeatureImage
            src="/images/letter_features.webp"
            width={280}
            alt={intl.formatMessage({ id: 'letter.features' })}
          />
          <FeatureGroup>
            <Feature
              title={intl.formatMessage({ id: 'letter.features_addresses_title' })}
              description={intl.formatMessage({ id: 'letter.features_addresses_description' })}
              icon={<IoPeopleOutline size="3em" />}
              right
            />
            <Feature
              title={intl.formatMessage({ id: 'letter.features_signature_title' })}
              description={intl.formatMessage({ id: 'letter.features_signature_description' })}
              icon={<IoPencilOutline size="3em" />}
              right
            />
            <Feature
              title={intl.formatMessage({ id: 'letter.features_templates_title' })}
              description={intl.formatMessage({ id: 'letter.features_templates_description' })}
              icon={<IoReaderOutline size="3em" />}
              right
            />
          </FeatureGroup>
        </Features>
      </Section>
      <Section
        id="description"
        title={intl.formatMessage({ id: 'letter.description' })}
        subtitle={intl.formatMessage({ id: 'letter.description_subtitle' })}
      >
        <p>{intl.formatMessage({ id: 'letter.description_1' })}</p>
        <p>{intl.formatMessage({ id: 'letter.description_2' })}</p>
        <p>{intl.formatMessage({ id: 'letter.description_3' })}</p>
        <p>{intl.formatMessage({ id: 'letter.description_4' })}</p>
        <p>{intl.formatMessage({ id: 'letter.description_5' })}</p>
      </Section>
      <Section
        id="screenshots"
        title={intl.formatMessage({ id: 'letter.screenshots' })}
        subtitle={intl.formatMessage({ id: 'letter.screenshots_subtitle' })}
      >
        <Screenshots ipadImages={ipadImages} iphoneImages={iphoneImages} />
      </Section>
      <Section
        id="contact"
        title={intl.formatMessage({ id: 'contact.title' })}
        subtitle={intl.formatMessage({ id: 'contact.subtitle' })}
      >
        <ContactForm />
      </Section>
      <Footer />
    </Page>
  );
}

Letter.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
};

export default injectIntl(Letter);
