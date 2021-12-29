import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { injectIntl } from 'react-intl';
import ImageGallery from 'react-image-gallery';
import { Container, Row, Col } from 'reactstrap';

import Content from '../components/Content';
import Navigation from '../components/Navigation';
import NavigationItem from '../components/NavigationItem';
import Feature from '../components/Feature';

import ApplicationCarousel from '../components/ApplicationCarousel';
import ApplicationHero from '../components/ApplicationHero';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

const letterCarouselImage = require('../assets/images/letter_carousel.png');
const heroBackground = require('../assets/images/bg-7.jpg');
const letterFeatures = require('../assets/images/letter_features.png');

class Letter extends Component {
  static propTypes = {
    t: PropTypes.func,
  };

  constructor() {
    super();
    this.state = { navigationOpen: false };
    this.toggleNavigation.bind(this);
    this.ipadImages = [1, 2, 3, 4, 5].map((index) => ({
      original: `/screenshots/letter/letter_ipad_${index}_de.png`,
      thumbnail: `/screenshots/letter/letter_ipad_${index}_de.png`,
    }));

    this.iphoneImages = [1, 2, 3, 4, 5].map((index) => ({
      original: `/screenshots/letter/letter_iphone_${index}_de.png`,
      thumbnail: `/screenshots/letter/letter_iphone_${index}_de.png`,
    }));
  }

  toggleNavigation() {
    this.setState({ navigationOpen: !this.state.navigationOpen });
  }

  renderNavigation() {
    const { t } = this.props;
    return (
      <Navigation>
        <NavigationItem to="features" offset={-85}>{intl.formatMessage({ id: 'letter.features')}</NavigationItem>
        <NavigationItem to="description" offset={-55}>{intl.formatMessage({ id: 'letter.description')}</NavigationItem>
        <NavigationItem to="screenshots" offset={-85}>{intl.formatMessage({ id: 'letter.screenshots')}</NavigationItem>
        <NavigationItem to="video" offset={-55}>{intl.formatMessage({ id: 'letter.video')}</NavigationItem>
        <NavigationItem to="contact" offset={-85}>{intl.formatMessage({ id: 'contact.title')}</NavigationItem>
      </Navigation>
    );
  }

  render() {
    const { t } = this.props;

    return (
      <Content>
        {this.renderNavigation()}
        <Parallax
          bgImage={heroBackground}
          strength={500}
        >
          <ApplicationCarousel>
            <ApplicationHero
              image={letterCarouselImage}
              title={intl.formatMessage({ id: 'letter.title')}
              appStoreLink="http://itunes.apple.com/app/letter/id498506154"
              description={intl.formatMessage({ id: 'letter.teaser')}
            />
          </ApplicationCarousel>
        </Parallax>
        <Section
          id="features"
          title={intl.formatMessage({ id: 'letter.features')}
          subtitle={intl.formatMessage({ id: 'letter.features_subtitle')}
        />
        <Container id="features" style={{ marginTop: '-20px', paddingBottom: '60px' }}>
          <Row>
            <Col md="12" lg="4">
              <Feature
                title={intl.formatMessage({ id: 'letter.features_print_title')}
                description={intl.formatMessage({ id: 'letter.features_print_description')}
                icon="fa-print"
              />
              <Feature
                title={intl.formatMessage({ id: 'letter.features_storage_title')}
                description={intl.formatMessage({ id: 'letter.features_storage_description')}
                icon="fa-cloud"
              />
              <Feature
                title={intl.formatMessage({ id: 'letter.features_search_title')}
                description={intl.formatMessage({ id: 'letter.features_search_description')}
                icon="fa-search"
              />
            </Col>
            <Col className="center d-none d-lg-block d-xl-block">
              <img style={{ height: '500px' }} src={letterFeatures} />
            </Col>
            <Col md="12" lg="4">
              <Feature
                title={intl.formatMessage({ id: 'letter.features_addresses_title')}
                description={intl.formatMessage({ id: 'letter.features_addresses_description')}
                icon="fa-user"
                right
              />
              <Feature
                title={intl.formatMessage({ id: 'letter.features_signature_title')}
                description={intl.formatMessage({ id: 'letter.features_signature_description')}
                icon="fa-pencil"
                right
              />
              <Feature
                title={intl.formatMessage({ id: 'letter.features_templates_title')}
                description={intl.formatMessage({ id: 'letter.features_templates_description')}
                icon="fa-file-alt"
                right
              />
            </Col>
          </Row>
        </Container>
        <Section
          id="description"
          title={intl.formatMessage({ id: 'letter.description')}
          subtitle={intl.formatMessage({ id: 'letter.description_subtitle')}
          zebra
        >
          <div className="justify">
            <p>{intl.formatMessage({ id: 'letter.description_1')}</p>
            <p>{intl.formatMessage({ id: 'letter.description_2')}</p>
            <p>{intl.formatMessage({ id: 'letter.description_3')}</p>
            <p>{intl.formatMessage({ id: 'letter.description_4')}</p>
            <p>{intl.formatMessage({ id: 'letter.description_5')}</p>
          </div>
        </Section>
        <Section
          id="screenshots"
          title={intl.formatMessage({ id: 'letter.screenshots')}
          subtitle={intl.formatMessage({ id: 'letter.screenshots_subtitle')}
        />
        <Container>
          <div className="gallery gallery-ipad"><ImageGallery items={this.ipadImages} /></div>
          <div className="gallery gallery-iphone"><ImageGallery items={this.iphoneImages} /></div>
        </Container>
        <Section
          id="video"
          title={intl.formatMessage({ id: 'letter.video')}
          subtitle={intl.formatMessage({ id: 'letter.video_subtitle')}
          zebra
        >
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="//www.youtube.com/embed/b0j3EmhudzQ?list=UUHPQwvjmHnlm3vcnnfAoliw" />
          </div>
        </Section>
        <ContactForm />
      </Content>
    );
  }
}

export default injectIntl(Letter);
