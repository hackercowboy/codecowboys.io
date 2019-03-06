import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import './ApplicationHero.css';

const appStoreButton = require('../assets/images/app_store_button.svg');
const appStoreButtonSoon = require('../assets/images/app_store_button_soon.svg');

export default class ApplicationHero extends Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    soon: PropTypes.bool,
    link: PropTypes.string,
    appStoreLink: PropTypes.string,
  }

  render() {
    const {
      image, title, description, soon, link, appStoreLink,
    } = this.props;
    return (
      <Container className="application-hero-container">
        <Row>
          <Col sm="12" md="6">
            <div className="application-hero-image">
              <img src={image} className="img-fluid"/>
            </div>
          </Col>
          <Col>
            <div className="application-hero-teaser">
              { link ? (<h2><a href={link}>{title}</a></h2>) : (<h2>{title}</h2>)}
              { link ? (<p><a href={link}>{description}</a></p>) : (<p>{description}</p>)}
              {soon ? (<img src={appStoreButtonSoon}/>) : (<a href={appStoreLink}><img src={appStoreButton}/></a>) }
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
