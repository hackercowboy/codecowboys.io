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
    appStoreLink: PropTypes.string,
  }

  render() {
    const { image, title, description, soon, appStoreLink } = this.props;
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
              <h2>{title}</h2>
              <p>{description}</p>
              {soon ? (<img src={appStoreButtonSoon}/>) : (<a href={appStoreLink}><img src={appStoreButton}/></a>) }
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
