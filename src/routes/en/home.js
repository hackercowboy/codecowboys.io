import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Media } from 'reactstrap';

import Content from '../../components/Content';
import Navigation from '../../components/Navigation';
import NavigationItem from '../../components/NavigationItem';

import ApplicationCarousel from '../../components/ApplicationCarousel';
import ApplicationHero from '../../components/ApplicationHero';
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';

const letterCarouselImage = require('../..//assets/images/letter_carousel_en.png');
const heroBackground = require('../../assets/images/bg-6.jpg');
const aboutBackground = require('../../assets/images/bg-5.jpg');
const letterIcon = require('../../assets/images/letter_icon.svg');
const aboutIcon = require('../../assets/images/david.png');
const videoPartyIcon = require('../../assets/images/channeleditor_icon.png');

export default class Index extends Component {
  constructor() {
    super();
    this.state = { navigationOpen: false };
    this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({ navigationOpen: !this.state.navigationOpen });
  }

  renderNavigation() {
    return (
      <Navigation>
        <NavigationItem to="apps" offset={-85}>Apps</NavigationItem>
        <NavigationItem to="about" offset={-5}>About</NavigationItem>
        <NavigationItem to="contact" offset={-85}>Contact</NavigationItem>
      </Navigation>
    );
  }

  render() {
    return (
      <Content>
        {this.renderNavigation()}
        <Parallax
          bgImage={heroBackground}
          strength={500}>
          <ApplicationCarousel>
            <ApplicationHero
              image={letterCarouselImage}
              title="Letter"
              description="With the Letter app you can now write your personal letters on the iPhone, iPad and iPod Touch too, when and where you want."/>
            <ApplicationHero
              image={letterCarouselImage}
              title="Letter"
              description="With the Letter app you can now write your personal letters on the iPhone, iPad and iPod Touch too, when and where you want."/>
          </ApplicationCarousel>
        </Parallax>
        <Section
          id="apps"
          title="Apps"
          subtitle="A couple of great apps for you!"
        >
          <Media>
            <Media body>
              <h4>Letter</h4>
              <p>With the Letter app you can now write your personal letters on the iPhone, iPad and iPod Touch too, when and where you want. More...</p>
            </Media>
            <Media right className="ml-3">
              <img src={letterIcon} style={ { width: '100px', height: '100px' } }/>
            </Media>
          </Media>
          <Media className="mt-3">
            <Media body>
              <h4>Video Party</h4>
              <p>With the Letter app you can now write your personal letters on the iPhone, iPad and iPod Touch too, when and where you want. More...</p>
            </Media>
            <Media right className="ml-3">
              <img src={videoPartyIcon} style={ { width: '100px', height: '100px' } }/>
            </Media>
          </Media>

        </Section>
        <Parallax
          bgImage={aboutBackground}
          strength={500}>
          <Section
            id="about"
            title="About"
            subtitle="I code great apps like a cowboy!"
            dark
          >
            <Media>
              <Media body>
                <h4>David Übelacker</h4>
                <p>I am a passionate software architect working for a Swiss company.</p>
                <p>From time to time i work on some nice projects in my free time, which i publish on this site.</p>
              </Media>
              <Media right className="ml-3">
                <img src={aboutIcon} style={ { width: '100px', height: '100px' } } className="rounded-circle"/>
              </Media>
            </Media>

          </Section>
        </Parallax>
        <Section
          id="contact"
          title="Contact"
          teaser="Please contact me if you have any questions">
          <ContactForm/>
        </Section>
      </Content>
    );
  }
}

