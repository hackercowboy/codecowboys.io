import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { Media } from 'reactstrap';
import { withTranslation } from 'react-i18next';

import Content from '../components/Content';
import Navigation from '../components/Navigation';
import NavigationItem from '../components/NavigationItem';

import ApplicationCarousel from '../components/ApplicationCarousel';
import ApplicationHero from '../components/ApplicationHero';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import About from '../components/About';

const letterCarouselImage = require('../assets/images/letter_carousel.png');
const videoPartyCarouselImage = require('../assets/images/video_party_carousel.png');
const heroBackground = require('../assets/images/bg-6.jpg');
const letterIcon = require('../assets/images/letter_icon.svg');
const videoPartyIcon = require('../assets/images/video_party_icon.svg');

class Home extends Component {
  static propTypes = {
    t: PropTypes.func,
  };

  constructor() {
    super();
    this.state = { navigationOpen: false };
    this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({ navigationOpen: !this.state.navigationOpen });
  }

  renderNavigation() {
    const { t } = this.props;
    return (
      <Navigation>
        <NavigationItem to="apps" offset={-85}>{t('home.apps_title')}</NavigationItem>
        <NavigationItem to="about" offset={-5}>{t('about.title')}</NavigationItem>
        <NavigationItem to="contact" offset={-85}>{t('contact.title')}</NavigationItem>
      </Navigation>
    );
  }

  render() {
    const { t } = this.props;

    return (
      <Content>
        {this.renderNavigation()}
        <Parallax
          bgImage={heroBackground }
          strength={500}>
          <ApplicationCarousel>
            <ApplicationHero
              image={letterCarouselImage}
              title={t('letter.title')}
              link={t('letter.link')}
              appStoreLink="http://itunes.apple.com/app/letter/id498506154"
              description={t('letter.teaser')}/>
            <ApplicationHero
              image={videoPartyCarouselImage}
              title={t('video_party.title')}
              description={t('video_party.teaser')}
              soon />
          </ApplicationCarousel>
        </Parallax>
        <Section
          id="apps"
          title={t('home.apps_title')}
          subtitle={t('home.apps_subtitle')}
        >
          <Media>
            <Media body>
              <h4>{t('letter.title')}</h4>
              <p>{t('letter.teaser')} <a href={t('letter.link')}>{t('common.more')}...</a></p>
            </Media>
            <Media right className="ml-3">
              <a href={t('letter.link')}><img src={letterIcon} style={ { width: '100px', height: '100px' } }/></a>
            </Media>
          </Media>
          <Media className="mt-3">
            <Media body>
              <h4>{t('video_party.title')}</h4>
              <p>{t('video_party.teaser')}</p>
            </Media>
            <Media right className="ml-3">
              <img src={videoPartyIcon} style={ { width: '100px', height: '100px' } }/>
            </Media>
          </Media>
        </Section>
        <About/>
        <ContactForm/>
      </Content>
    );
  }
}

export default withTranslation()(Home);
