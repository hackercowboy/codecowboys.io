import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { injectIntl } from 'react-intl';
import ImageGallery from 'react-image-gallery';

import ApplicationCarousel from '../components/ApplicationCarousel';
import ApplicationHero from '../components/ApplicationHero';
import ContactForm from '../components/ContactForm';
import Container from '../components/Container';
import Feature from '../components/Feature';
import Features from '../components/Features';
import FeatureGroup from '../components/FeatureGroup';
import FeatureImage from '../components/FeatureImage';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import NavigationItem from '../components/NavigationItem';
import ScrollButton from '../components/ScrollButton';
import Section from '../components/Section';

const letterCarouselImage = require('../assets/images/letter_carousel.png');
const heroBackground = require('../assets/images/bg-7.jpg');
const letterFeatures = require('../assets/images/letter_features.png');

function Letter({ intl }) {
  const ipadImages = [1, 2, 3, 4, 5].map((index) => ({
    original: `/screenshots/letter/letter_ipad_${index}_de.png`,
    thumbnail: `/screenshots/letter/letter_ipad_${index}_de.png`,
  }));

  const iphoneImages = [1, 2, 3, 4, 5].map((index) => ({
    original: `/screenshots/letter/letter_iphone_${index}_de.png`,
    thumbnail: `/screenshots/letter/letter_iphone_${index}_de.png`,
  }));

  return (
    <Main className="presentation">
      <Header>
        <Navigation>
          <NavigationItem target="features" offset={-85}>{intl.formatMessage({ id: 'letter.features' })}</NavigationItem>
          <NavigationItem target="description" offset={-55}>{intl.formatMessage({ id: 'letter.description' })}</NavigationItem>
          <NavigationItem target="screenshots" offset={-85}>{intl.formatMessage({ id: 'letter.screenshots' })}</NavigationItem>
          <NavigationItem target="video" offset={-55}>{intl.formatMessage({ id: 'letter.video' })}</NavigationItem>
          <NavigationItem target="contact" offset={-85}>{intl.formatMessage({ id: 'contact.title' })}</NavigationItem>
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
              icon="fa-print"
            />
            <Feature
              title={intl.formatMessage({ id: 'letter.features_storage_title' })}
              description={intl.formatMessage({ id: 'letter.features_storage_description' })}
              icon="fa-cloud"
            />
            <Feature
              title={intl.formatMessage({ id: 'letter.features_search_title' })}
              description={intl.formatMessage({ id: 'letter.features_search_description' })}
              icon="fa-search"
            />
          </FeatureGroup>
          <FeatureImage
            src={letterFeatures}
            style={{ width: '280px' }}
            alt={intl.formatMessage({ id: 'letter.features' })}
          />
          <FeatureGroup>
            <Feature
              title={intl.formatMessage({ id: 'letter.features_addresses_title' })}
              description={intl.formatMessage({ id: 'letter.features_addresses_description' })}
              icon="fa-user"
              right
            />
            <Feature
              title={intl.formatMessage({ id: 'letter.features_signature_title' })}
              description={intl.formatMessage({ id: 'letter.features_signature_description' })}
              icon="fa-pencil"
              right
            />
            <Feature
              title={intl.formatMessage({ id: 'letter.features_templates_title' })}
              description={intl.formatMessage({ id: 'letter.features_templates_description' })}
              icon="fa-file-alt"
              right
            />
          </FeatureGroup>
        </Features>
      </Section>
      <Section
        id="description"
        title={intl.formatMessage({ id: 'letter.description' })}
        subtitle={intl.formatMessage({ id: 'letter.description_subtitle' })}
        light
      >
        <div className="justify">
          <p>{intl.formatMessage({ id: 'letter.description_1' })}</p>
          <p>{intl.formatMessage({ id: 'letter.description_2' })}</p>
          <p>{intl.formatMessage({ id: 'letter.description_3' })}</p>
          <p>{intl.formatMessage({ id: 'letter.description_4' })}</p>
          <p>{intl.formatMessage({ id: 'letter.description_5' })}</p>
        </div>
      </Section>
      <Section
        id="screenshots"
        title={intl.formatMessage({ id: 'letter.screenshots' })}
        subtitle={intl.formatMessage({ id: 'letter.screenshots_subtitle' })}
      />
      <Container>
        <div className="gallery gallery-ipad"><ImageGallery items={ipadImages} /></div>
        <div className="gallery gallery-iphone"><ImageGallery items={iphoneImages} /></div>
      </Container>
      <Section
        id="video"
        title={intl.formatMessage({ id: 'letter.video' })}
        subtitle={intl.formatMessage({ id: 'letter.video_subtitle' })}
        light
      >
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="video" className="embed-responsive-item" src="//www.youtube.com/embed/b0j3EmhudzQ?list=UUHPQwvjmHnlm3vcnnfAoliw" />
        </div>
      </Section>
      <ContactForm />
    </Main>
  );
}

Letter.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
};

export default injectIntl(Letter);
